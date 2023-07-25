/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "mumbai",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
};

// https://alien-green-needle.matic-testnet.discover.quiknode.pro/8646a199c315d85ac37f6b5eb3f25aad8e46c696/
