import useWeb3 from "@/composables/useWeb3";

export const resolveAddress = async (
  address: string
): Promise<string | null> => {
  const { walletProvider } = useWeb3();

  return await walletProvider.value.lookupAddress(address);
};

export const resolveEnsName = async (name: string) => {
  const { walletProvider } = useWeb3();

  return await walletProvider.value.resolveName(name);
};
