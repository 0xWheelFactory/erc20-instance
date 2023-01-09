import { Contract, Signer } from "ethers";
import { ERC20Contract } from "./index";
import { Provider } from "@ethersproject/providers";
import ERC20ABI from "./common-erc20.json";

export const createERC20Instance = (address: string, signerOrProvider: Signer | Provider ): ERC20Contract => {
  return new Contract(address, ERC20ABI, signerOrProvider) as ERC20Contract;
}
