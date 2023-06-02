const { ethers, upgrades } = require("hardhat");
const fs = require("fs");
const path = require("path");

async function upgrade() {
  const [deployer] = await ethers.getSigners();
  console.log("Upgrading Voting with account:", deployer.address);

  const Voting = await ethers.getContractFactory("Voting");
  const voting = await upgrades.upgradeProxy(
    "0xf71BFb6cCF5465eEf803fCe9466bca060884d1F8",
    Voting
  );
  console.log("Voting upgraded at:", voting.address);

  fs.writeFileSync(
    path.join(__dirname, "../contractAddress.json"),
    JSON.stringify({ contractAddress: voting.address }, null, 2)
  );
}

upgrade()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

export {};
