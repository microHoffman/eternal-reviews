import WalletConnectProvider from "@walletconnect/web3-provider";
import { computed } from "vue";
import Web3Modal from "web3modal";
import useWeb3 from "./useWeb3";
import type { IProviderOptions } from "web3modal";
import { ethers } from "ethers";
import to from "../utils/await-to-js";

const providerOptions: IProviderOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        1: "https://eth-mainnet.g.alchemy.com/v2/wtcChC2v7nrn_4rORtzAGoW9OL4mjJuh",
      },
    },
  },
};

const web3Modal = computed(
  () =>
    new Web3Modal({
      network: "mainnet",
      providerOptions,
    })
);

export const connect = async () => {
  const { setWalletProvider, setUserAddress } = useWeb3();

  web3Modal.value.clearCachedProvider();

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
