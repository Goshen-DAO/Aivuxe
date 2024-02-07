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
import "../styles/globals.css";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Head from 'next/head';


const clientAPI = process.env.THIRDWEB_API_KEY as string;
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
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <>
    <Head>
        {/* HTML Meta Tags */}
        <title>Aivuxe | Permissionless & Open Source NFT Marketplace</title>
        <meta
          name="description"
          content="Aivuxe is a groundbreaking project, an open-source and permissionless NFT marketplace that stands out by seamlessly supporting EVM chains. Offering a liberating space for creators and collectors alike, Aivuxe empowers individuals to engage with NFTs on their terms. Dive into the world of limitless possibilities and creative freedom with Aivuxe."
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://aivuxe.goshendao.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aivuxe | Permissionless & Open Source NFT Marketplace" />
        <meta
          property="og:description"
          content="Aivuxe is a groundbreaking project, an open-source and permissionless NFT marketplace that stands out by seamlessly supporting EVM chains. Offering a liberating space for creators and collectors alike, Aivuxe empowers individuals to engage with NFTs on their terms. Dive into the world of limitless possibilities and creative freedom with Aivuxe."
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/documents/afa32639-e47d-4db9-8c85-f41605d87fee.png?token=62NNzmR4OB0BsmJj5HBxZaGjxShdl8_CEH2TvjvSl6g&height=682&width=1200&expires=33243301356"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="aivuxe.goshendao.com" />
        <meta property="twitter:url" content="https://aivuxe.goshendao.com/" />
        <meta
          name="twitter:title"
          content="Aivuxe | Permissionless & Open Source NFT Marketplace"
        />
        <meta
          name="twitter:description"
          content="Aivuxe is a groundbreaking project, an open-source and permissionless NFT marketplace that stands out by seamlessly supporting EVM chains. Offering a liberating space for creators and collectors alike, Aivuxe empowers individuals to engage with NFTs on their terms. Dive into the world of limitless possibilities and creative freedom with Aivuxe."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/documents/afa32639-e47d-4db9-8c85-f41605d87fee.png?token=62NNzmR4OB0BsmJj5HBxZaGjxShdl8_CEH2TvjvSl6g&height=682&width=1200&expires=33243301356"
        />
      </Head>
    <ThirdwebProvider
      activeChain={{
        // === Required information for connecting to the network === \\
        chainId: 7000, // Chain ID of the network
        // Array of RPC URLs to use
        rpc: ["https://zetachain-evm.blockpi.network/v1/rpc/public"],

        // === Information for adding the network to your wallet (how it will appear for first time users) === \\
        // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
        nativeCurrency: {
          decimals: 18,
          name: "ZetaChain",
          symbol: "ZETA",
        },
        shortName: "zetachain", // Display value shown in the wallet UI
        slug: "zetachain", // Display value shown in the wallet UI
        testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
        chain: "ZetaChain", // Name of the network
        name: "ZetaChain", // Name of the network
      }}
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
      <AnyComponent {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
    </>
  );
}

export default MyApp;
