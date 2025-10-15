
'use client';

import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface PageBannerSlide {
  title: string;
  description: string;
  imageUrl: string;
}

interface PageBannerProps {
  slides: PageBannerSlide[]; 
}

export default function PageBanner({ slides }: PageBannerProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const pathname = usePathname();
  const isContactPage = pathname.startsWith('/contact');

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: isMobile ? 300 : 560,
        mb: 0.5,
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box key={index} sx={{ position: 'relative' }}>
            {/* Background Image */}
            <img
              src={slide.imageUrl}
              alt={`${slide.title} Banner`}
              style={{
                objectFit: 'cover',
                width: '100%',
                height: isMobile ? 300 : 560,
              }}
            />

            {/* Overlay Content */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                bgcolor: 'rgba(0, 0, 0, 0.55)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                px: 2,
                textAlign: 'center',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Typography
                  variant={isMobile ? 'h5' : 'h2'}
                  color="white"
                  sx={{ fontWeight: 'bold', mb: 1 }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant={isMobile ? 'h6' : 'h5'}
                  color="white"
                  sx={{ mb: 2 }}
                >
                  {slide.description}
                </Typography>

                {!isContactPage && (
                  <Link href="/contact/" passHref>
                    <Button variant="contained" color="error" size="large">
                      Let's Get Started
                    </Button>
                  </Link>
                )}
              </motion.div>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
