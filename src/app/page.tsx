'use client';

import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  useMediaQuery,
  useTheme,
  Button,
  Card,
  CardContent,
  Link,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';
import PageBanner from '@/components/pageBanner';
import {
  Hub,
  AutoAwesome,
  MedicalInformation,
  Engineering,
  Fastfood,
  ElectricBolt,
  ArrowForward,
} from '@mui/icons-material';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ContactComponent from '../app/contact/contactcomponent';
import CustomersSection from '@/components/ourcustomers';

const solutionsData = [
  {
    title: 'People',
    image: '/Group_Engineer.jpg',
    items: [
      'FR Based Attendance',
      'Field Salesforce Monitoring',
      'Workforce Cost Analytics',
      'PPE Monitoring for Safety',
    ],
  },
  {
    title: 'Machine',
    image: '/controlPanel.jpg',
    items: [
      'Machine Utilization & Productivity',
      'Condition Based Monitoring',
      'Energy Monitoring',
    ],
  },
  {
    title: 'Business',
    image: 'https://i.pinimg.com/736x/f7/91/db/f791dbeefc2b9897b3f9e2bbc1b64fd6.jpg',
    items: ['Production Planning & Scheduling', 'Digital Assistant'],
  },
  {
    title: 'Quality',
    image: 'https://i.pinimg.com/736x/45/51/9f/45519fedf9dad47bbbd8f79ec518103a.jpg',
    items: ['Computer Vision based Quality', 'Quality Analytics'],
  },
  {
    title: 'Security',
    image: 'https://i.pinimg.com/736x/94/10/2b/94102b785b8de025a008136d4ea531cf.jpg',
    items: ['Smart Gate (ANPR)', 'Boundary Management System', 'Shoplift Detection'],
  },
  {
    title: 'Material',
    image: '/Warehousepic.jpeg',
    items: ['Traceability', 'Warehouse Management', 'Scrap & Bin Management'],
  },
];

const Solutions = () => {
  const isTablet = useMediaQuery('(max-width:1024px)');
  const theme = useTheme();

  return (
    <>
      <PageBanner
        title="Industrial Automation & Automation Services"
        description="Innovating Solutions for Smart Industries"
        imageUrl="https://i.pinimg.com/736x/56/d8/a1/56d8a14df98686062ee2367a10514052.jpg"
      />

      <Box sx={{ bgcolor: 'white' }}>
        {/* customer */}
        <div>
          <CustomersSection />
        </div>

        {/* SOLUTIONS SECTION */}
        <Box sx={{ py: 8, px: { xs: 2, sm: 4, md: 4 }, color: 'black' }}>
          <Container maxWidth="xl">
            <Typography
              variant="h4"
              fontWeight="bold"
              mb={8}
              sx={{
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Revolutionize Digitally with Industry Solutions
            </Typography>

            {Array.from({ length: Math.ceil(solutionsData.length / 2) }).map((_, groupIndex) => {
              const left = solutionsData[groupIndex * 2];
              const right = solutionsData[groupIndex * 2 + 1];
              const isEvenRow = groupIndex % 2 === 0;

              return (
                <Grid
                  container
                  spacing={4}
                  alignItems="center"
                  justifyContent={{ xs: 'center', md: 'space-between' }}
                  key={groupIndex}
                  sx={{ mb: { xs: 6, md: 8 } }}
                >
                  {[left, right].map((solution, i) => {
                    if (!solution) return null;
                    const isLeft = i === 0;
                    const flip = isEvenRow ? isLeft : !isLeft;

                    return (
                      <Grid item xs={12} sm={12} md={6} key={solution.title} component={'div' as any}>
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: isTablet ? 'column' : flip ? 'row' : 'row-reverse',
                            gap: 3,
                            justifyContent: 'center',
                            textAlign: { xs: 'center', md: 'left' },
                            alignItems: 'center',
                          }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            style={{
                              borderRadius: '16px',
                              overflow: 'hidden',
                              width: '100%',
                              maxWidth: 260,
                            }}
                          >
                            <img
                              src={solution.image}
                              alt={solution.title}
                              width={280}
                              height={180}
                              style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover',
                              }}
                            />
                          </motion.div>

                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                              {solution.title}
                            </Typography>
                            <List dense sx={{ mt: -1 }}>
                              {solution.items.map((text) => (
                                <ListItem
                                  key={text}
                                  sx={{
                                    py: { xs: 1, md: 0.4 },
                                    justifyContent: { xs: 'center', md: 'flex-start' },
                                  }}
                                >
                                  <ListItemIcon sx={{ minWidth: 28 }}>
                                    <CheckCircleIcon fontSize="small" className="text-red-400" />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={text}
                                    primaryTypographyProps={{
                                      fontSize: 15,
                                      lineHeight: {xs:0, md:1},
                                     
                                    }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              );
            })}
          </Container>
        </Box>

        {/* PRODUCTS SECTION */}
        <Box
          sx={{
            bgcolor: '#fafcfc',
            py: 6,
            color: 'black',
            textAlign: 'center',
            boxShadow: ' 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            mb: 2,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
              <Typography 
               variant="h4"
               align="center"
               fontWeight="bold"
               gutterBottom
               sx={{
                background: "linear-gradient(135deg, black, #ff1c1c)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}>
                 Our Products
              </Typography>
              <Typography mb={2}>Know more about our products service...</Typography>
            </motion.div>
          </Container>
          <Container sx={{ py: 5 }}>
            <Grid container spacing={{ xs: 3, md: 7 }} justifyContent="center">
              {[
                {
                  title: 'Siemens',
                  icon: <Inventory2Icon fontSize="large" className="text-red-400" />,
                  desc: "Reliable automation and control products.",
                  link: '/products/siemens',
                },
                {
                  title: 'Delta',
                  icon: <ProductionQuantityLimitsIcon fontSize="large" className="text-red-400" />,
                  desc: "Advanced industrial automation solutions.",
                  link: '/products/delta',
                },
                {
                  title: 'Control Panel',
                  icon: <AutoAwesome fontSize="large" className="text-red-400" />,
                  desc: "Customized control panels for industries.",
                  link: '/products/control_panel',
                },
              ].map(({ title, icon, desc, link }) => (
                <Grid item xs={12} sm={10} md={4} key={title} component={'div' as any}>
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Card sx={{ textAlign: 'center', py: 3, px: 3, borderRadius: '16px' }}>
                      <Box
                        sx={{
                          width: 70,
                          height: 70,
                          borderRadius: '50%',
                          bgcolor: '#fee2e2',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto',
                          mb: 2,
                        }}
                      >
                        {icon}
                      </Box>
                      <CardContent>
                        <Typography variant="h6" fontWeight="bold">
                          {title}
                        </Typography>
                        <Typography variant="body2">{desc}</Typography>
                        <Link href={link}>
                          <button className="btn btn-sm bg-green-300 text-black mt-4">
                            Read More
                            <ArrowForward className="text-black-50 mt-1 cursor-pointer" />
                          </button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
            <Box>
              <Link href="/products">
                <Button variant="outlined" color='error' sx={{ textTransform: 'none', mb: 0, mt: 8, color: 'maroon' }}>
                  Explore All Products
                </Button>
              </Link>
            </Box>
          </Container>
        </Box>

        {/* SMART FACTORY */}
        <Container maxWidth="xl" sx={{ py: 8, color: 'black', px: { xs: 2, sm: 4, md: 8 } }}>
          <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <Typography
               variant="h4"
               align="center"
               fontWeight="bold"
               gutterBottom
               sx={{
                background: "linear-gradient(135deg, black, #ff1c1c)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                mb:4
              }}
            >
              Smart Factory
            </Typography>
            <Typography mb={2} 
             sx={{
              textAlign:{xs:'center',md:'left'} ,  
              }}>
                At Velocity Automation, our Smart Factory solutions empower industries to move towards Industry 4.0 by integrating intelligent machines, connected workers, real-time monitoring, and  advanced security. From smart machines that boost productivity, to smart vision systems that ensure quality, to smart worker tools that enhance efficiency and smart security solutions that protect operations — we deliver end-to-end automation tailored to your needs.
            </Typography>
            <Typography mb={2}
             sx={{ 
               textAlign:{xs:'center', md:'left'},  
              }}>
                With cutting-edge IoT, AI, and data-driven technologies, we help businesses achieve higher efficiency, lower downtime, and improved decision-making for a truly future-ready manufacturing ecosystem. Velocity Automation’s Smart Factory solutions bring intelligence, connectivity, and automation together to help industries embrace Industry 4.0. Our modular approach covers: 
            </Typography>
            <List sx={{ maxWidth: 710, margin: '0 auto', mb: 4, color: theme.palette.text.primary }}>
              {[
                'Smart Machines – Automated, efficient, and predictive systems that minimize downtime.',
                'Smart Workers – Tools and platforms to empower employees with real-time insights and safety.',
                'Smart Vision – AI-powered quality checks and defect detection for zero-compromise production.',
                'Smart Security – Integrated digital and physical security to safeguard assets and operations.',
              ].map((item) => (
                <ListItem key={item} sx={{ justifyContent: 'center'  }}>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <CheckCircleIcon fontSize="small" className="text-red-500" />
                  </ListItemIcon>
                  <ListItemText primary={item} primaryTypographyProps={{ fontSize: 15 }} />
                </ListItem>
              ))}
            </List> 
            <Box textAlign="center">
              <Link href="/smartfactory">
                <Button variant="outlined" color='error' sx={{ color: 'green' }}>
                  Explore more
                </Button>
              </Link>
            </Box>
          </motion.div>
        </Container>

        {/* INDUSTRIES */}
        <Box
          sx={{
            bgcolor: '#fafcfc',
            py: 8,
            color: 'black',
            textAlign: 'center'
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
              <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, mb:6 }}>
                Industries We Serve
              </Typography>
              <Grid container spacing={{ xs: 3, md: 8 }} justifyContent="center">
                {[
                  {
                    name: 'Warehouse & Logistics',
                    icon: <Fastfood className="text-red-500" />,
                    desc: "Streamlined automation for warehouses and logistics.",
                    link: '/industries/warehouse-and-logistics',
                  },
                  {
                    name: 'Manufacturing Industry',
                    icon: <MedicalInformation className="text-red-500" />,
                    desc: "End-to-end smart solutions for manufacturing plants.",
                    link: '/industries/manufacturing',
                  },
                  {
                    name: 'Automotive Industry',
                    icon: <Engineering className="text-red-500" />,
                    desc: "Advanced automation for automotive production lines.",
                    link: '/industries/automotive',
                  },
                  {
                    name: 'Food & Beverages',
                    icon: <ElectricBolt className="text-red-500" />,
                    desc: "Safe and efficient automation for food & beverages.",
                    link: '/industries/food-and-beverages',
                  },
                  {
                    name: 'Steel Industry',
                    icon: <Engineering className="text-red-500" />,
                    desc: "Optimized automation for steel manufacturing.",
                    link: '/industries/steel',
                  },
                ].map(({ name, icon, desc, link }) => (
                  <Grid item xs={6} sm={6} md={3} key={name} component={'div' as any}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} style={{ height: "100%" }}>
                      <Card sx={{
                          borderRadius: 3,
                          boxShadow: 3,
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          width: 350, 
                          mx: "auto", 
                          bgcolor: '#ffffff',
                          py: 3,
                       }}>
                        <Box
                          sx={{
                            width: 70,
                            height: 70,
                            borderRadius: '50%',
                            bgcolor: '#fee2e2',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto',
                            mb: 2,
                          }}
                        >
                          {icon}
                        </Box>
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography variant="h6" fontWeight="bold" gutterBottom>
                            {name}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'gray', mt: 1 }}>
                            {desc}
                          </Typography>
                        </CardContent>
                        <Link href={link}>
                          <button className="btn btn-sm bg-red-400 text-white mt-4">
                            Read More
                            <ArrowForward className="text-gray-50 mt-1 cursor-pointer" />
                          </button>
                        </Link>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* CONTACT CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ContactComponent />
        </motion.div>
      </Box>
    </>
  );
};

export default Solutions;
