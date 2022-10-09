import { computed } from "vue";
import Web3Modal from "web3modal";
import useWeb3 from "./useWeb3";
import type { IProviderOptions } from "web3modal";
import { ethers } from "ethers";
import to from "../utils/await-to-js";

const providerOptions: IProviderOptions = {};

const web3Modal = computed(
  () =>
    new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
      providerOptions,
    })
);

export const connect = async () => {
  const { setWalletProvider, setUserAddress } = useWeb3();

  const [loginError, provider] = await to(web3Modal.value.connect());
  if (loginError) {
    return;
  }

  const web3Provider = new ethers.providers.Web3Provider(provider);
  await setWalletProvider(web3Provider);

  // await setConnectedChain()

  const signer = await web3Provider.getSigner();
  // setSigner(signer)

  const userAddress = await signer.getAddress();
  setUserAddress(userAddress);
};
