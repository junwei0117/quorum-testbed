import Web3 from 'web3';
import { WSRPCEndpoint } from './constant/nodes';
import { ZSC } from './constant/contract-artifacts/ZSC';
import { zscAddress } from './constant/contracts';
import Client from './lib/anonymous.js/src/client';
import { Provider } from './provider';

const run = async () => {
  const provider = new Provider(WSRPCEndpoint);
  const connect = await provider.getProvider();
  // @ts-ignore
  const web3 = new Web3(connect);

  web3.transactionConfirmationBlocks = 1;

  const zscObject = new web3.eth.Contract(ZSC.abi, zscAddress);
  const accounts = await web3.eth.getAccounts();
  const client = new Client(zscObject, accounts[0], web3);
  await client.initialize();
  await client.deposit(10000);
  await client.withdraw(1000);
  client.friends.add(
    'Alice',
    ['0x0eaadaaa84784811271240ec2f03b464015082426aa13a46a99a56c964a5c7cc',
      '0x173ce032ad098e9fcbf813696da92328257e58827f3600b259c42e52ff809433'],
  );
  await client.transfer('Alice', 1000);
};

run();
