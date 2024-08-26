import React from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { Button } from '@solana/wallet-adapter-react-ui';

const WalletConnectButton = () => {
  const { publicKey, connected, disconnect, connect } = useWallet();
  const { connection } = useConnection();

  const handleConnect = async () => {
    try {
      await connect();
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error("Failed to disconnect wallet:", error);
    }
  };

  return (
    <div>
      {!connected ? (
        <Button onClick={handleConnect}>Connect Wallet</Button>
      ) : (
        <div>
          <p>Connected to: {publicKey?.toBase58()}</p>
          <Button onClick={handleDisconnect}>Disconnect Wallet</Button>
        </div>
      )}
    </div>
  );
};

export default WalletConnectButton;
