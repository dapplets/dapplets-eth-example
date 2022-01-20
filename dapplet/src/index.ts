import { } from '@dapplets/dapplet-extension';
import EXAMPLE_IMG from './icons/eth_dapplet_icon.svg';
import isValidJSON from './helpers';

@Injectable
export default class TwitterFeature {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,  @typescript-eslint/explicit-module-boundary-types
  @Inject('twitter-adapter.dapplet-base.eth') public adapter: any;

  async activate(): Promise<void> { }
}
