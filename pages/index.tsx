import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Head from 'next/head';


const Home: React.FC = () => {
  const address = useAddress();

  const router = useRouter();

  const handleClick = () => {
    // Redirect to the /dashboard page
    router.push("/getstarted");
  };

  return (
    <Container
      maxW="100%"
      bgGradient="linear-gradient(to left, #0e1c26, #2a454b, #294861)"
      minH="100vh"
      width="100%"
    >
         <Head>
        {/* HTML Meta Tags */}
        <title>Aivuxe | Permissionless & Open Source NFT Marketplace</title>
        <meta
          name="description"
          content="Aivuxe is a groundbreaking project, an open-source and permissionless NFT marketplace that stands out by seamlessly supporting EVM chains. Offering a liberating space for creators and collectors alike, Aivuxe empowers individuals to engage with NFTs on their terms. Dive into the world of limitless possibilities and creative freedom with Aivuxe."
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://aivuxe.goshendao.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aivuxe | Permissionless & Open Source NFT Marketplace" />
        <meta
          property="og:description"
          content="Aivuxe is a groundbreaking project, an open-source and permissionless NFT marketplace that stands out by seamlessly supporting EVM chains. Offering a liberating space for creators and collectors alike, Aivuxe empowers individuals to engage with NFTs on their terms. Dive into the world of limitless possibilities and creative freedom with Aivuxe."
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/documents/afa32639-e47d-4db9-8c85-f41605d87fee.png?token=62NNzmR4OB0BsmJj5HBxZaGjxShdl8_CEH2TvjvSl6g&height=682&width=1200&expires=33243301356"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="aivuxe.goshendao.com" />
        <meta property="twitter:url" content="https://aivuxe.goshendao.com/" />
        <meta
          name="twitter:title"
          content="Aivuxe | Permissionless & Open Source NFT Marketplace"
        />
        <meta
          name="twitter:description"
          content="Aivuxe is a groundbreaking project, an open-source and permissionless NFT marketplace that stands out by seamlessly supporting EVM chains. Offering a liberating space for creators and collectors alike, Aivuxe empowers individuals to engage with NFTs on their terms. Dive into the world of limitless possibilities and creative freedom with Aivuxe."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/documents/afa32639-e47d-4db9-8c85-f41605d87fee.png?token=62NNzmR4OB0BsmJj5HBxZaGjxShdl8_CEH2TvjvSl6g&height=682&width=1200&expires=33243301356"
        />
      </Head>
      {!address ? (
        <Container maxW="100%">
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            maxW="100%"
          >
            <Box>
              <br />
              <br />
              <br />
              <Box className={styles.heroBodyContainer}>
                <Box className={styles.heroBody}>
                  <Heading as="h1" className={styles.heroTitle}>
                    <Text fontSize="4xl" marginTop="200px">
                      <Text
                        bgGradient="linear-gradient(to right, #8399a2, #eef2f3)"
                        bgClip="text"
                        fontSize="6xl"
                        fontWeight="extrabold"
                      >
                        Aivuxe
                      </Text>{" "}
                      <br />A Permissionless NFT Marketplace
                    </Text>
                    <br />
                  </Heading>
                  <Text as="h2">Don't be bound by the platform, be free.</Text>
                  <Button
                    w="280px"
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
                    onClick={handleClick}
                    position="relative"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    className="heroCta" // Add your heroCta class here
                  >
                    Get Started
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
              </Box>
            </Box>
          </Flex>
        </Container>
      ) : (
        <Container maxW="100%">
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            maxW="100%"
          >
            <Box>
              <br />
              <br />
              <br />
              <Box className={styles.heroBodyContainer}>
                <Box className={styles.heroBody}>
                  <Heading as="h1" className={styles.heroTitle}>
                    <Text fontSize="4xl" marginTop="200px">
                      <Text
                        bgGradient="linear-gradient(to right, #8399a2, #eef2f3)"
                        bgClip="text"
                        fontSize="6xl"
                        fontWeight="extrabold"
                      >
                        Aivuxe
                      </Text>{" "}
                      <br />A Permissionless NFT Marketplace
                    </Text>
                    <br />
                  </Heading>
                  <Text as="h2">Don't be bound by the platform, be free.</Text>
                  <Button
                    w="280px"
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
                    onClick={handleClick}
                    position="relative"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    className="heroCta" // Add your heroCta class here
                  >
                    Enter App
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
              </Box>
            </Box>
          </Flex>
        </Container>
      )}
    </Container>
  );
};

export default Home;
