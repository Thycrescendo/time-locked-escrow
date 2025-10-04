'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Escrow } from '../lib/types';
import { Client } from '@massalabs/massa-web3';

interface EscrowContextType {
  account: string | null;
  setAccount: (account: string | null) => void;
  escrows: Escrow[];
  setEscrows: (escrows: Escrow[]) => void;
  client: Client | null;
  setClient: (client: Client | null) => void;
}

const EscrowContext = createContext<EscrowContextType | undefined>(undefined);

export const EscrowProvider = ({ children }: { children: ReactNode }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [escrows, setEscrows] = useState<Escrow[]>([]);
  const [client, setClient] = useState<Client | null>(null);

  return (
    <EscrowContext.Provider value={{ account, setAccount, escrows, setEscrows, client, setClient }}>
      {children}
    </EscrowContext.Provider>
  );
};

export const useEscrowContext = () => {
  const context = useContext(EscrowContext);
  if (!context) {
    throw new Error('useEscrowContext must be used within an EscrowProvider');
  }
  return context;
};