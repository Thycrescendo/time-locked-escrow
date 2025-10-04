'use client';

import { useState } from 'react';
import { useEscrowContext } from '../context/EscrowContext';
import { createEscrow } from '../lib/massa';

interface FormData {
  template: string;
  buyer: string;
  seller: string;
  asset: string;
  payment: number;
  expiryDays: number;
}

const EscrowForm: React.FC = () => {
  const { client, account } = useEscrowContext();
  const [formData, setFormData] = useState<FormData>({
    template: 'NFT-for-Token',
    buyer: account || '',
    seller: '',
    asset: '',
    payment: 0,
    expiryDays: 7,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!client || !account) {
      alert('Please connect your wallet');
      return;
    }
    try {
      const expiry = Math.floor(Date.now() / 1000) + formData.expiryDays * 24 * 3600;
      await createEscrow(client, formData.buyer, formData.seller, formData.asset, formData.payment, expiry);
      alert('Escrow created successfully!');
    } catch (error) {
      console.error('Escrow creation failed:', error);
      alert('Failed to create escrow');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Escrow</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">Template</label>
        <select
          value={formData.template}
          onChange={(e) => setFormData({ ...formData, template: e.target.value })}
          className="w-full p-2 border rounded"
        >
          <option value="NFT-for-Token">NFT-for-Token</option>
          <option value="Token-for-Token">Token-for-Token</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Buyer Address</label>
        <input
          type="text"
          value={formData.buyer}
          onChange={(e) => setFormData({ ...formData, buyer: e.target.value })}
          className="w-full p-2 border rounded"
          placeholder="Buyer address"
          disabled={!!account}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Seller Address</label>
        <input
          type="text"
          value={formData.seller}
          onChange={(e) => setFormData({ ...formData, seller: e.target.value })}
          className="w-full p-2 border rounded"
          placeholder="Seller address"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Asset (e.g., NFT ID or Token)</label>
        <input
          type="text"
          value={formData.asset}
          onChange={(e) => setFormData({ ...formData, asset: e.target.value })}
          className="w-full p-2 border rounded"
          placeholder="Asset details"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Payment Amount (MASSA)</label>
        <input
          type="number"
          value={formData.payment}
          onChange={(e) => setFormData({ ...formData, payment: parseFloat(e.target.value) })}
          className="w-full p-2 border rounded"
          placeholder="Payment in MASSA"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Expiry (days)</label>
        <input
          type="number"
          value={formData.expiryDays}
          onChange={(e) => setFormData({ ...formData, expiryDays: parseInt(e.target.value) })}
          className="w-full p-2 border rounded"
          placeholder="Expiry in days"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        disabled={!client || !account}
      >
        Create Escrow
      </button>
    </form>
  );
};

export default EscrowForm;