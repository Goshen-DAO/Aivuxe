import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { useRouter } from "next/router";
import { getNFTCollectionAddress } from "../const/contractAddresses"; // Import the updated function

export default function ProjectPage() {
  const router = useRouter();
  const { contractAddress } = router.query;
  const nftCollectionAddress = getNFTCollectionAddress(); // Use the dynamic NFT collection address

  // Use the dynamic contract address in the useContract hook
  const { contract } = useContract(contractAddress as string);
  const { data, isLoading } = useNFTs(contract);

  return (
    <Container maxWidth="lg">
      <h1>Buy NFTs</h1>
      <p>Browse which NFTs are available from the collection.</p>
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={
          "Looks like there are no NFTs in this collection. Did you import your contract on the thirdweb dashboard? https://thirdweb.com/dashboard"
        }
        contractAddress={nftCollectionAddress} // Pass the contract address as a prop
      />
    </Container>
  );
}
