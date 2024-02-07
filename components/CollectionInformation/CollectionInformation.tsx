// CollectionInformation/CollectionInformation.tsx

import { FC } from 'react';
import { ThirdwebNftMedia, useContract, useNFT } from '@thirdweb-dev/react';

interface CollectionInformationProps {
  contractAddress: string;
  tokenId: string;
}

const CollectionInformation: FC<CollectionInformationProps> = ({ contractAddress, tokenId }) => {
  // Connect to the NFT contract
  const { contract } = useContract(contractAddress);

  // Load the NFT metadata using the useNFT hook
  const { data: nft, isLoading, error } = useNFT(contract, tokenId);

  // Render the NFT image onto the UI
  if (isLoading) return <div>Loading...</div>;
  if (error || !nft) return <div>NFT not found</div>;

  return <ThirdwebNftMedia metadata={nft.metadata} />;
};

export default CollectionInformation;


