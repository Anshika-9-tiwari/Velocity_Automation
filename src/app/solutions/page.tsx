'use client';
import PageBanner from '@/components/pageBanner';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const solutions = [
  {
    title: 'People Solution',
    image: '/Group_Engineer.jpg',
    description: 'Empowering human resources with modern digital tools.',
  },
  {
    title: 'Quality Control',
    image: 'https://i.pinimg.com/736x/45/51/9f/45519fedf9dad47bbbd8f79ec518103a.jpg',
    description: 'Enhancing quality standards through real-time monitoring.',
  },
  {
    title: 'Security Solutions',
    image: 'https://i.pinimg.com/736x/94/10/2b/94102b785b8de025a008136d4ea531cf.jpg',
    description: 'Ensuring enterprise-grade cybersecurity for systems.',
  },
];

export default function Solutions() {
  return (
    <>
      <PageBanner
        title="Velocity Automation"
        description="Innovating Solutions for business"
        imageUrl="https://i.pinimg.com/736x/a0/d3/cf/a0d3cf6c661b56c511e57403f001442f.jpg"
      />
      <Box sx={{ pt: 10, pb: 10, backgroundColor: '#f5f5f5' }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
            Our Solutions
          </Typography>
          <Grid container spacing={4} mt={4}>
            {solutions.map((solution, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={solution.image}
                    alt={solution.title}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {solution.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {solution.description}
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
