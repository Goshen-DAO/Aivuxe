// components/InfiniteSlider.tsx

import React, { useRef, useEffect } from 'react';
import { Box, Link } from '@chakra-ui/react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './InfiniteSlider.module.css';

type SliderSettings = Settings;

const InfiniteSlider: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const settings: SliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <Slider {...settings} ref={sliderRef} className={styles.slider}>
      <Box>
        <Link href="your-link-1" _focus={{ outline: 'none' }}>
          <img src="/logo.png" alt="Slide 1" className={styles.sliderImage} />
        </Link>
      </Box>
      <Box>
        <Link href="your-link-2" _focus={{ outline: 'none' }}>
          <img src="/logo.png" alt="Slide 2" className={styles.sliderImage} />
        </Link>
      </Box>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default InfiniteSlider;
