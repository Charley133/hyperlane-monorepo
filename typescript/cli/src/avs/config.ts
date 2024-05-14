import { ChainMap } from '@hyperlane-xyz/sdk';
import { Address } from '@hyperlane-xyz/utils';

interface AVSContracts {
  avsDirectory: Address;
  proxyAdmin: Address;
  ecdsaStakeRegistry: Address;
  hyperlaneServiceManager: Address;
}

export const avsAddresses: ChainMap<AVSContracts> = {
  holesky: {
    avsDirectory: '0x055733000064333CaDDbC92763c58BF0192fFeBf',
    proxyAdmin: '0x6e7b29cb2a7617405b4d30c6f84bbd51b4bb4be8',
    ecdsaStakeRegistry: '0x275aCcCa81cAD931dC6fB6E49ED233Bc99Bed4A7',
    hyperlaneServiceManager: '0x16B710b86CAd07E6F1C531861a16F5feC29dba37',
  },
  ethereum: {
    // placeholder
    avsDirectory: '0x055733000064333CaDDbC92763c58BF0192fFeBf',
    proxyAdmin: '0x6e7b29cb2a7617405b4d30c6f84bbd51b4bb4be8',
    ecdsaStakeRegistry: '0x275aCcCa81cAD931dC6fB6E49ED233Bc99Bed4A7',
    hyperlaneServiceManager: '0x16B710b86CAd07E6F1C531861a16F5feC29dba37',
  },
};
