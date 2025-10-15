'use client';

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Container,
  useMediaQuery,
  useTheme,
  Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import Link from 'next/link';
import HeaderTop from './headertop';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEls, setAnchorEls] = useState<{ [key: string]: HTMLElement | null }>({});
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<{ [key: string]: boolean }>({});

  const navItems = [
    { label: 'Home', link: '/' },
    { label: 'ABOUT', link: '/about' },
    {
      label: 'Solutions',
      subItems: [
        { label: 'PEOPLE', link: '/solutions/people' },
        { label: 'QUALITY', link: '/solutions/quality' },
        { label: 'MACHINE', link: '/solutions/machine' },
        { label: 'SECURITY', link: '/solutions/security' },
      ]
    },
    {
      label: 'Products',
      subItems: [
        { label: 'All Products', link: '/products' },
        { label: 'SIEMENS', link: '/products/siemens' },
        { label: 'B&R', link: '/products/b&r' },
        { label: 'CONTROL PANEL', link: '/products/control_panel' },
      ]
    },
    {
      label: 'Smart Factory',
      subItems: [
        { label: 'Smart Worker', link: '/smartfactory/smart-worker' },
        { label: 'Smart Vision', link: '/smartfactory/smart-vision' },
        { label: 'Smart Security', link: '/smartfactory/smart-security' },
        { label: 'Smart Machine', link: '/smartfactory/smart-machine' }
      ]
    },
    {
      label: 'Industries',
      subItems: [
        { label: 'Automotive', link: '/industries/automotive' },
        { label: 'Manufacturing', link: '/industries/manufacturing' },
        { label: 'Food & Beverages', link: '/industries/food-and-beverages' },
        { label: 'Warehouse & Logistics', link: '/industries/warehouse-and-logistics' },
        { label: 'Steel', link: '/industries/steel' },
      ]
    },
    { label: 'Contact', link: '/contact' }
  ];

  const handleClose = () => setAnchorEls({});

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileDropdownToggle = (itemLabel: string) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [itemLabel]: !prev[itemLabel],
    }));
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: '#fefefe',
        color: '#000',
        boxShadow: 5,
        top: 0,
        zIndex: 1100,
      }}
    >
      <HeaderTop />
      {/* Main Navbar */}
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ px: 0, py: 1.5 }}>
           <a href="/">
             <Image
                src="/Velocity-ALogo2.png"
                alt="Logo"
                width={175}
                height={70}
                style={{ objectFit: 'contain' }}
              />
            </a>    
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item) => (
                <Box
                  key={item.label}
                  onMouseEnter={() =>
                    item.subItems &&
                    setAnchorEls((prev) => ({
                      ...prev,
                      [item.label]: document.getElementById(item.label),
                    }))
                  }
                  onMouseLeave={() =>
                    item.subItems &&
                    setAnchorEls((prev) => ({
                      ...prev,
                      [item.label]: null,
                    }))
                  }
                >
                  {item.subItems ? (
                    <>
                      <Button
                        id={item.label}
                        endIcon={<ExpandMoreIcon />}
                        sx={{ px: 2, color: 'black', fontSize: '0.9rem', '&:hover': { color: 'blue' } }}
                      >
                        {item.label}
                      </Button>

                      <Menu
                        anchorEl={anchorEls[item.label]}
                        open={Boolean(anchorEls[item.label])}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                        MenuListProps={{ onMouseLeave: handleClose }}
                        sx={{
                          '& .MuiPaper-root': {
                            minWidth: 200,
                            borderRadius: 2,
                            boxShadow: 3,
                          },
                        }}
                      >
                        {item.subItems.map((subItem) => (
                          <MenuItem
                            key={subItem.label}
                            component={Link}
                            href={subItem.link}
                            onClick={handleClose}
                            sx={{
                              color: 'gray',
                              textTransform: 'uppercase',
                              '&:hover': {
                                backgroundColor: '#f0f0f0',
                                color: 'blue',
                                fontSize: '0.9rem',
                              },
                            }}
                          >
                            {subItem.label}
                          </MenuItem>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    <Button
                      component={Link}
                      href={item.link}
                      sx={{ px: 1, color: 'black', '&:hover': { color: 'blue' }, fontSize: '0.9rem' }}
                    >
                      {item.label}
                    </Button>
                  )}
                </Box>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Dropdown */}
      {isMobile && mobileOpen && (
        <Box sx={{ width: '100%', bgcolor: '#fefefe', px: 2, pb: 2 }}>
          {navItems.map((item) => (
            <Box key={item.label}>
              {item.subItems ? (
                <>
                  <Button
                    fullWidth
                    onClick={() => handleMobileDropdownToggle(item.label)}
                    endIcon={<ExpandMoreIcon />}
                    sx={{ justifyContent: 'flex-start', py: 1 }}
                  >
                    {item.label}
                  </Button>
                  <Collapse in={mobileDropdownOpen[item.label]}>
                    <Box sx={{ pl: 2 }}>
                      {item.subItems.map((subItem) => (
                        <Button
                          key={subItem.label}
                          component={Link}
                          href={subItem.link}
                          onClick={() => setMobileOpen(false)}
                          sx={{
                            display: 'block',
                            textAlign: 'left',
                            width: '100%',
                            py: 1,
                            color: 'gray',
                            textTransform: 'uppercase', 
                          }}
                        >
                          {subItem.label}
                        </Button>
                      ))}
                    </Box>
                  </Collapse>
                </>
              ) : (
                <Button
                  component={Link}
                  href={item.link}
                  fullWidth
                  onClick={() => setMobileOpen(false)}
                  sx={{ justifyContent: 'flex-start', py: 1, color: 'black' }}
                >
                  {item.label}
                </Button>
              )}
            </Box>
          ))}
        </Box>
      )}
    </AppBar>
  );
};

export default Navbar;
