const Web3 = require("web3");
const ZetherVerifier = require("../content/contract-artifacts/ZetherVerifier.json");
const BurnVerifier = require("../content/contract-artifacts/BurnVerifier.json");
const CashToken = require("../content/contract-artifacts/CashToken.json");
const ZSC = require("../content/contract-artifacts/ZSC.json");

class Deployer {
    constructor(RPCEndpoint, fromAddress) {
        const web3 = new Web3(new Web3.providers.HttpProvider(RPCEndpoint))
        web3.transactionConfirmationBlocks = 1;

        this.deployZetherVerifier = () => {
            const abi = ZetherVerifier.abi;
            const bytecode = ZetherVerifier.bytecode;
            const contract = new web3.eth.Contract(abi);
            return new Promise((resolve, reject) => {
                contract
                    .deploy({
                        data: bytecode
                    })
                    .send({
                        from: fromAddress,
                        gas: 470000000
                    })
                    .on("error", (err) => {
                        reject(err);
                    })
                    .on("receipt", (receipt) => {
                        console.log("Zether verifier mined (address = \"" + receipt.contractAddress + "\").");
                        resolve(receipt);
                    });
            });
        };

        this.deployBurnVerifier = () => {
            const abi = BurnVerifier.abi;
            const bytecode = BurnVerifier.bytecode;
            const contract = new web3.eth.Contract(abi);
            return new Promise((resolve, reject) => {
                contract.deploy({
                        data: bytecode
                    })
                    .send({
                        from: fromAddress,
                        gas: 470000000
                    })
                    .on("error", (err) => {
                        reject(err);
                    })
                    .on("receipt", (receipt) => {
                        console.log("Burn verifier mined (address = \"" + receipt.contractAddress + "\").");
                        resolve(receipt);
                    });
            });
        };

        this.deployCashToken = () => {
            const abi = CashToken.abi;
            const bytecode = CashToken.bytecode;
            const contract = new web3.eth.Contract(abi);
            return new Promise((resolve, reject) => {
                contract
                    .deploy({
                        data: bytecode
                    })
                    .send({
                        from: fromAddress,
                        gas: 470000000
                    })
                    .on("error", (err) => {
                        reject(err);
                    })
                    .on("receipt", (receipt) => {
                        console.log("ERC20 contact mined (address = \"" + receipt.contractAddress + "\").");
                        resolve(receipt);
                    });
            });
        };

        this.mintCashToken = (contractAddress, value) => {
            const abi = CashToken.abi;
            const ercContract = web3.eth.Contract(abi, contractAddress);
            return new Promise((resolve, reject) => {
                ercContract.methods.mint(fromAddress, value)
                    .send({
                        from: fromAddress,
                        gas: 470000000
                    })
                    .on("error", (err) => {
                        reject(err);
                    })
                    .on("receipt", (receipt) => {
                        ercContract.methods.balanceOf(fromAddress).call()
                            .then(balance => {
                                console.log("ERC20 funds minted (balance = " + balance + ").");
                                resolve(receipt);
                            });
                    });
            });
        };

        this.approveCashToken = (contractAddress, zscAddress, value) => {
            const abi = CashToken.abi;
            const ercContract = web3.eth.Contract(abi, contractAddress);
            return new Promise((resolve, reject) => {
                ercContract.methods.approve(zscAddress, value)
                    .send({
                        from: fromAddress,
                        gas: 470000000
                    })
                    .on("error", (err) => {
                        reject(err);
                    })
                    .on("receipt", (receipt) => {
                        ercContract.methods.allowance(fromAddress, zscAddress).call()
                            .then(allowance => {
                                console.log("ERC funds approved for transfer to ZSC (allowance = " + allowance + ").");
                                resolve(receipt);
                            });
                    });
            });
        };

        this.deployZSC = (cash, zether, burn, epochLength) => {
            const abi = ZSC.abi;
            const bytecode = ZSC.bytecode;
            const contract = new web3.eth.Contract(abi);
            return new Promise((resolve, reject) => {
                contract
                    .deploy({
                        data: bytecode,
                        arguments: [cash, zether, burn, epochLength]
                    })
                    .send({
                        from: fromAddress,
                        gas: 470000000
                    })
                    .on("error", (err) => {
                        reject(err);
                    })
                    .on("receipt", (receipt) => {
                        console.log("ZSC main contract deployed (address = \"" + receipt.contractAddress + "\").");
                        resolve(receipt);
                    });
            });
        };
    }
}

module.exports = Deployer;