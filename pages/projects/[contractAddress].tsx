// ProjectPage.tsx
import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../../components/Container/Container";
import NFTGrid from "../../components/NFT/NFTGrid";
import { useRouter } from "next/router";

export default function ProjectPage() {
  const router = useRouter();
  const contractAddress = router.query.contractAddress as string; // Updated

  const { contract } = useContract(contractAddress);
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
        contractAddress={contractAddress} // Pass the contract address as a prop
      />
    </Container>
  );
}
