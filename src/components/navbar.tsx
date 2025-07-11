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
  Typography,
  useMediaQuery,
  useTheme,
  Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEls, setAnchorEls] = useState<{ [key: string]: HTMLElement | null }>({});
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<{ [key: string]: boolean }>({});

  const navItems = [
    { label: 'Home', link: '/' },
    {
      label: 'Solutions',
      subItems: [
        { label: 'People', link: '/solutions/people' },
        { label: 'Quality', link: '/solutions/quality' },
        { label: 'Security', link: '/solutions/security' },
      ]
    },
    {
      label: 'Corporate Training',
      subItems: [
        { label: 'All Courses', link: '/corporatetraining' },
        { label: 'Drives & Motors', link: '/corporatetraining/drives-motors' },
        { label: 'Industrial Automation Training', link: '/corporatetraining/industrial-automation-training' },
        { label: 'PLC Training', link: '/corporatetraining/plc-training' },
        { label: 'PLC Networking', link: '/corporatetraining/plcnetworking' },
        { label: 'Process Instrumentation', link: '/corporatetraining/process-instrumentation' },
        { label: 'SCADA & HMI', link: '/corporatetraining/scada-and-hmi' },
        { label: 'Servo & Motor', link: '/corporatetraining/servo-motor' },
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
      ]
    },
    { label: 'Contact', link: '/contact' }
  ];

  const handleClick = (itemLabel: string) => {
    setAnchorEls((prev) => ({
      ...prev,
      [itemLabel]: prev[itemLabel] ? null : document.getElementById(itemLabel),
    }));
  };

  const handleClose = () => {
    setAnchorEls({});
  };

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
        bgcolor: '#f5f5f5',
        color: 'black',
        boxShadow: 3,
        top: 0,
        zIndex: 1100,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box>
            <Image
              src="/4bg.png"
              alt="Logo"
              width={200}
              height={50}
              style={{ objectFit: 'contain' }}
            />
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
                <Box key={item.label}>
                  {item.subItems ? (
                    <>
                      <Button
                        id={item.label}
                        onClick={() => handleClick(item.label)}
                        endIcon={<ExpandMoreIcon />}
                        sx={{ px: 2 }}
                      >
                        {item.label}
                      </Button>
                      <Menu
                        anchorEl={anchorEls[item.label]}
                        open={Boolean(anchorEls[item.label])}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
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
                      sx={{ px: 2 }}
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
                            color: 'black'
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
