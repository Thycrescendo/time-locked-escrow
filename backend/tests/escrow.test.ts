import { Client, ClientFactory, DefaultProviderUrls } from '@massalabs/massa-web3';
import { readFileSync } from 'fs';
import { join } from 'path';
import { Escrow } from '../contracts/types';

describe('TimeLockedEscrow', () => {
  let client: Client;
  let contractAddress: string;

  beforeAll(async () => {
    client = await ClientFactory.createDefaultClient(DefaultProviderUrls.TESTNET, true);
    const account = (await client.wallet().getAccount())[0];
    if (!account) throw new Error('No account found');

    // Deploy contract
    const wasmPath = join(__dirname, '../build/TimeLockedEscrow.wasm');
    const bytecode = readFileSync(wasmPath);
    const operationId = await client.smartContracts().deploySmartContract({
      bytecode,
      coins: 1000000,
      deployer: account,
    });
    const op = await client.smartContracts().awaitOperation(operationId);
    contractAddress = op.contractAddress!;
  });

  test('Create and auto-release escrow', async () => {
    const escrowId = 'test1';
    const buyer = (await client.wallet().getAccount())[0].address;
    const seller = 'ASellerAddress...'; // Replace with test address
    const asset = JSON.stringify({ type: 'NFT', id: '123' });
    const payment = 1000000;
    const expiry = Math.floor(Date.now() / 1000) + 3600; // 1 hour for testing

    // Create escrow
    await client.smartContracts().callSmartContract({
      targetAddress: contractAddress,
      functionName: 'createEscrow',
      parameter: [escrowId, buyer, seller, asset, payment.toString(), expiry.toString()],
      coins: payment,
    });

    // Fetch escrow
    const escrowStr = await client.smartContracts().readSmartContract({
      targetAddress: contractAddress,
      functionName: 'getEscrow',
      parameter: [escrowId],
    });
    const escrow: Escrow = JSON.parse(escrowStr);
    expect(escrow.status).toBe('Pending');
    expect(escrow.payment).toBe(payment);

    // Simulate auto-release (in real scenario, wait for timer)
    await client.smartContracts().callSmartContract({
      targetAddress: contractAddress,
      functionName: 'autoRelease',
      parameter: [escrowId],
      coins: 0,
    });

    const updatedEscrowStr = await client.smartContracts().readSmartContract({
      targetAddress: contractAddress,
      functionName: 'getEscrow',
      parameter: [escrowId],
    });
    const updatedEscrow: Escrow = JSON.parse(updatedEscrowStr);
    expect(updatedEscrow.status).toBe('Released');
  });

  test('Initiate dispute', async () => {
    const escrowId = 'test2';
    const buyer = (await client.wallet().getAccount())[0].address;
    const seller = 'ASellerAddress...';
    const asset = JSON.stringify({ type: 'NFT', id: '124' });
    const payment = 1000000;
    const expiry = Math.floor(Date.now() / 1000) + 3600;

    await client.smartContracts().callSmartContract({
      targetAddress: contractAddress,
      functionName: 'createEscrow',
      parameter: [escrowId, buyer, seller, asset, payment.toString(), expiry.toString()],
      coins: payment,
    });

    await client.smartContracts().callSmartContract({
      targetAddress: contractAddress,
      functionName: 'initiateDispute',
      parameter: [escrowId, 'Test dispute'],
      coins: 0,
    });

    const escrowStr = await client.smartContracts().readSmartContract({
      targetAddress: contractAddress,
      functionName: 'getEscrow',
      parameter: [escrowId],
    });
    const escrow: Escrow = JSON.parse(escrowStr);
    expect(escrow.status).toBe('Disputed');
    expect(escrow.disputeLog).toContain(`${buyer}: Test dispute`);
  });
});