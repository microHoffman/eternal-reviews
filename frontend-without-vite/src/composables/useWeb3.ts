import { computed, markRaw, ref } from "vue";
import type { Web3Provider } from "@ethersproject/providers";

const userAddress = ref<string>();
const walletProvider = ref<Web3Provider>();

export default function useWeb3() {
  const setUserAddress = (newUserAddress: string): void => {
    userAddress.value = newUserAddress;
  };

  const setWalletProvider = (newWalletProvider: Web3Provider): void => {
    walletProvider.value = markRaw(newWalletProvider);
  };

  const isLoggedIn = computed(() => !!userAddress.value);

  return {
    userAddress: computed(() => userAddress.value),
    setUserAddress,
    walletProvider: computed(() => walletProvider.value),
    setWalletProvider,
    isLoggedIn,
  };
}
