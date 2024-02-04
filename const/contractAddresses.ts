
import { useRouter } from 'next/router';

export const MARKETPLACE_ADDRESS = "0x9B70BBAd562b905CBAa2ad6173c9E276f5D2b6C5";

  export const getNFTCollectionAddress = (): string => {
    const router = useRouter();
    const nftCollectionAddress = router.query.nftCollectionAddress as string || "0x986C063A5184d6a41267b0531A9981DD5A631202";
    return nftCollectionAddress;
  };

export const ETHERSCAN_URL = "https://explorer.zetachain.com/";

export const NETWORK = {
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
}

export const clientAPI = process.env.THIRDWEB_API_KEY as string;