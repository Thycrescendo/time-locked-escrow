'use client';

import Link from 'next/link';
import { useEscrowContext } from '../context/EscrowContext';
import WalletConnect from './WalletConnect';

const NavBar: React.FC = () => {
  const { account } = useEscrowContext();

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          DeFi Escrows
        </Link>
        <div className="space-x-4">
          <Link href="/escrow/create" className="hover:underline">
            Create Escrow
          </Link>
          {account && (
            <Link href="/escrow/123" className="hover:underline">
              View Escrow (Demo)
            </Link>
          )}
          <WalletConnect />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;