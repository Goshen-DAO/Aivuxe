import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import styles from "./Navbar.module.css";
import {
  NETWORK
} from "../../const/contractAddresses";

export function Navbar() {
  const router = useRouter();
  const address = useAddress();
  
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
    address && 
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/logo.png"
              width={48}
              height={48}
              alt="NFT marketplace sample logo"
            />
          </Link>

          <div className={styles.navMiddle}>

            {/* Search bar in the middle */}
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
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectWallet theme="dark" btnTitle="Login" />
          </div>
        </div>
      </nav>
    </div>
  );
}
