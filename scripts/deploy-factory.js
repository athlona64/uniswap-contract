const UniswapV2FactoryBytecode = require("@uniswap/v2-core/build/UniswapV2Factory.json").bytecode;
const UniswapV2FactoryAbi = require("@uniswap/v2-core/build/UniswapV2Factory.json").abi;
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
//   const Greeter = await hre.ethers.getContractFactory(UniswapV2FactoryBytecode);
  const Greeter = await hre.ethers.getContractFactory(UniswapV2FactoryAbi, UniswapV2FactoryBytecode);
  const greeter = await Greeter.deploy("0x1555f4749Cff9a560DbC54EA6822021484bC7eBc");

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
