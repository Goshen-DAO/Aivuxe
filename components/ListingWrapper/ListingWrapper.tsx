import { useContract, useNFT } from "@thirdweb-dev/react";
import { DirectListingV3, EnglishAuction } from "@thirdweb-dev/sdk";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Buy.module.css";
import NFT from "../NFT/NFT";
import Skeleton from "../Skeleton/Skeleton";
import { useRouter } from "next/router";

type Props = {
  listing: DirectListingV3 | EnglishAuction;
};

/**
 * Accepts a listing and renders the associated NFT for it
 */
const ListingWrapper=({ listing }: Props)=>{
  const router = useRouter();
  const contractAddress = router.query.contractAddress as string; // Updated
  const { contract: nftContract } = useContract(contractAddress);

  const { data: nft, isLoading } = useNFT(nftContract, listing.asset.id);

  if (isLoading) {
    return (
      <div className={styles.nftContainer}>
        <Skeleton width={"100%"} height="312px" />
      </div>
    );
  }

  if (!nft) return null;

  return (
    <Link
      href={`/collection/${contractAddress}/${nft.metadata.id}`}
      key={nft.metadata.id}
      className={styles.nftContainer}
    >
      <NFT nft={nft} />
    </Link>
  );
}

export default ListingWrapper