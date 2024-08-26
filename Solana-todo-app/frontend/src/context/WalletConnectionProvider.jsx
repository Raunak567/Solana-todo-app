import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Define the network for your Solana cluster
const network = WalletAdapterNetwork.Devnet; // or 'mainnet-beta' or 'testnet'

const WalletConnectionProvider = ({ children }) => {
  // Create an array of wallet adapters using useMemo inside the component
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  // Define the endpoint using useMemo inside the component
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletConnectionProvider;
