import React from 'react';
import type { AppProps } from 'next/app';
import {  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
  trustWallet,
  rainbowWallet,
  safeWallet, } from "@thirdweb-dev/react";
import "../styles/styles.css";
import { NETWORK, clientAPI } from '../const/contractAddresses'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { selectTheme } from '../theme/chakra-theme-select';
import Head from 'next/head';
import  Navbar  from "../components/Navbar/Navbar";


const theme = extendTheme({
  styles: {
    global: () => ({
      'html, body': {
        fontFamily: `'Raleway', sans-serif`,
        color: 'white',
        bg: "linear-gradient(to left, #0e1c26, #2a454b, #294861)",
      },
      a: {
        color: 'teal.100',
      },
    }),
    components: {
      Select: selectTheme,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <>
    <Head>
        {/* HTML Meta Tags */}
        <title>Aivuxe | Permissionless & Open Source NFT Marketplace</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aivuxe | A Berachain NFT Marketplace" />
        <meta property="og:url" content="https://aivuxe.goshendao.com" />
        <meta property="og:image" content="https://raw.githubusercontent.com/Goshen-DAO/Aivuxe/dev/public/meta_image.png" />
        <meta property="og:description" content="Aivuxe is a groundbreaking project, an open-source and permissionless NFT marketplace that stands out by seamlessly supporting EVM chains. Offering a liberating space for creators and collectors alike, Aivuxe empowers individuals to engage with NFTs on their terms. Dive into the world of limitless possibilities and creative freedom with Aivuxe." />
        
      </Head>
    <ThirdwebProvider
      activeChain={NETWORK}
      clientId={clientAPI}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        safeWallet({
          personalWallets: [
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
            localWallet(),
            embeddedWallet({
              recommended: true,
              auth: {
                options: [
                  "email",
                  "google",
                  "apple",
                  "facebook",
                ],
              },
            }),
            trustWallet(),
            rainbowWallet(),
          ],
        }),
        localWallet(),
        embeddedWallet({
          recommended: true,
          auth: {
            options: [
              "email",
              "google",
              "apple",
              "facebook",
            ],
          },
        }),
        trustWallet(),
        rainbowWallet(),
      ]}
    >
      <ChakraProvider theme={theme}>
      <Navbar/>
      <AnyComponent {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
    </>
  );
}

export default MyApp;
