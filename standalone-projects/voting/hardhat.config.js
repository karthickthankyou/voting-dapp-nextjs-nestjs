/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "mumbai",
  networks: {
    mumbai: {
      url: `https://alien-green-needle.matic-testnet.discover.quiknode.pro/${process.env.QUICKNODE_KEY}/`,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
};
