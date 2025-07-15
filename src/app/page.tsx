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
  FactCheck,
  Business,
  ModelTraining,
  Hub,
  AutoAwesome,
  Handyman,
  WorkspacePremium,
  MedicalInformation,
  Engineering,
  Fastfood,
  ElectricBolt,
  ArrowForward,
} from '@mui/icons-material';
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
    image: '/condition-based.webp',
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
    items: ['Computer Vision based Quality Insp..'],
  },
  {
    title: 'Security',
    image: 'https://i.pinimg.com/736x/94/10/2b/94102b785b8de025a008136d4ea531cf.jpg',
    items: ['Smart Gate (ANPR)', 'Boundary Management System', 'Shoplift Detection'],
  },
  {
    title: 'Material',
    image: 'https://i.pinimg.com/736x/b9/f6/54/b9f654329c2d53ee7e34dc55ab267ea3.jpg',
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

        <div>
          <CustomersSection />
        </div>

        {/* SOLUTIONS SECTION */}
        <Box sx={{ py: 5, px: { xs: 2, sm: 4, md: 6 }, color: 'black' }}>
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
                  justifyContent="space-between"
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
                          
                          {/* --------------------Text Box------------------------- */}
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                              {solution.title}
                            </Typography>
                            <List dense sx={{ mt: -1 }}>
                              {solution.items.map((text) => (
                                <ListItem key={text} sx={{ py: { xs: 1, md: 0.4 } }}>
                                  <ListItemIcon sx={{ minWidth: 28 }}>
                                    <CheckCircleIcon fontSize="small" className="text-red-400" />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={text}
                                    primaryTypographyProps={{ fontSize: 15, lineHeight: '1' }}
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

        {/* Product  SECTION */}
        <Box 
          sx={{ 
            bgcolor: '#fafcfc', py: 8, color: 'black' ,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Container sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
              <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
                Our Products
              </Typography>
              <Typography mb={2}>
                Know more about our products service........
              </Typography>
              <Box>
                <Link href="/products">
                  <Button variant="outlined" color="primary">
                    Explore All Products
                  </Button>
                </Link>
              </Box>
            </motion.div>
          </Container>

          <Container sx={{ py: 5 }}>
            <Grid container spacing={{ xs: 3, md: 2 }} justifyContent="center">
              {[
                { title: 'Siemens', icon: <Hub fontSize="large" className="text-red-400" />,link: '/products/siemens' },
                { title: 'Delta', icon: <ModelTraining fontSize="large" className="text-red-400" />,link: '/products/delta' },
                { title: 'Control Panel', icon: <AutoAwesome fontSize="large" className="text-red-400" />,link: '/products/control_panel' },
              ].map(({ title, icon ,link}) => (
                <Grid item xs={12} sm={10} md={4} key={title} component={'div' as any}>
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Card sx={{ textAlign: 'center', py: 3, px: 2 }}>
                      {icon}
                      <CardContent>
                        <Typography variant="h6" fontWeight="bold">
                          {title}
                        </Typography>
                        <Typography variant="body2">
                          Brief about {title.toLowerCase()} Products.
                        </Typography>
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
          </Container>
        </Box>

        {/* SMART FACTORY SECTION */}
        <Container sx={{ py: 8, color: 'black' }}>
          <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
              Smart Factory
            </Typography>
            <Typography mb={2} sx={{ textAlign: 'center', color: 'gray' }}>
              Automation and intelligent systems for manufacturing excellence using cutting-edge technologies.
            </Typography>
            <Box textAlign="center">
              <Link href="/smartfactory">
                <Button variant="outlined" sx={{ color: 'red' }}>
                  Explore more
                </Button>
              </Link>
            </Box>
          </motion.div>
        </Container>

        {/* INDUSTRIES SECTION */}
        <Box sx={{ bgcolor: '#fafcfc', py: 8, color: 'black',textAlign: { xs: 'center', md: 'left' }, }}>
          <Container>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
              <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, mb: 5 }}>
                Industries We Serve
              </Typography>
              <Grid container spacing={{ xs: 3, md: 5 }} justifyContent="center">
                {[
                  { name: 'Warehouse & Logistics', icon: <Fastfood className="text-red-500" />, link: '/industries/warehouse-and-logistics' },
                  { name: 'Manufacturing Industry', icon: <MedicalInformation className="text-red-500" />, link: '/industries/manufacturing' },
                  { name: 'Food & Beverages', icon: <ElectricBolt className="text-red-500" />, link: '/industries/food-and-beverages' },
                  { name: 'Automotive Industry', icon: <Engineering className="text-red-500" />, link: '/industries/automotive' },
                ].map(({ name, icon, link }) => (
                  <Grid item xs={6} sm={6} md={3} key={name} component={'div' as any}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                      <Card sx={{ textAlign: 'center', py: 3, px: 2 }}>
                        {icon}
                        <CardContent>
                          <Typography>{name}</Typography>
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
