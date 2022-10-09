from web3 import Web3
from ens import ENS


class EnsName:
    # Loads the ENS name connected to the address

    def __init__(self):
        self.w3_alchemy = Web3(Web3.HTTPProvider('https://eth-mainnet.g.alchemy.com/v2/wtcChC2v7nrn_4rORtzAGoW9OL4mjJuh'))

        # Addresses for testing purposes:
        # ENS: 0xf6d4067bbc68b0d1675fb3f87bac928a20e86ad9
        # No ENS: 0xf6d4067bbc68b0d1675fb3f87bac928a20e86ad8
        self.address = 0xf6d4067bbc68b0d1675fb3f87bac928a20e86ad8
        self.ns = ENS.fromWeb3(self.w3_alchemy)

    # Get the ENS name from Resolved Address
    def ens_name(self):
        name = self.ns.name(self.address)

        if not name:
            print("You don't have any ENS domain, you can not review this service.")
        else:
            print(name)
            return name

name = EnsName()
name.ens_name()
