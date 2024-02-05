// components/Dashboard.tsx
import React from "react";
import Image from "next/image";
import {
    Flex
  } from "@chakra-ui/react";
import {
  ConnectEmbed,
  ConnectWallet,
  darkTheme,
  useShowConnectEmbed
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import styles from "../components/Navbar/Navbar.module.css";
import {
  NETWORK
} from "../const/contractAddresses";
import Container from "../components/Container/Container";

const loginOptional = false;

const customTheme = darkTheme({
  colors: {
    accentText: "#ffffff",
    accentButtonBg: "#297500",
    modalBg: "#000000",
    primaryText: "#ededef",
  },
});

const GetStarted: React.FC = () => {
  const router = useRouter();
  const showConnectEmbed = useShowConnectEmbed(loginOptional);
   // State to manage the input value
   const [searchInput, setSearchInput] = useState<string>("");
   // State to store the metadata of the searched contract address
   const [searchResults, setSearchResults] = useState<any[]>([]);
 
   useEffect(() => {
     // Fetch metadata when the searchInput changes
     const fetchMetadata = async () => {
       if (searchInput.trim() !== "") {
         const sdk = new ThirdwebSDK(NETWORK, {
           clientId: process.env.THIRDWEB_API_KEY as string,
         });
 
         try {
           const contracts: any = await sdk.getContract(searchInput.trim());
           setSearchResults(contracts);
         } catch (error) {
           setSearchResults([]);
           console.error("Error fetching metadata:", error);
         }
       } else {
         // Reset the result if the searchInput is empty
         setSearchResults([]);
       }
     };
 
     fetchMetadata();
   }, [searchInput]);
 
   // Function to handle the search
   const handleSearch = () => {
     // Redirect to the search page with the entered contract address
     if (searchInput.trim() !== "") {
       router.push(`/projects/${searchInput.trim()}`);
     }
   };
 
   // Function to handle result click
   const handleResultClick = (contractAddress: string) => {
     router.push(`/projects/${contractAddress}`);
   };

  return (
    <div>
      {showConnectEmbed ? (
        
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
            
          <div
            style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            
            <p style={{ fontSize: "3rem", color: "white", fontWeight: "bold" }}>
              Log in to start
            </p>
            <ConnectEmbed
              theme={customTheme}
              style={{
                border: "none",
              }}
              
              auth={{
                loginOptional: loginOptional,
              }}
              
            />
          </div>
        </div>
      ) : (
        <div>
            <Container maxWidth="lg">
            <Flex
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
  >
    
                <br />
                <br />
                <br />
                <br />
                
                <br />
                <br />
                <ConnectWallet />
                <br />
                <br />
                <h2>Browse your favorite collection now!</h2>
                <div className={styles.searchContainer}>
  <input
    className={styles.searchInput}
    type="text"
    placeholder="Enter Contract Address"
    value={searchInput}
    onChange={(e) => setSearchInput(e.target.value)}
  />
  <button className={styles.searchButton} onClick={handleSearch}>Search</button>

  {/* Display search results dropdown */}
  {searchResults.length > 0 && (
    <div className={styles.resultsDropdown}>
      {searchResults.map((result) => (
        <div
          key={result.address}
          className={styles.resultItem}
          onClick={() => handleResultClick(result.address)}
        >
          <Image
            className={styles.resultImage}
            src={result.image || "/default-image.png"}
            width={32}
            height={32}
            alt="Contract Image"
          />
          <p className={styles.resultName}>{result.name}</p>
        </div>
      ))}
    </div>
  )}
</div>

</Flex>
</Container>
</div>

        
      )}
      
    </div>
  );
};

export default GetStarted;
