import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '../components/NavBar';
import { EscrowProvider } from '../context/EscrowContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Time-Locked DeFi Escrows',
  description: 'Decentralized escrow system for P2P DeFi trades on Massa blockchain',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EscrowProvider>
          <NavBar />
          <main className="container mx-auto p-4">{children}</main>
        </EscrowProvider>
      </body>
    </html>
  );
}