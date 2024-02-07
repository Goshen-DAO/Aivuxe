// components/NavbarNoSearch.tsx

import React, { useState, useEffect } from "react";
import {
  Container,
  Flex,
  Image,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  useMediaQuery,
  Button,
  Box,
  Input
} from "@chakra-ui/react";
import { ConnectWallet, useAddress, useDisconnect } from "@thirdweb-dev/react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { NETWORK } from "../../const/contractAddresses";

interface NavbarProps {}

const NavbarNoSearch: React.FC<NavbarProps> = () => {
  const router = useRouter();
  const address = useAddress();
  const disconnect = useDisconnect();

  // State to manage the input value
  const [searchInput, setSearchInput] = useState<string>("");
  // State to store the metadata of the searched contract address
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSmallerScreen] = useMediaQuery("(max-width: 768px)");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

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
      router.push(`/collection/${searchInput.trim()}`);
    }
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleSearch(); // Trigger the search function on Enter key press
    }
  };

  // Function to handle result click
  const handleResultClick = (contractAddress: string) => {
    router.push(`/collection/${contractAddress}`);
  };

  return (
    <Container
      maxW={"100%"}
      py={4}
      position="sticky"
      top={0}
      zIndex={1000}
      background="rgba(122, 218, 148, 0)" // Set the background color with opacity
      backdropFilter="blur(8px)" // Set the blur effect
    >
      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Link href={"/"}>
          <Image src="/navbar_logo.png" alt="Aivuxe Logo" boxSize="auto" maxW="300px" />
        </Link>
        {isSmallerScreen ? (
          <IconButton
          aria-label="Toggle menu"
          icon={<FaBars />}
          onClick={toggleMenu}
          variant="ghost"
          color="white" // Set the icon color to white
        />
        ) : (
          address && (
            <Flex flexDirection={"row"}
            >
            
              <span></span>
              <ConnectWallet theme="dark" btnTitle="Login" />
            </Flex>
          )
        )}
        <Modal isOpen={isOpen} onClose={closeMenu} size="xs">
          <ModalOverlay />
          <ModalContent
            background="rgba(0, 62, 17, 0.1)" // Set the modal background color with opacity
            backdropFilter="blur(8px)" // Set the modal blur effect
          >
            <ModalHeader color="white">Menu</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={4}>
                <br />
                <br />
                <br />
                <br />
                {address && (
                  <>
                    <Flex flexDirection={"row"}
            >
              
              <span></span>
             
            </Flex>
            <ConnectWallet theme="dark" btnTitle="Login" />
              <Button onClick={disconnect}>Logout</Button>
                    
                  </>
                )}
              </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </Container>
  );
};

export default NavbarNoSearch