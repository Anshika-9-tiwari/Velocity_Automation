'use client';

import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface PageBannerProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function PageBanner({ title, imageUrl, description }: PageBannerProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const pathname = usePathname();

  const isContactPage = pathname === '/contact';

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: isMobile ? 250 : 520,
        mb: 0.5,
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <img
        src={imageUrl}
        alt={`${title} Banner`}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant={isMobile ? 'h5' : 'h2'}
            color="white"
            sx={{ fontWeight: 'bold', mb: 1 }}
          >
            {title}
          </Typography>
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            color="white"
            sx={{ mb: 2 }}
          >
            {description}
          </Typography>

          {!isContactPage && (
            <Link href="/contact" passHref>
              <Button variant="contained" color="error" size="large">
                Let's Get Started
              </Button>
            </Link>
          )}
        </motion.div>
      </Box>
    </Box>
  );
}
