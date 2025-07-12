'use client';
import PageBanner from '@/components/pageBanner';
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import ContactComponent from '../contact/contactcomponent';

export default function SmartFactory() {
  return (
    <>
      <PageBanner
        title="Velocity Automation"
        description="Innovating Solutions for Smart Factory"
        imageUrl="https://i.pinimg.com/736x/9a/9f/64/9a9f6496466366c5598ce482c35b9136.jpg"
      />
      <Box sx={{ py: 10, backgroundColor: '#eef4f7' }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
            Smart Factory Solutions
          </Typography>
          <Typography variant="body1" textAlign="center" maxWidth={700} mx="auto" mt={2}>
            Our smart factory solutions bring automation, analytics, and real-time monitoring to
            streamline your industrial operations. From predictive maintenance to IoT integration, we
            transform your plant into an intelligent and efficient ecosystem.
          </Typography>
          <Grid container spacing={4} mt={5} justifyContent="center">
            <Grid item xs={12} md={5} component={'div' as any}>
              <Box sx={{ background: '#fff', p: 4, borderRadius: 4, boxShadow: 3 }}>
                <Typography variant="h6" fontWeight="bold">
                  IoT-Based Automation
                </Typography>
                <Typography variant="body2" mt={1}>
                  Real-time machine monitoring, alerts, and controls powered by smart devices.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} component={'div' as any}>
              <Box sx={{ background: '#fff', p: 4, borderRadius: 4, boxShadow: 3 }}>
                <Typography variant="h6" fontWeight="bold">
                  Smart Worker
                </Typography>
                <Typography variant="body2" mt={1}>
                 Field Salesforce Monitoring enables businesses to track field operations .
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} component={'div' as any}>
              <Box sx={{ background: '#fff', p: 4, borderRadius: 4, boxShadow: 3 }}>
                <Typography variant="h6" fontWeight="bold">
                  Smart Vision
                </Typography>
                <Typography variant="body2" mt={1}>
                  Revolutionize your visual understanding with our advanced object segmentation.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} component={'div' as any}>
              <Box sx={{ background: '#fff', p: 4, borderRadius: 4, boxShadow: 3 }}>
                <Typography variant="h6" fontWeight="bold">
                  Smart Security
                </Typography>
                <Typography variant="body2" mt={1}>
                   The smart gate utilizes various automated features to enhance security.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} component={'div' as any}>
              <Box sx={{ background: '#fff', p: 4, borderRadius: 4, boxShadow: 3 }}>
                <Typography variant="h6" fontWeight="bold">
                  Smart Machine
                </Typography>
                <Typography variant="body2" mt={1}>
                  Machine Monitoring helps industries improve productivity by tracking.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ContactComponent />
      </motion.div>
    </>
  );
}
