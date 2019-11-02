import { Deployer } from '../utils';
import { RPCEndpoint } from '../../constant/nodes';
import { address as from } from '../../constant/addresses';

const run = async () => {
  const deployer = new Deployer(RPCEndpoint, from);

  const zetherVerifierAddress = await deployer.deployZetherVerifier();
  const burnVerifierAddress = await deployer.deployBurnVerifier();
  const tokenAddress = await deployer.deployCashToken();
  await deployer.mintCashToken(tokenAddress, from, 10000000);
  const zscAddress = await deployer.deployZSC(tokenAddress, zetherVerifierAddress, burnVerifierAddress, 6);
  await deployer.approveCashToken(tokenAddress, zscAddress, from, 10000000);
};

run();
