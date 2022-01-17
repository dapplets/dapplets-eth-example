# Contracot for Tutorial

Contract created for writing a tutorial on using Ethereum in a dapplet

### Shell

```shell
- yarn account, - creates 20 test Ethereum accounts for testing
- yarn compile, - compiles and creates the artifacts folder with the compiled contract
- yarn deploy, - starts the project on localhost allowing you to use the contract. Shows the address of the contract in the console.
- yarn dev, - runs the code in the contract once. When calling a new function, call this command again.
- yarn compile:run, - does **yarn compile** and **yarn deploy**
```

### Use
To run the project on localhost and test the contract, first enter `yarn account`, this will create a local node and allow contracts to be deployed. To deploy, call the `yarn deploy` command.

You will be given the address of the created contact, for example **0xa513E6E4b8f2a923D98304ec87F64353C4D5C853**. Copy it and navigate to `/contract/scripts/tutorial.js` and write it in the `contractAddress` variable. 

After that, you can test the contract.