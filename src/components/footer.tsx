'use client';

import { Box, Typography, Link as MuiLink, IconButton, useMediaQuery, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from '@mui/material/styles';

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        mt: 4,
        py: { xs: 6, md: 5 },
        px: { xs: 3, md: 10 },
        color: 'white',
      }}
    >
      <Grid
        container
        spacing={4}
        direction={isMobile ? 'column' : 'row'}
        justifyContent="space-between"
        alignItems={isMobile ? 'center' : 'flex-start'}
        textAlign={isMobile ? 'center' : 'left'}
        mb={4}
      >
        {/* Logo and Description */}
        <Grid item xs={12} md={3} component={'div' as any}>
          <Box display="flex" flexDirection="column" alignItems={isMobile ? 'center' : 'flex-start'}>
            <Image src="/Velocity-ALogo2.png" alt="Company Logo" width={180} height={50} />
            <Typography variant="body2" sx={{ mt: 2, maxWidth: 300, lineHeight: 2 }}>
              Velocity Automation's objective is to establish itself as a leader in the global automation market by providing high-quality solutions to industries worldwide.
            </Typography>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={3} component={'div' as any}>
          <Typography variant="h6" sx={{ color: 'orange', mb: 2, fontWeight: 600 }}>
            Quick Links
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link href="/" passHref>
              <MuiLink underline="none" color="white" sx={{ "&:hover": {textDecoration:'underline' } }}>Home</MuiLink>
            </Link>
            <Link href="/solutions/people" passHref>
              <MuiLink underline="none" color="white" sx={{ "&:hover": {textDecoration:'underline' } }}>Solution</MuiLink>
            </Link>
            <Link href="/products" passHref>
              <MuiLink underline="none" color="white" sx={{ "&:hover": {textDecoration:'underline' } }}>Products</MuiLink>
            </Link>
            <Link href="/smartfactory" passHref>
              <MuiLink underline="none" color="white" sx={{ "&:hover": {textDecoration:'underline' } }}>Smart Factory</MuiLink>
            </Link>
            <Link href="/industries/automotive" passHref>
              <MuiLink underline="none" color="white" sx={{ "&:hover": {textDecoration:'underline' } }}>Industries</MuiLink>
            </Link>
            <Link href="/contact" passHref>
              <MuiLink underline="none" color="white" sx={{ "&:hover": {textDecoration:'underline' } }}>Contact</MuiLink>
            </Link>
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={3} component={'div' as any}>
          <Typography variant="h6" sx={{ color: 'orange', mb: 2, fontWeight: 600 }}>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 2 }}>
            <PhoneIcon fontSize="small" sx={{ mr: 1 }} /> +91 98182 93887
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 2 }}>
            <EmailIcon fontSize="small" sx={{ mr: 1 }} /> info@velocityautomation.co.in
          </Typography>
           <Box display={'flex'} alignItems={'flex-start'} mt={1} >
            <LocationOnIcon fontSize="medium" sx={{ mr: 1}} />
            <Box>
              <Typography variant="body2">Plot No. 2334 HBH Colony, Sector 28,</Typography>
              <Typography variant='body2'> Mathura Road Faridabad, Sector 28,</Typography>
              <Typography variant='body2'>Haryana- 121003 ,India</Typography>
            </Box>
           </Box>
           <Button
              variant="outlined"
              color="primary"
              href="https://www.google.com/maps/place/Velocity+automation/@28.4388923,77.3094251,17z/data=!3m1!4b1!4m6!3m5!1s0x390cdd00164afdd1:0x3acf2f7228952e1d!8m2!3d28.4388923!4d77.312!16s%2Fg%2F11xsn9dzdp?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener"
              sx={{ mt: 2, ml:1, borderColor: 'white', color: 'white', '&:hover': { borderColor: 'orange', backgroundColor: 'orange' } }}
            >
              Directions on Google Maps
            </Button>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} md={3} component={'div' as any}>
          <Typography variant="h6" sx={{ color: 'orange', mb: 2, fontWeight: 600 }}>
            Follow Us
          </Typography>
          <Box display="flex" justifyContent={isMobile ? 'center' : 'flex-start'} gap={1}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/company/velocity-automation/posts/?feedView=all"
              target="_blank"
              aria-label="LinkedIn"
              sx={{
                color: 'white',
                transition: 'transform 0.3s, color 0.3s',
                '&:hover': {
                  transform: 'scale(1.2)',
                  color: '#0A66C2',
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://wa.me/919818293887"
              target="_blank"
              aria-label="WhatsApp"
              sx={{
                color: 'white',
                transition: 'transform 0.3s, color 0.3s',
                '&:hover': {
                  transform: 'scale(1.2)',
                  color: '#25D366',
                },
              }}
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
              sx={{
                color: 'white',
                transition: 'transform 0.3s, color 0.3s',
                '&:hover': {
                  transform: 'scale(1.2)',
                  color: '#E1306C',
                },
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          display: 'flex',
          justifyContent:'center',
          pt: 3,
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Typography variant="body2" mt={1}>
          © {new Date().getFullYear()} Velocity Automation. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
