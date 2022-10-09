import {computed} from "vue";
import type {JsonRpcProvider} from "ethers";

const userAddress = ref<string>()
const walletProvider = ref<JsonRpcProvider>()

export default function useWeb3() {

    const setUserAddress = (newUserAddress: string): void => {
        userAddress.value = newUserAddress
    }

    const setWalletProvider = (newWalletProvider: JsonRpcProvider): void => {
        walletProvider.value = newWalletProvider
    }

    const isLoggedIn = computed(() => !!userAddress.value)

    return {
        userAddress: computed(() => userAddress.value),
        setUserAddress,
        walletProvider: computed(() => walletProvider.value),
        setWalletProvider,
        isLoggedIn,
    }
}
