import {
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import React, { useState } from "react";
import Container from "../../components/Container/Container";
import NFTGrid from "../../components/NFT/NFTGrid";
import tokenPageStyles from "../../styles/Token.module.css";
import { NFT as NFTType } from "@thirdweb-dev/sdk";
import SaleInfo from "../../components/SaleInfo/SaleInfo";
import { useRouter } from "next/router";

export default function SellModal() {
  const router = useRouter();
  const contractAddress = router.query.contractAddress as string; // Updated
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(contractAddress);
  const address = useAddress();
  const { data, isLoading } = useOwnedNFTs(contract, address);

  const [selectedNft, setSelectedNft] = useState<NFTType>();

  return (
    <Container maxWidth="xl">
      {!selectedNft ? (
          <NFTGrid
            data={data}
            isLoading={isLoading}
            contractAddress={contractAddress} // Pass the contract address as a prop    
            overrideOnclickBehavior={(nft) => {
              setSelectedNft(nft);
            }}
            emptyText={
              "Looks like you don't own any NFTs in this collection. Head to the buy page to buy some!"
            }
          />
      ) : (
        <div className={tokenPageStyles.container} style={{ marginTop: 0 }}>
          <div className={tokenPageStyles.metadataContainer}>
            <div className={tokenPageStyles.imageContainer}>
              <ThirdwebNftMedia
                metadata={selectedNft.metadata}
                className={tokenPageStyles.image}
              />
              
            </div>
          </div>
          
          <div className={tokenPageStyles.listingContainer}>
          <button
                onClick={() => {
                  setSelectedNft(undefined);
                }}
                className={tokenPageStyles.crossButton}
              >
                X
              </button>
            <center><i>You&rsquo;re about to list the following item for sale.</i></center>

            <br/>
            <h1 className={tokenPageStyles.title}>
              {selectedNft.metadata.name}
            </h1>
            <p className={tokenPageStyles.collectionName}>
              Token ID #{selectedNft.metadata.id}
            </p>

            <div className={tokenPageStyles.pricingContainer}>
              <SaleInfo nft={selectedNft} />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
