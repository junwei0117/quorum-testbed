import Web3 from 'web3';

import { ZetherVerifier } from '../constant/contract-artifacts/ZetherVerifier';
import { BurnVerifier } from '../constant/contract-artifacts/BurnVerifier';
import { CashToken } from '../constant/contract-artifacts/CashToken';
import { ZSC } from '../constant/contract-artifacts/ZSC';

export class Deployer {
  public deployZetherVerifier: () => Promise<any>;
  public deployBurnVerifier: () => Promise<any>;
  public deployCashToken: () => Promise<any>;
  public deployZSC: (ash: any, zether: any, burn: any, epochLength: any) => Promise<any>;
  public mintCashToken: (contractAddress: string, address: string, value: number) => Promise<any>;
  // tslint:disable-next-line:max-line-length
  public approveCashToken: (contractAddress: string, zscAddress: string, address: string, value: number) => Promise<any>;

  constructor(endpoint: string, from: string) {
    const web3 = new Web3(endpoint);

    this.deployZetherVerifier = () => {
      const abi = (ZetherVerifier as any).abi;
      const bytecode = (ZetherVerifier as any).bytecode;
      const contract = new web3.eth.Contract(abi);
      return new Promise((resolve, reject) => {
        contract
          .deploy({
            data: bytecode,
          })
          .send({
            from,
            gas: 470000000,
          })
          .on('error', err => {
            reject(err);
          })
          .on('receipt', receipt => {
            console.log('Zether verifier mined, address = "' + receipt.contractAddress + '".');
            resolve(receipt.contractAddress);
          });
      });
    };

    this.deployBurnVerifier = () => {
      const abi = (BurnVerifier as any).abi;
      const bytecode = (BurnVerifier as any).bytecode;
      const contract = new web3.eth.Contract(abi);
      return new Promise((resolve, reject) => {
        contract
          .deploy({
            data: bytecode,
          })
          .send({
            from,
            gas: 470000000,
          })
          .on('error', err => {
            reject(err);
          })
          .on('receipt', receipt => {
            console.log('Burn verifier mined, address = "' + receipt.contractAddress + '".');
            resolve(receipt.contractAddress);
          });
      });
    };

    this.deployCashToken = () => {
      const abi = (CashToken as any).abi;
      const bytecode = (CashToken as any).bytecode;
      const contract = new web3.eth.Contract(abi);
      return new Promise((resolve, reject) => {
        contract
          .deploy({
            data: bytecode,
          })
          .send({
            from,
            gas: 470000000,
          })
          .on('error', err => {
            reject(err);
          })
          .on('receipt', receipt => {
            console.log('ERC20 contract mined, address = "' + receipt.contractAddress + '".');
            resolve(receipt.contractAddress);
          });
      });
    };

    this.deployZSC = (cash, zether, burn, epochLength) => {
      const abi = (ZSC as any).abi;
      const bytecode = (ZSC as any).bytecode;
      const contract = new web3.eth.Contract(abi);
      return new Promise((resolve, reject) => {
        contract
          .deploy({
            data: bytecode,
            arguments: [cash, zether, burn, epochLength],
            })
            .send({
              from,
              gas: 470000000,
            })
            .on('error', err => {
              reject(err);
            })
            .on('receipt', receipt => {
              console.log('ZSC main contract deployed, address = "' + receipt.contractAddress + '".');
              resolve(receipt.contractAddress);
            });
      });
    };

    this.mintCashToken = (contractAddress, address, value) => {
      const abi = (CashToken as any).abi;
      const ercContract = new web3.eth.Contract(abi, contractAddress);
      return new Promise((resolve, reject) => {
        ercContract.methods.mint(address, value)
          .send({
            from,
            gas: 470000000,
          })
          .on('error', (err: any) => {
            reject(err);
          })
          .on('receipt',
            (receipt: any) => {
              ercContract.methods.balanceOf(address).call().then((balance: string) => {
                console.log('ERC20 funds minted, balance = ' + balance + '.');
                resolve(receipt);
              });
            });
      });
    };

    this.approveCashToken = (contractAddress, zscAddress, address, value) => {
      const abi = (CashToken as any).abi;
      const ercContract = new web3.eth.Contract(abi, contractAddress);
      return new Promise((resolve, reject) => {
        ercContract.methods.approve(zscAddress, value)
          .send({
            from,
            gas: 470000000,
          })
          .on('error', (err: any) => {
            reject(err);
          })
          .on('receipt', (receipt: any) => {
            ercContract.methods.allowance(address, zscAddress).call()
              .then((allowance: string) => {
                console.log('ERC funds approved for transfer to ZSC, allowance = ' + allowance + '.');
                resolve(receipt);
              });
          });
      });
    };
  }
}
