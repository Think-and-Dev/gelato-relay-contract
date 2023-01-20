import { deployments, getNamedAccounts } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  console.log('!!Starting Deploy!!!')

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  console.log('deployer', deployer)

  const relayAddress = "0xBf175FCC7086b4f9bd59d5EAE8eA67b8f940DE0d";

  await deploy("CounterERC2771", {
    from: deployer,
    args: [relayAddress],
    log: true,
  });
};

func.tags = ["CounterERC2771"];

export default func;
