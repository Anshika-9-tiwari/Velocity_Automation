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
  School as SchoolIcon,
} from '@mui/icons-material';
import CustomersSection from '@/components/ourcustomers';

export default function ContactPage() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email_id: '',
    phone_no: '',
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
          first_name: '',
          last_name: '',
          email_id: '',
          phone_no: '',
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
      <PageBanner
        title="Contact Us"
        imageUrl="Contactbanner.jpeg"
        description=""
      />

      {/* our customers */}
      <div>
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
                  Office No 10, Gnd Floor, Plot No. 25-26 , 15/16 Mathura Road Faridabad, Haryana- 121003 (India)
                </Typography>

                <Box display="flex" alignItems="center" mb={2}>
                  <EmailIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="subtitle1" fontWeight="bold">
                    Email
                  </Typography>
                </Box>
                <Typography sx={{ mb: 2, pl: 4, borderBottom: 1 }}>
                   info@velocityautomation.co.in
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
                <Typography sx={{ pl: 4, borderBottom: 1 }}>Mon – Sat: 9 AM – 6 PM</Typography>
              </CardContent>
            </Card>

            <Card sx={{ overflow: 'hidden', borderRadius: 3, boxShadow: 3 }}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.118672879325!2d77.29410449499944!3d28.48326890000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18b7e92e0f95%3A0x911b26a3d60e7a85!2s23%2C%20Mathura%20Rd%2C%20Sector%2028%2C%20Faridabad%2C%20Haryana%20121003!5e0!3m2!1sen!2sin!4v1720942831473!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </Card>
          </Box>

          {/* Contact form */}
          <Card sx={{ p: 5, borderRadius: 3, boxShadow: 3 }}>
            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  label="First Name"
                  name="first_name"
                  fullWidth
                  value={form.first_name}
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
                  label="Last Name"
                  name="last_name"
                  fullWidth
                  value={form.last_name}
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
                <FormControl fullWidth required>
                  <InputLabel>Products</InputLabel>
                  <Select
                    name="product_name"
                    value={form.product_name}
                    onChange={handleChange}
                    label="Products"
                  >
                    <MenuItem value="Automation">Siemens PLC</MenuItem>
                    <MenuItem value="Industrial Automation">Siemens HMI</MenuItem>
                    <MenuItem value="PLC Networking">Siemens AC Drive</MenuItem>
                    <MenuItem value="PLC Programing">SiemensServo System</MenuItem>
                    <MenuItem value="SCADA & HMI">Siemens Simatic IPC</MenuItem>
                    <MenuItem value="Servo Motor">Siemens Simatic SCADA</MenuItem>
                    <MenuItem value="Process Instrumentation">Simatic IOT2000</MenuItem>
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
                  {loading ? <CircularProgress size={24} color="inherit" /> : 'Send Message'}
                </Button>
              </Stack>
            </Box>
          </Card>
        </Stack>

        <Snackbar open={snack} autoHideDuration={3000} onClose={() => setSnack(false)}>
          <Alert severity="success">Message sent successfully!</Alert>
        </Snackbar>
      </Container>
    </>
  );
}
