const { ethers, upgrades } = require("hardhat");
const { contractAddress } = require("../contractAddress.json");

async function upgrade() {
  const [deployer] = await ethers.getSigners();
  console.log("Upgrading Voting with account:", deployer.address);

  const Voting = await ethers.getContractFactory("Voting");
  const voting = await upgrades.upgradeProxy(contractAddress, Voting);
  console.log("Voting upgraded at:", voting.address);
}

upgrade()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

export {};
