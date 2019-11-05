const Web3 = require("web3");
const Provider = require('../src/provider');
const WSRPCEndpoint = require('../content/config.json').WSRPCEndpoint;
const ZSCAddress = require('../content/config.json').ZSCAddress;
const BobPublicKey = require('../content/config.json').BobPublicKey;
const Client = require("../lib/anonymous.js/src/client.js");
const ZSC = require("../content/contract-artifacts/ZSC.json");

(async () => {
    var provider = new Provider(WSRPCEndpoint);
    const web3 = new Web3(await provider.getProvider());
    web3.transactionConfirmationBlocks = 1;

    const zscObject = new web3.eth.Contract(ZSC.abi, ZSCAddress);

    const accounts = await web3.eth.getAccounts();
    const alice = new Client(zscObject, accounts[0], web3);
    await alice.initialize();
    await alice.deposit(1000000);
    await alice.withdraw(100000);
    alice.friends.add("Bob", BobPublicKey);
    await alice.transfer('Bob', 100000);
})().catch(console.error);