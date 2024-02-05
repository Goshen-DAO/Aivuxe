// ProjectPage.tsx
import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../../components/Container/Container";
import NFTGrid from "../../components/NFT/NFTGrid";
import SellModal from "../../components/SellModal/SellModal";
import { useRouter } from "next/router";
import {
  Flex,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Link,
  Button
} from "@chakra-ui/react";

import { Navbar } from "../../components/Navbar/Navbar";

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
    <Container maxWidth="lg">
        <Navbar />
        <br/>
        <Link href="/getstarted">
            <Button mb={4}>Back</Button>
          </Link>
      <br></br>
      <br></br>
      <br></br>
      <Flex flexDirection={"column"} w={"100%"}>
            <Tabs
              index={parentTabIndex}
              onChange={(index) => setParentTabIndex(index)}
            >
              <TabList>
                <Tab>Buy</Tab>
                <Tab>Sell</Tab>
              </TabList>
              <TabPanels mt={4}>
                <TabPanel>
                  <Heading textAlign={["center"]}>Buy</Heading>
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
                  <Heading textAlign={["center"]}>Sell</Heading>
                  <p>Select which NFT you&rsquo;d like to sell below.</p>
                  <SellModal />
                  </TabPanel>
      </TabPanels>
      </Tabs>
      </Flex>
    </Container>
  );
}
