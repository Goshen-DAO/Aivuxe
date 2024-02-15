// components/Navbar.tsx

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
  Input,
  Select,
  extendTheme,
  Text
} from "@chakra-ui/react";
import { ConnectWallet, useAddress, useDisconnect } from "@thirdweb-dev/react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { NETWORK } from "../../const/contractAddresses";
import { MdOutlineAccountBalanceWallet, MdArrowDropDown  } from 'react-icons/md';
import { selectTheme } from '../../theme/chakra-theme-select'

export const theme = extendTheme({
  components: { Select: selectTheme },
})

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter();
  const address = useAddress();
  const disconnect = useDisconnect();

  // State to manage the input value
  const [searchInput, setSearchInput] = useState<string>("");
  // State to store the metadata of the searched contract address
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSmallerScreen] = useMediaQuery("(max-width: 768px)");

  const [selectedOption, setSelectedOption] = useState('berachainartio');

  const handleSelectChange = (event: { target: { value: any; }; }) => {
    const selectedValue = event.target.value;

    // Update state to reflect the selected option
    setSelectedOption(selectedValue);

    // Perform the redirect based on the selected option
    if (selectedValue === 'berachainartio') {
      window.location.href = '/';
    } else if (selectedValue === 'comingsoon') {
      window.location.href = '#';
    }
  };
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

  const containerStyle = {
    display: 'flex',
    alignItems: 'center', // Align items vertically centered
  };

  const imageStyle = {
    marginRight: '10px', // Adjust margin as needed
  };

  const menuStyle = {
    display: 'flex',
    alignItems: 'right', // Align items vertically centered
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
        <Link href={"/"} style={containerStyle}>
          <Image src="/logo.png" alt="Aivuxe Logo" boxSize="auto" maxW="50px" style={imageStyle} />
          <Text fontSize='3xl'  fontWeight="extrabold" bgGradient="linear-gradient(to right, #8399a2, #eef2f3)" bgClip="text">Aivuxe</Text>
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
            <Flex flexDirection="row" alignItems="center" justifyContent="center">
  <Link href={"/mint/0xde532BBb7683063e42bDe19ac7D1Bf5bD1CBA475"}><Text mr="25px" color="white">Passport</Text></Link>
  <Box
    display="flex"
    alignItems="center"
    m="0"
  >
    <Input
      type="text"
      placeholder="🔍 Search Collections"
      value={searchInput}
      onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setSearchInput(e.target.value)}
      onKeyPress={handleKeyPress}
      mr="25px"
      style={{ color: 'white' }}
    />
  </Box>

  <span>
    <Select
      icon={<MdArrowDropDown />}
      onChange={handleSelectChange}
      value={selectedOption}
      bg="white"
      color="black"
    >
      <option value='berachainartio'>Berachain Artio</option>
      <option value='comingsoon'>Coming soon</option>
    </Select>
  </span>

  <ConnectWallet theme="dark" btnTitle="Login" 
  detailsBtn={() => {
    return (
      <MdOutlineAccountBalanceWallet size="50px"/>
    )
  }}
  />
</Flex>

          )
        )}
        <Modal isOpen={isOpen} onClose={closeMenu} size="xs">
          <ModalOverlay />
          <ModalContent
            background="rgba(27, 38, 21, 0.2)" // Set the modal background color with opacity
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
                  <Link href={"/mint/0xde532BBb7683063e42bDe19ac7D1Bf5bD1CBA475"}><Text color="white">Passport</Text></Link>
                    <Flex flexDirection={"row"}
            >
              
              <Box
    display="flex"
    alignItems="center"
    marginLeft="auto" // Add this line
    marginRight="auto" // Add this line
  >
    <Input
      type="text"
      placeholder="🔍 Search Collections"
      value={searchInput}
      onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setSearchInput(e.target.value)}
      onKeyPress={handleKeyPress}
      marginRight="10px" // Add this line to set the margin on the right
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
      className="heroCta" // Add your heroCta class here
    >
      Search
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

    {/* Display search results dropdown */}
    {searchResults.length > 0 && (
      <Box className="resultsDropdown">
        {searchResults.map((result) => (
          <Box
            key={result.address}
            className="resultItem"
            onClick={() => handleResultClick(result.address)}
          >
            <Image
              className="resultImage"
              src={result.image || "/default-image.png"}
              width={32}
              height={32}
              alt="Contract Image"
            />
            <p className="resultName">{result.name}</p>
          </Box>
        ))}
      </Box>
    )}
  </Box>
              <span></span>
             
            </Flex>
            <ConnectWallet theme="dark" btnTitle="Login"/>
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

export default Navbar