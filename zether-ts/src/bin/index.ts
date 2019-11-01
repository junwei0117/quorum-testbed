import { Deployer } from '../utils';
import { RPCEndpoint } from '../../constant/nodes';
import { address as from } from '../../constant/addresses';

const run = async () => {
  const deployer = new Deployer(RPCEndpoint, from);

  const zetherVerifierAddress = await deployer.deployZetherVerifier();
  const burnVerifierAddress = await deployer.deployBurnVerifier();
  const tokenAddress = await deployer.deployCashToken();
  await deployer.deployZSC(tokenAddress, zetherVerifierAddress, burnVerifierAddress, 3);
};

run();
