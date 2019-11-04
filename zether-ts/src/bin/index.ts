import { Deployer } from '../utils';
import { RPCEndpoint } from '../../constant/nodes';
import { address as from } from '../../constant/addresses';

const run = async () => {
  const deployer = new Deployer(RPCEndpoint, from);

  const zetherVerifierAddress = (await deployer.deployZetherVerifier()).contractAddress;

  const burnVerifierAddress = (await deployer.deployBurnVerifier()).contractAddress;

  const tokenAddress = (await deployer.deployCashToken()).contractAddress;

  await deployer.mintCashToken(tokenAddress, from, 10000000);

  // tslint:disable-next-line:max-line-length
  const zscAddress = (await deployer.deployZSC(tokenAddress, zetherVerifierAddress, burnVerifierAddress, 6)).contractAddress;

  await deployer.approveCashToken(tokenAddress, zscAddress, from, 10000000);
};

run().catch(console.error);
