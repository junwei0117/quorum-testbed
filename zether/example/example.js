const Web3 = require("web3");
const Client = require("../lib/anonymous.js/src/client.js");
const ZSC = require("../content/contract-artifacts/ZSC.json");
const Provider = require('../src/provider');

(async () => {
    var provider = new Provider("ws://node9.puyuma.org:23000");
    const web3 = new Web3(await provider.getProvider());

    web3.transactionConfirmationBlocks = 1;

    const zsc = '0x8a5E2a6343108bABEd07899510fb42297938D41F';

    const deployed = new web3.eth.Contract(ZSC.abi, zsc);

    const accounts = await web3.eth.getAccounts();
    const client = new Client(deployed, accounts[0], web3);
    await client.initialize();
    await client.deposit(10000);
    await client.withdraw(1000);
    client.friends.add("Alice", ['0x0eaadaaa84784811271240ec2f03b464015082426aa13a46a99a56c964a5c7cc', '0x173ce032ad098e9fcbf813696da92328257e58827f3600b259c42e52ff809433']);
    await client.transfer('Alice', 1000);
})().catch(console.error);