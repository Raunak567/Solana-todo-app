import {ConnectionProvider, WalletProvider} from '@solana/wallet-adapter-react';
import {
    WalletModalProvider
} from '@solana/wallet-adapter-react-ui';
import {clusterApiUrl} from '@solana/web3.js';
import { useMemo } from 'react'
import { PhantomWalletAdapter} from '@solana/wallet-adapter-wallets'

const WalletConnectionProvider = ({children}) => {
    const endpoint = useMemo(()=> clusterApiUrl('testnet'), [])

    const Wallets = useMemo(()=> [new PhantomWalletAdapter()], [])

    return(
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider Wallets={Wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

export default WalletConnectionProvider