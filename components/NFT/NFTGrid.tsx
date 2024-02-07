import type { NFT as NFTType } from "@thirdweb-dev/sdk";
import Link from "next/link";
import React, { useState } from "react";
import Skeleton from "../Skeleton/Skeleton";
import NFT from "./NFT";
import styles from "../../styles/Buy.module.css";

type Props = {
  isLoading: boolean;
  data: NFTType[] | undefined;
  overrideOnclickBehavior?: (nft: NFTType) => void;
  emptyText?: string;
  contractAddress: string; // Pass the contract address as a prop
};

export default function NFTGrid({
  isLoading,
  data,
  overrideOnclickBehavior,
  emptyText = "No NFTs found for this collection.",
  contractAddress,
}: Props) {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data?.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className={styles.nftGridContainer}>
      {isLoading ? (
        [...Array(20)].map((_, index) => (
          <div key={index} className={styles.nftContainer}>
            <Skeleton key={index} width={"100%"} height="312px" />
          </div>
        ))
      ) : currentData && currentData.length > 0 ? (
        currentData.map((nft) =>
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

      {data && data.length > itemsPerPage && (
        <div className={styles.paginationContainer}>
          <button onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <button onClick={nextPage} disabled={indexOfLastItem >= data.length}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}
