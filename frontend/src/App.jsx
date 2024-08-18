import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import dynamic from "next/dynamic"
import "@solana/wallet-adapter-react-ui/styles.css"

function MyApp({ Component, pageProps }) {
    // Dynamically import WalletConnectionProvider without server-side rendering
    const WalletConnectionProvider = dynamic(
        () => import('../context/WalletConnectionProvider'),
        { ssr: false }
    )

    return (
        <WalletConnectionProvider>
            <Component {...pageProps} />
        </WalletConnectionProvider>
    )
}

export default MyApp