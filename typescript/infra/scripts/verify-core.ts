import { existsSync, readFileSync } from 'fs';
import path from 'path';

import { CompleteChainMap, ContractVerifier } from '@abacus-network/sdk';
import { CompilerOptions } from '@abacus-network/sdk/dist/deploy/verify/types';

import { fetchGCPSecret } from '../src/utils/gcloud';
import { readJSON } from '../src/utils/utils';

import {
  getCoreEnvironmentConfig,
  getCoreVerificationDirectory,
  getEnvironment,
} from './utils';

async function main(): Promise<void> {
  const environment = await getEnvironment();
  const config = getCoreEnvironmentConfig(environment) as any;
  const multiProvider = await config.getMultiProvider();

  const verification = readJSON(
    getCoreVerificationDirectory(environment),
    'verification.json',
  );

  const sourcePath = path.join(
    getCoreVerificationDirectory(environment),
    'flattened.sol',
  );
  if (!existsSync(sourcePath)) {
    throw new Error(
      `Could not find flattened source at ${sourcePath}, run 'yarn hardhat flatten' in 'solidity/core'`,
    );
  }
  const flattenedSource = readFileSync(sourcePath, { encoding: 'utf8' });

  // from solidity/core/hardhat.config.ts
  const compilerOptions: CompilerOptions = {
    codeformat: 'solidity-single-file',
    compilerversion: 'v0.8.13+commit.abaa5c0e',
    optimizationUsed: '1',
    runs: '999999',
  };

  const apiKeys: CompleteChainMap<string> = await fetchGCPSecret(
    'explorer-api-keys',
    true,
  );

  const verifier = new ContractVerifier(
    verification,
    multiProvider,
    apiKeys,
    flattenedSource,
    compilerOptions,
  );

  await verifier.verify();
}

main().then(console.log).catch(console.error);
