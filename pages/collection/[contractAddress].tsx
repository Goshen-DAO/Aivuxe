// ProjectPage.tsx
import { useContract, useNFTs } from "@thirdweb-dev/react";
import React, { useState } from "react";
import NFTGrid from "../../components/NFT/NFTGrid";
import SellModal from "../../components/SellModal/SellModal";
import { useRouter } from "next/router";
import CollectionInformationComponents from "../../components/CollectionInformation/CollectionInformationComponents";
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Container,
  Button,
} from "@chakra-ui/react";
 
const ProjectPage = () => {
  const router = useRouter();
  const { contractAddress }: any = router.query;
 
  const { contract } = useContract(contractAddress);
  const [currentPage, setCurrentPage] = useState(1);
 
  const { data, isLoading } = useNFTs(contract, {
    count: 20, // Limit the number of results per page
    start: (currentPage - 1) * 20, // Start from the nth result based on the current page
  });
 
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
 
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const [parentTabIndex, setParentTabIndex] = React.useState(0);
 
  return (
    <>
      <Container maxWidth="100%">
        <CollectionInformationComponents />
        <Flex flexDirection={"column"} w={"100%"}>
          <Tabs
          position="relative" variant="unstyled"
          index={parentTabIndex}
          onChange={(index: React.SetStateAction<number>) => setParentTabIndex(index)}
          >
            <TabList>
              <Tab>Buy</Tab>
              <Tab>Sell</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />
            <TabPanels mt={4}>
              <TabPanel>
                <p>Browse which NFTs are available from the collection.</p>
                <NFTGrid
                  data={data}
                  isLoading={isLoading}
                  emptyText={
                    "Looks like there are no NFTs in this collection."
                  }
                  contractAddress={contractAddress} // Pass the contract address as a prop
                />
                <Flex mt={4} justifyContent="center">
                  <Button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    mr={2}>
                    Previous Page
                  </Button>
                  <Button onClick={handleNextPage}>Next Page</Button>
                </Flex>
              </TabPanel>
              <TabPanel>
                <p>Select which NFT you&rsquo;d like to sell below.</p>
                <SellModal />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Container>
    </>
  );
};
 
export default ProjectPage;
 
