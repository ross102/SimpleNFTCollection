require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.11",
  networks: {
    goerli: {
      url: process.env.INFURA_GOERL_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
