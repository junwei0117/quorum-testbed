const Deployer = require('../deployer.js');
const RPCEndpoint = require('../../content/config.json').RPCEndpoint;
const AliceAddress = require('../../content/config.json').AliceAddress;

(async () => {
    const deployer = new Deployer(RPCEndpoint, AliceAddress);
    const zether = (await deployer.deployZetherVerifier()).contractAddress;
    const burn = (await deployer.deployBurnVerifier()).contractAddress;
    const cash = (await deployer.deployCashToken()).contractAddress;
    await deployer.mintCashToken(cash, 100000000);
    const zsc = (await deployer.deployZSC(cash, zether, burn, 6)).contractAddress;
    await deployer.approveCashToken(cash, zsc, 100000000)
})().catch(console.error);