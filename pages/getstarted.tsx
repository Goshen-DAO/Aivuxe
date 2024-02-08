// getstarted.tsx
import React, { useState, useEffect } from "react";
import {
  Flex,
  Container,
  Text,
  Button,
  Box,
  Input,
  useMediaQuery,
  Spinner,
} from "@chakra-ui/react";
import {
  ConnectEmbed,
  darkTheme,
  useShowConnectEmbed,
  useAddress,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { NETWORK } from "../const/contractAddresses";
import toast, { Toaster } from "react-hot-toast";
import { client } from "../lib/sanityClient";

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
  const address = useAddress();
  const showConnectEmbed = useShowConnectEmbed(loginOptional);
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSmallerScreen] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const fetchMetadata = async () => {
      if (searchInput.trim() !== "") {
        const sdk = new ThirdwebSDK(NETWORK, {
          clientId: process.env.THIRDWEB_API_KEY as string,
        });

        try {
          setIsLoading(true);
          const contracts: any = await sdk.getContract(searchInput.trim());
          setSearchResults(contracts);
        } catch (error) {
          setSearchResults([]);
          console.error("Error fetching metadata:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setSearchResults([]);
      }
    };

    fetchMetadata();
  }, [searchInput]);

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      router.push(`/collection/${searchInput.trim()}`);
    }
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleResultClick = (contractAddress: string) => {
    router.push(`/collection/${contractAddress}`);
  };

  const welcomeUser = (userName: string, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back${userName !== "Unnamed" ? ` ${userName}` : ""}!`,
      {
        style: {
          background: "#04111d",
          color: "#fff",
        },
      }
    );
  };

  useEffect(() => {
    if (!address) return;
    (async () => {
      const userDoc = {
        _type: "users",
        _id: address,
        userName: "Unnamed",
        walletAddress: address,
      };

      const result = await client.createIfNotExists(userDoc);

      welcomeUser(result.userName);
    })();
  }, [address]);

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
        <>
          <Toaster position="top-center" reverseOrder={false} />
          <Container maxW="100%">
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #0e1c26, #2a454b, #294861)",
                minHeight: "100vh",
              }}
            >
              <Text as="b" fontSize="4xl" color="white">
                Featured Collection🔥
              </Text>

              <Text as="b" fontSize="6xl" color="white">
                Search for your favorite collection now!
              </Text>
              <Box display="flex" alignItems="center">
                <Input
                  className="searchInput"
                  type="text"
                  placeholder="🔍 Search Collections"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  marginRight="10px" // Add this line to set the margin on the right
                  style={{ color: "white" }}
                />
                <Button
                  w="100px"
                  p="12px 40px"
                  border="3px solid hsla(0, 0%, 100%, 0.1)"
                  m="16px 0"
                  bg="hsla(0, 0%, 100%, 0.9)"
                  borderRadius="8px"
                  color="#0d0d0d"
                  fontSize="16px"
                  fontWeight="500"
                  letterSpacing="0.2px"
                  lineHeight="20px"
                  transition="opacity 0.2s"
                  _hover={{
                    cursor: "pointer",
                    opacity: 0.7,
                  }}
                  onClick={handleSearch}
                  position="relative"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  className="heroCta"
                >
                  {isLoading ? <Spinner size="sm" /> : "Search"}
                  <span
                    style={{
                      position: "absolute",
                      zIndex: "-1",
                      top: "5px",
                      right: "5px",
                      bottom: "0",
                      left: "5px",
                      background:
                        "conic-gradient(from 147.14deg at 50% 50%, var(--color-primary) -55.68deg, var(--color-secondary) 113.23deg, var(--color-tertiary) 195deg, var(--color-quaternary) 304.32deg, var(--color-primary) 473.23deg)",
                      borderRadius: "6px",
                      content: "''",
                      filter: "blur(20px)",
                      opacity: "0.6",
                    }}
                  />
                </Button>
              </Box>

              {searchResults.length > 0 && (
                <Box className="resultsDropdown">
                  {searchResults.map((result) => (
                    <Box
                      key={result.address}
                      className="resultItem"
                      onClick={() => handleResultClick(result.address)}
                    >
                      <p className="resultName">{result.name}</p>
                    </Box>
                  ))}
                </Box>
              )}
              {/* Additional content goes here */}
            </Flex>
          </Container>
        </>
      )}
    </div>
  );
};

export default GetStarted;
