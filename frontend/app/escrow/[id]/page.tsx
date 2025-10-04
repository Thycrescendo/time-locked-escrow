'use client';

import { useEffect, useState } from 'react';
import { useEscrowContext } from '../../../context/EscrowContext';
import { fetchEscrow, Escrow } from '../../../lib/massa';
import Timeline from '../../../components/Timeline';
import DisputeChat from '../../../components/DisputeChat';

export default function EscrowDetails({ params }: { params: { id: string } }) {
  const { client } = useEscrowContext();
  const [escrow, setEscrow] = useState<Escrow | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!client) return;
      try {
        setLoading(true);
        const escrowData = await fetchEscrow(client, params.id);
        setEscrow(escrowData);
      } catch (error) {
        console.error('Failed to fetch escrow:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [client, params.id]);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6">Escrow #{params.id}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : escrow ? (
        <>
          <div className="mb-6 p-4 bg-gray-100 rounded shadow-md">
            <p><strong>Status:</strong> {escrow.status}</p>
            <p><strong>Buyer:</strong> {escrow.buyer.slice(0, 8)}...</p>
            <p><strong>Seller:</strong> {escrow.seller.slice(0, 8)}...</p>
            <p><strong>Asset:</strong> {escrow.asset}</p>
            <p><strong>Payment:</strong> {escrow.payment} MASSA</p>
            <p><strong>Expiry:</strong> {new Date(escrow.expiry * 1000).toLocaleString()}</p>
            <p><strong>Penalty Rate:</strong> {escrow.penaltyRate / 100}% (Dynamic)</p>
          </div>
          <Timeline escrowId={params.id} />
          <DisputeChat escrowId={params.id} />
        </>
      ) : (
        <p>Escrow not found.</p>
      )}
    </div>
  );
}