// ProjectPage.tsx
import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../../components/Container/Container";
import NFTGrid from "../../components/NFT/NFTGrid";
import SellModal from "../../components/SellModal/SellModal";
import { useRouter } from "next/router";
import { Navbar } from "../../components/Navbar/Navbar";
import CollectionInformationComponents from "../../components/CollectionInformation/CollectionInformationComponents";
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator
} from "@chakra-ui/react";



export default function ProjectPage() {
  const router = useRouter();
  const contractAddress = router.query.contractAddress as string; // Updated

  const { contract } = useContract(contractAddress);
  const { data, isLoading,} = useNFTs(
    contract,
    {
      count: 20, // Limit the number of results
      start: 0, // Start from the nth result (useful for pagination)
    },
  );

  const [parentTabIndex, setParentTabIndex] = React.useState(0);


  return (
    <>
    <Navbar/>
    <Container maxWidth="xl">
      <CollectionInformationComponents />
      <Flex flexDirection={"column"} w={"100%"}>
            <Tabs
              position="relative" variant="unstyled"
              index={parentTabIndex}
              onChange={(index) => setParentTabIndex(index)}
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
          "Looks like there are no NFTs in this collection. Did you import your contract on the thirdweb dashboard? https://thirdweb.com/dashboard"
        }
        contractAddress={contractAddress} // Pass the contract address as a prop
      />
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
}
