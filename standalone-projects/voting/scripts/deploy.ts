const { ethers, upgrades } = require("hardhat");
const fs = require("fs");
const path = require("path");

const deploy = async () => {
  const Voting = await ethers.getContractFactory("Voting");
  console.log("Deploying Voting...");
  const voting = await upgrades.deployProxy(Voting, []);
  console.log("Voting deployed to:", voting.address);

  fs.writeFileSync(
    path.join(__dirname, "../contractAddress.json"),
    JSON.stringify({ contractAddress: voting.address }, null, 2)
  );
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

export {};
