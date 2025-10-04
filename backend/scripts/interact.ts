import { Client, ClientFactory, DefaultProviderUrls, IAccount } from '@massalabs/massa-web3';

async function interact() {
  const client = await ClientFactory.createDefaultClient(DefaultProviderUrls.TESTNET, true);
  const account = (await client.wallet().getAccount())[0];
  if (!account) {
    console.error('No account found.');
    return;
  }

  const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with deployed address
  const escrowId = 'escrow1';
  const buyer = account.address;
  const seller = 'ASellerAddress...'; // Replace with test seller address
  const asset = JSON.stringify({ type: 'NFT', id: '123' });
  const payment = 1000000; // 1 MASSA
  const expiry = Math.floor(Date.now() / 1000) + 7 * 24 * 3600; // 7 days

  // Create escrow
  await client.smartContracts().callSmartContract({
    targetAddress: contractAddress,
    functionName: 'createEscrow',
    parameter: [escrowId, buyer, seller, asset, payment.toString(), expiry.toString()],
    coins: payment,
  });

  console.log('Escrow created.');

  // Example: Initiate dispute
  await client.smartContracts().callSmartContract({
    targetAddress: contractAddress,
    functionName: 'initiateDispute',
    parameter: [escrowId, 'Item not as described'],
    coins: 0,
  });

  console.log('Dispute initiated.');
}

interact().catch(console.error);