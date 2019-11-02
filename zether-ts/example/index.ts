import Web3 from 'web3';
// import { address as from } from '../constant/addresses';
import { WSRPCEndpoint } from '../constant/nodes';
import { ZSC } from '../constant/contract-artifacts/ZSC';
import { zscAddress } from '../constant/contracts';
// import { Deployer } from '../src/utils';
import Client from '../lib/anonymous.js/src/client';

const run = async () => {
  // const options = { transactionConfirmationBlocks: 1 };
  const web3 = new Web3(WSRPCEndpoint);

  // const deployer = new Deployer(RPCEndpoint, from);
  // await deployer.mintCashToken(tokenAddress, from, 10000000);
  // await deployer.approveCashToken(tokenAddress, zscAddress, from, 10000000);

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
