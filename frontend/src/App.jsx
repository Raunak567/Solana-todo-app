<<<<<<< HEAD
import Carousel from "./components/Carousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <main className="max-w-[414px] mx-auto h-screen">
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
=======
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
>>>>>>> 199ae2fa229ef908bc3b5871e62a1f922e000bd9
}

export default MyApp