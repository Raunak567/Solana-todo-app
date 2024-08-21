import { useState } from "react";
// import dynamic from "next/dynamic";
// import "@solana/wallet-adapter-react-ui/styles.css";
import Carousel from "./components/Carousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function MyApp({ Component, pageProps }) {
  // const WalletConnectionProvider = dynamic(
  //   () => import("../context/WalletConnectionProvider"),
  //   { ssr: false }
  // );

  return (
    <Router>
      {/* <WalletConnectionProvider> */}
      {/* <Component {...pageProps} /> */}
      {/* </WalletConnectionProvider> */}
      <main className="max-w-[414px] mx-auto h-screen">
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default MyApp;
