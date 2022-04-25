/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");

require("dotenv").config();

const MAINNET_RPC_URL =
    process.env.MAINNET_RPC_URL || process.env.ALCHEMY_MAINNET_RPC_URL || "";
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "";
const KOVAN_RPC_URL = process.env.KOVAN_RPC_URL || "";
const MNEMONIC = process.env.MNEMONIC || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
// optional
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

module.exports = {
    defaultNetwork: "rinkebey",
    networks: {
        hardhat: {
            // // If you want to do some forking, uncomment this
            // forking: {
            //   url: MAINNET_RPC_URL
            // }
        },
        localhost: {},
        kovan: {
            url: KOVAN_RPC_URL,
            accounts: [PRIVATE_KEY],
            accounts: {
                mnemonic: MNEMONIC,
            },
            saveDeployments: true,
        },
        rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
            accounts: {
                mnemonic: MNEMONIC,
            },
            saveDeployments: true,
        },
    //     rinkeby: {
    //         url: "https://eth-rinkeby.alchemyapi.io/v2/123abc123abc123abc123abc123abcde",
    //         accounts: [PRIVATE_KEY]
    //     }
    // },
        
        ganache: {
            url: "http://localhost:8545",
            accounts: [PRIVATE_KEY],
            accounts: {
                mnemonic: MNEMONIC,
            }
        },
        mainnet: {
            url: MAINNET_RPC_URL,
            accounts: [PRIVATE_KEY],
            accounts: {
                mnemonic: MNEMONIC,
            },
            saveDeployments: true,
        },
        polygon: {
            url: "https://rpc-mainnet.maticvigil.com/",
            accounts: [PRIVATE_KEY],
            accounts: {
                mnemonic: MNEMONIC,
            },
            saveDeployments: true,
        },
    
    etherscan: {
        // Your API key for Etherscan
        // Obtain one at https://etherscan.io/
    //     apiKey: ETHERSCAN_API_KEY,
    },
    // namedAccounts: {
    //     deployer: {
    //         default: 0, // here this will by default take the first account as deployer
    //         1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    //     },
    //     feeCollector: {
    //         default: 1,
    //     },
    // },
    solidity: {
        compilers: [
            {
                version: "0.8.4",
            },
            {
                version: "0.7.0",
            },
            {
                version: "0.6.6",
            },
            {
                version: "0.4.24",
            },
        ],
    },
    mocha: {
        timeout: 100000,
    },
},
};
