
const hre = require("hardhat");

async function main() {
  const collectionContract = await ethers.getContractFactory("Collection")
  const collection = await collectionContract.deploy()
  await collection.deployed()
  console.log("Contract deployed to address:", collection.address)
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error)
  process.exit(1)
})
