import type { NFT as NFTType } from "@thirdweb-dev/sdk";
import Link from "next/link";
import React, { useState } from "react";
import Skeleton from "../Skeleton/Skeleton";
import NFT from "./NFT";
import styles from "../../styles/Buy.module.css";
import { Button } from '@chakra-ui/react';

type Props = {
  isLoading: boolean;
  data: NFTType[] | undefined;
  overrideOnclickBehavior?: (nft: NFTType) => void;
  emptyText?: string;
  contractAddress: string; // Pass the contract address as a prop
};

const NFTGrid = ({
  isLoading,
  data,
  overrideOnclickBehavior,
  emptyText = "No NFTs found for this collection.",
  contractAddress,
}: Props)=>{
  return (
    <div className={styles.nftGridContainer}>
      {isLoading ? (
        [...Array(20)].map((_, index) => (
          <div key={index} className={styles.nftContainer}>
            <Skeleton key={index} width={"100%"} height="312px" />
          </div>
        ))
      ) : data && data.length > 0 ? (
        data.map((nft) =>
          !overrideOnclickBehavior ? (
            <Link
            href={`/collection/${contractAddress}/${nft.metadata.id}`}
              key={nft.metadata.id}
              className={styles.nftContainer}
            >
              <NFT nft={nft} />
            </Link>
          ) : (
            <div
              key={nft.metadata.id}
              className={styles.nftContainer}
              onClick={() => overrideOnclickBehavior(nft)}
            >
              <NFT nft={nft} />
            </div>
          )
        )
      ) : (
        <p>{emptyText}</p>
      )}
    </div>
  );
}

export default NFTGrid
