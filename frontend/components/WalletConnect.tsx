'use client';

import { useEscrowContext } from '../context/EscrowContext';
import { connectWallet, initMassaClient } from '../lib/massa';

const WalletConnect: React.FC = () => {
  const { account, setAccount, setClient } = useEscrowContext();

  const handleConnect = async () => {
    try {
      const client = await initMassaClient();
      const accounts = await connectWallet();
      setAccount(accounts[0]?.address || null);
      setClient(client);
    } catch (error) {
      console.error('Wallet connection failed:', error);
    }
  };

  return (
    <div className="p-4">
      {account ? (
        <p className="text-green-600">Connected: {account.slice(0, 8)}...</p>
      ) : (
        <button
          onClick={handleConnect}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Connect Massa Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnect;