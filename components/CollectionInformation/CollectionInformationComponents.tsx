import { FC } from 'react';
import { useRouter } from 'next/router';
import { Container, Heading, Text, Box, Flex } from '@chakra-ui/react';
import CollectionInformation from '../../components/CollectionInformation/CollectionInformation';

const CollectionInformationComponents: FC = () => {
  const router = useRouter();
  const { contractAddress }: any = router.query;
  const tokenId = '0'; // Replace with the desired token ID

  const imageSize = 200; // Set the desired size for the round image

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
    {/* Additional collection information can be added here */}
  </Flex>
</Container>

  );
};

export default CollectionInformationComponents;
