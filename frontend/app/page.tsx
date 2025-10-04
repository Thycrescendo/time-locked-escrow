import WalletConnect from '../components/WalletConnect';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">Time-Locked DeFi Escrows</h1>
      <WalletConnect />
      <div className="space-x-4 mt-4">
        <Link href="/escrow/create" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Create Escrow
        </Link>
        <Link href="/escrow/123" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
          View Escrow (Demo)
        </Link>
      </div>
    </div>
  );
}