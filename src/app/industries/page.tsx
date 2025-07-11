'use client';
import PageBanner from '@/components/pageBanner';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const industries = [
  'Manufacturing',
  'Healthcare',
  'Education',
  'Retail',
  'Agriculture',
  'Logistics',
];

export default function Industry() {
  return (
    <>
      <PageBanner
        title="Velocity Automation"
        description="Innovating Solutions for Industries"
        imageUrl="https://i.pinimg.com/736x/97/6a/4d/976a4d0522e07697ab5b0afed2752f67.jpg"
      />
      <Box sx={{ py: 10 }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
            Industries We Serve
          </Typography>
          <Grid container spacing={4} mt={4}>
            {industries.map((industry, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" textAlign="center" fontWeight="bold">
                      {industry}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
