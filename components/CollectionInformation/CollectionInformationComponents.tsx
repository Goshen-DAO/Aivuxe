import { FC } from 'react';
import { useRouter } from 'next/router';
import { Container, Heading, Text, Box, Flex } from '@chakra-ui/react';
import CollectionInformation from '../../components/CollectionInformation/CollectionInformation';
import { useContract, useContractRead } from "@thirdweb-dev/react";

const CollectionInformationComponents: FC = () => {
  const router = useRouter();
  const { contractAddress }: any = router.query;
  const tokenId = '0'; // Replace with the desired token ID

  const imageSize = 200; // Set the desired size for the round image

  const { contract } = useContract(contractAddress) as any;

  const { data: name, isLoading: loadingName } = useContractRead(
    contract,
    "name"
  );
  const { data: description, isLoading: loadingDescription } = useContractRead(
    contract,
    "description"
  );

  if (loadingName || loadingDescription) {
    return  <Container maxW="xl" mx="auto" textAlign="center" mt="8">
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    ><div>Loading...</div>
      </Flex>
</Container>
  }

  return (
    <Container maxW="xl" mx="auto" textAlign="center" mt="8">
  <Flex
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <Box
      borderRadius="50%"
      overflow="hidden"
      border="2px solid #00000"
      borderColor="gray.200"
      width={`${imageSize}px`}
      height={`${imageSize}px`}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CollectionInformation contractAddress={contractAddress} tokenId={tokenId} />
     
    </Box>
    <h1>{name}</h1>
    <p>{description}</p>
  </Flex>
</Container>

  );
};

export default CollectionInformationComponents;
