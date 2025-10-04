import { Client, ClientFactory, DefaultProviderUrls } from '@massalabs/massa-web3';
import { readFileSync } from 'fs';
import { join } from 'path';

async function deploy() {
  const client = await ClientFactory.createDefaultClient(DefaultProviderUrls.TESTNET, true);
  const account = (await client.wallet().getAccount())[0];
  if (!account) {
    console.error('No account found. Please set up a Massa wallet.');
    return;
  }

  // Read compiled WASM file
  const wasmPath = join(__dirname, '../build/TimeLockedEscrow.wasm');
  const bytecode = readFileSync(wasmPath);

  // Deploy contract
  const operationId = await client.smartContracts().deploySmartContract({
    bytecode,
    coins: 1000000, // Initial coins for contract
    deployer: account,
  });

  console.log(`Contract deployed. Operation ID: ${operationId}`);
}

deploy().catch(console.error);