// InfiniteSlider/InfiniteSlider.tsx

import React, { useRef, useEffect } from 'react';
import { Box, Link } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './InfiniteSlider.module.css';

// Import the necessary types from react-slick
import { Settings } from 'react-slick';

// Define SliderSettings type based on the Settings type from react-slick
type SliderSettings = Settings;

const InfiniteSlider: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  // Use SliderSettings type for the settings
  const settings: SliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // Add other settings as needed
  };

  return (
    <Slider {...settings} ref={sliderRef} className={styles.slider}>
      <Box>
        <Link href="/" _focus={{ outline: 'none' }}>
          <img src="/logo.png" alt="Slide 1" className={styles.sliderImage} />
        </Link>
      </Box>
      <Box>
        <Link href="/" _focus={{ outline: 'none' }}>
          <img src="/logo.png" alt="Slide 2" className={styles.sliderImage} />
        </Link>
      </Box>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default InfiniteSlider;
