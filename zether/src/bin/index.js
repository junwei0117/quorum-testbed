const Deployer = require('../deployer.js');

(async () => {
    var deployer = new Deployer();
    const zether = (await deployer.deployZetherVerifier()).contractAddress;
    const burn = (await deployer.deployBurnVerifier()).contractAddress;
    const cash = (await deployer.deployCashToken()).contractAddress;
    await deployer.mintCashToken(cash);
    const zsc = (await deployer.deployZSC(cash, zether, burn, 6)).contractAddress; // epoch length in seconds.
    await deployer.approveCashToken(cash, zsc)
})().catch(console.error);