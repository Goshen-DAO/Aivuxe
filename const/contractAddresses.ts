
import { useRouter } from 'next/router';

export const MARKETPLACE_ADDRESS = "0x036A2736d665209A0221E8F1e6E97000C513f4F3";

  export const getNFTCollectionAddress = (): string => {
    const router = useRouter();
    const nftCollectionAddress = router.query.nftCollectionAddress as string || "0x986C063A5184d6a41267b0531A9981DD5A631202";
    return nftCollectionAddress;
  };

export const ETHERSCAN_URL = "https://artio.beratrail.io/";

export const NETWORK = {
// === Required information for connecting to the network === \\
chainId: 80085, // Chain ID of the network
// Array of RPC URLs to use
rpc: 
[
  "https://rpc.ankr.com/berachain_testnet",
  "https://rpc.ankr.com/berachain_testnet"
],

// === Information for adding the network to your wallet (how it will appear for first time users) === \\
// Information about the chain's native currency (i.e. the currency that is used to pay for gas)
nativeCurrency: {
  decimals: 18,
  name: "Berachain Artio",
  symbol: "BERA",
},
shortName: "berachain", // Display value shown in the wallet UI
slug: "berachain", // Display value shown in the wallet UI
testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
chain: "Berachain Artio", // Name of the network
name: "Berachain Artio", // Name of the network
}

export const clientAPI = process.env.THIRDWEB_API_KEY as string;