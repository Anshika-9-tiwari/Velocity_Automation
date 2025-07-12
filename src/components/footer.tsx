// components/Footer.js
"use client";

import { Box, Typography, Link as MuiLink, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "black", mt: 4, py: 4, px: 2, color:'white'}}>
      <Grid container spacing={4} justifyContent="space-between" >
        {/* Logo */}
        <Grid item xs={12} md={3} component={'div' as any}>
          <Image src="/4bg.png" alt="Company Logo" width={150} height={40} />
          <Typography variant="body2" sx={{ mt: 2 , lineHeight:'2'}}>
            KP Automation is a leading provider of industrial automation solutions,<br/> specializing in smart factory technologies and corporate training programs.<br/>specializing in smart factory technologies and corporate training programs.
          </Typography>
        </Grid>

        {/* Navigation Links */}
        <Grid item xs={12} md={3} component={'div' as any}>
          <Typography variant="h5" gutterBottom color="orange">Quick Links</Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link href="/" passHref><MuiLink underline="none" color="white">Home</MuiLink></Link>
            <Link href="/solutions/people" passHref><MuiLink underline="none"color="white">Solution</MuiLink></Link>
            <Link href="/corporatetraining" passHref><MuiLink underline="none"color="white">Corporate Training</MuiLink></Link>
            <Link href="/smartfactory" passHref><MuiLink underline="none"color="white">Smart Factory</MuiLink></Link>
            <Link href="/industries/automotive" passHref><MuiLink underline="none"color="white">Industry</MuiLink></Link>
            <Link href="/contact" passHref><MuiLink underline="none"color="white">Contact</MuiLink></Link>
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={3} component={'div' as any}>
          <Typography variant="h5" gutterBottom color="orange">Contact Us</Typography>
          <Typography variant="body2" lineHeight={2}><PhoneIcon className=" mt-1" /> Phone:  +91 63972 06850</Typography>
          <Typography variant="body2" lineHeight={3}><EmailIcon className=" mt-1"/> Email:  kpautomation@gmail.com</Typography>
          <Typography variant="body2"><LocationOnIcon className=" mt-1"/> Location: Block-C, Landmark Near Indra Park, New Delhi – 110088 , India</Typography>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} md={3} component={'div' as any}>
          <Typography variant="h5" gutterBottom color="orange">Follow Us</Typography>
          <Box display="flex" gap={1}>
            <IconButton component="a" href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <LinkedInIcon className="text-2xl text-white mt-1"/>
            </IconButton>
            <IconButton component="a" href="https://wa.me/919876543210" target="_blank" aria-label="WhatsApp">
              <WhatsAppIcon className="text-2xl text-white mt-1" />
            </IconButton>
            <IconButton component="a" href="https://instagram.com" target="_blank" aria-label="Instagram">
              <InstagramIcon className="text-2xl text-white mt-1 " />
            </IconButton>
          </Box> 
        </Grid>
      </Grid>
      <Box sx={{ 
        textAlign: 'center', 
        mt: 4, 
        pt: 2, 
        borderTop: '1px solid rgba(255,255,255,0.1)' 
      }}>
        <Typography variant="body2" mt={1}>
            © {new Date().getFullYear()} KP Automation. All rights reserved.
          </Typography>
      </Box>
    </Box>
  );
}
