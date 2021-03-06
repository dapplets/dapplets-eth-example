import {} from '@dapplets/dapplet-extension';
import EXAMPLE_IMG from './icons/eth_dapplet_icon.svg';
import ABI from './ABI';
import isValidJSON from './helpers';

@Injectable
export default class TwitterFeature {
  @Inject('twitter-adapter.dapplet-base.eth') public adapter: any;
  private _overlay: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  async activate(): Promise<void> {
    if (Core.state === undefined) {
      alert(`
DAPPLETS x ETH EXAMPLE DAPPLET

Download the latest version of Dapplets Extension here:

https://github.com/dapplets/dapplet-extension/releases/latest
      `);
      return;
    }
    const contract = await Core.contract(
      'ethereum',
      '0x7702aE3E1E0a96A428052BF3E4CB94965F5C0d7F',
      ABI,
    );
    if (!this._overlay) {
      this._overlay = Core.overlay({ name: 'overlay', title: 'Dapplets x ETH example' }).listen({
        connectWallet: async () => {
          try {
            const wallet = await Core.wallet({ type: 'ethereum', network: 'goerli' });
            await wallet.connect();
            const currentAccounts = await wallet.request({ method: 'eth_accounts', params: [] });
            this._overlay.send('connectWallet_done', currentAccounts[0]);
          } catch (err) {
            this._overlay.send('connectWallet_undone', err);
          }
        },
        disconnectWallet: async () => {
          try {
            const wallet = await Core.wallet({ type: 'ethereum', network: 'goerli' });
            await wallet.disconnect();
            this._overlay.send('disconnectWallet_done');
          } catch (err) {
            this._overlay.send('disconnectWallet_undone', err);
          }
        },
        isWalletConnected: async () => {
          try {
            const wallet = await Core.wallet({ type: 'ethereum', network: 'goerli' });
            const isWalletConnected = await wallet.isConnected();
            this._overlay.send('isWalletConnected_done', isWalletConnected);
          } catch (err) {
            this._overlay.send('isWalletConnected_undone', err);
          }
        },
        getCurrentEthAccount: async () => {
          try {
            const wallet = await Core.wallet({ type: 'ethereum', network: 'goerli' });
            const currentAccounts = await wallet.request({ method: 'eth_accounts', params: [] });
            this._overlay.send('getCurrentEthAccount_done', currentAccounts[0]);
          } catch (err) {
            this._overlay.send('getCurrentEthAccount_undone', err);
          }
        },
        getTweets: async (op: any, { type, message }: any) => {
          try {
            const wallet = await Core.wallet({ type: 'ethereum', network: 'goerli' });
            const currentAccounts = await wallet.request({ method: 'eth_accounts', params: [] });
            console.log('currentAccounts', currentAccounts);
            const tweets = await contract.getTweets(currentAccounts[0]);
            this._overlay.send('getTweets_done', tweets.filter(isValidJSON));
          } catch (err) {
            this._overlay.send('getTweets_undone', err);
          }
        },
        addTweet: async (op: any, { type, message }: any) => {
          try {
            console.log('message.tweet', message.tweet);
            try {
              const add = await contract.addTweet(message.tweet);
              try {
                await add.wait();
              } catch (err) {
                console.log('*** ERROR in add.wait()', err);
              }
            } catch (err) {
              console.log('*** ERROR in contract.addTweet()', err);
            }
            this._overlay.send('addTweet_done');
          } catch (err) {
            this._overlay.send('addTweet_undone', err);
          }
        },
        removeTweet: async (op: any, { type, message }: any) => {
          try {
            this._overlay.send('removeTweet', true);
            const add = await contract.removeTweet(message.tweet);
            await add.wait();
            this._overlay.send('removeTweet_done', false);
          } catch (err) {
            this._overlay.send('removeTweet_undone', err);
          }
        },
      });
    }
    Core.onAction(() => this.openOverlay());
    const { button } = this.adapter.exports;

    this.adapter.attachConfig({
      POST: (ctx: any) =>
        button({
          DEFAULT: {
            img: EXAMPLE_IMG,
            tooltip: 'Parse Tweet',
            exec: () => {
              console.log('parsedCtx:', ctx);
              this.openOverlay(ctx);
            },
          },
        }),
    });
  }
  async openOverlay(props?: any): Promise<void> {
    this._overlay.send('data', props);
  }
}
