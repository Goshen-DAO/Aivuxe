import type { AppProps } from "next/app";
import {  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
  trustWallet,
  rainbowWallet,
  safeWallet, } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";

const clientAPI = process.env.THIRDWEB_API_KEY as string;

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
      {/* Progress bar when navigating between pages */}
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      {/* Render the navigation menu above each component */}
      <Navbar />
      {/* Render the actual component (page) */}
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;