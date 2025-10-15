'use client';

import { useState } from 'react';
import PageBanner from '@/components/pageBanner';
 import type { SelectChangeEvent } from '@mui/material/Select';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  AccessTime as AccessTimeIcon,
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
  Message as MessageIcon,
  Person as PersonIcon,
  Phone as PhoneIcon,
  Business as BusinessIcon,
} from '@mui/icons-material';
import CustomersSection from '@/components/ourcustomers';

const slides = [
  {
    title: "Get in Touch",
    description: "We’re here to power your automation journey.",
    imageUrl: "/Contactbanner.jpeg",
  },
  {
    title: "Connect With Our Experts",
    description: "Let’s discuss your automation and training needs.",
    imageUrl: "https://i.pinimg.com/736x/3f/03/fd/3f03fdd86df121ca4d03458e95944f04.jpg",
  },
  {
    title: "Partner With Velocity Automation",
    description: "Delivering reliable industrial solutions for every sector.",
    imageUrl: "https://i.pinimg.com/736x/a3/ca/54/a3ca54b74b7e5d810dfaadf6b75d7241.jpg",
  },
  {
    title: "We Value Your Vision",
    description: "Reach out and let’s build the future of automation together.",
    imageUrl: "https://i.pinimg.com/1200x/b1/a6/4a/b1a64ae5e494f652e4dbd897ad3547d9.jpg",
  },
];



export default function ContactPage() {
  const [form, setForm] = useState({
    full_name: '',
    email_id: '',
    phone_no: '',
    your_company: '',
    product_name: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSnack(true);
        setForm({
          full_name: '',
          email_id: '',
          phone_no: '',
          your_company: '',
          product_name: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Submit Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
     <div className="bg-white text-gray-800">
      <div className='bg-white'>
        <PageBanner slides={slides}/>
      </div>

      {/* our customers */}
      <div className='bg-white'>
        <CustomersSection />
      </div>

      <Container maxWidth="xl" sx={{ py: 0, my: 6, bgcolor: 'white', color: 'black' }}>
        <Typography variant="h4" align="center" fontWeight="bold" color="primary" gutterBottom>
          Get in Touch With Us
        </Typography>
        <Typography variant="subtitle1" align="center" mb={4}>
          We’d love to hear from you! Fill out the form and we’ll get back to you shortly.
        </Typography>

        <Stack spacing={6}>

          {/* Contact form */}
          <Card sx={{ p: 5, borderRadius: 3, boxShadow: 3 }}>
            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  label="Full Name"
                  name="full_name"
                  fullWidth
                  value={form.full_name}
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Email"
                  name="email_id"
                  type="email"
                  fullWidth
                  value={form.email_id}
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Phone No"
                  name="phone_no"
                  fullWidth
                  value={form.phone_no}
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Your Company"
                  name="your_company"
                  fullWidth
                  value={form.your_company}
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BusinessIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <FormControl fullWidth required>
                  <InputLabel>Products</InputLabel>
                  <Select
                    name="product_name"
                    value={form.product_name}
                    onChange={handleChange}
                    label="Products"
                  >
                    <MenuItem value="Siemens">Siemens Products</MenuItem>
                    <MenuItem value="Delta Products">B&R Products </MenuItem>
                    <MenuItem value="Control Panel">Control Panel</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  fullWidth
                  value={form.message}
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MessageIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  disabled={loading}
                  fullWidth
                  sx={{ py: 1.5, fontWeight: 'bold', fontSize: '1rem', borderRadius: 2 }}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
                </Button>
              </Stack>
            </Box>
          </Card>
          
          {/* Contact info + map */}
          <Box>
            <Card sx={{ p: 5, mb: 3 }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <LocationOnIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="subtitle1" fontWeight="bold">
                    Address
                  </Typography>
                </Box>
                <Typography sx={{ mb: 2, pl: 4, borderBottom: 1 }}>
                  Plot No. 2334 HBH Colony, Mathura Road Faridabad, Sector 28 Police Station, Haryana- 121003
                </Typography>

                <Box display="flex" alignItems="center" mb={2}>
                  <EmailIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="subtitle1" fontWeight="bold">
                    Email
                  </Typography>
                </Box>
                <Typography sx={{ mb: 2, pl: 4, borderBottom: 1 }}>
                   info@velocityautomation.co.in / enquiry@velocityautomation.co.in
                </Typography>

                <Box display="flex" alignItems="center" mb={2}>
                  <PhoneIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="subtitle1" fontWeight="bold">
                    Phone
                  </Typography>
                </Box>
                <Typography sx={{ mb: 2, pl: 4, borderBottom: 1 }}>
                  +91 98182 93887 
                </Typography>

                <Box display="flex" alignItems="center" mb={2}>
                  <AccessTimeIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="subtitle1" fontWeight="bold">
                    Office Hours
                  </Typography>
                </Box>
                <Typography sx={{ pl: 4, borderBottom: 1 }}>Mon – Sat: 9 AM – 7 PM</Typography>
              </CardContent>
            </Card>

            <Card sx={{ overflow: 'hidden', borderRadius: 3, boxShadow: 3 }}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.3490586545777!2d77.3094250754937!3d28.438892275771106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd00164afdd1%3A0x3acf2f7228952e1d!2sVelocity%20automation!5e0!3m2!1sen!2sin!4v1756717192407!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </Card>
          </Box>
        </Stack>

        <Snackbar open={snack} autoHideDuration={3000} onClose={() => setSnack(false)}>
          <Alert severity="success">Data sent successfully!</Alert>
        </Snackbar>
      </Container>
      </div>
    </>
  );
} 
