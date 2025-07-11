'use client';
import PageBanner from '@/components/pageBanner';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function PeopleSolution() {
  return (
    <>
      <PageBanner
        title="People"
        description="Innovating Solutions for people"
        imageUrl="https://i.pinimg.com/736x/d3/14/fe/d314fec5a986beec80b279f30e193e53.jpg"
      />

      {/* Intro */}
      <Box sx={{ py: 8 , bgcolor:'white', color:'black'}}>
        <Container>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            People Solution
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              pl: 2,
              borderLeft: '3px solid red',
              maxWidth: '800px',
            }}
          >
            Our People Solutions are designed to digitally transform your workforce by integrating smart HR tools, employee engagement analytics, and automation of administrative tasks.
            Our experienced developers build top-notch facial recognition software to suit your business requirements. Our team specializes in implementing facial recognition attendance systems, providing seamless and efficient solutions for workforce management and security enhancement.
          </Typography>
          <Box mt={3}>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
              <li>Smart attendance and shift scheduling</li>
              <li>Employee performance dashboards</li>
              <li>AI-powered recruitment and onboarding</li>
            </ul>
          </Box>
        </Container>
      </Box>

      <div className="space-y-16 px-4 md:px-10 py-12 bg-white">
        {/* Section 1 */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-1/2 ">
            <Image
              src="/Robotics-Img.jpeg"
              alt="Robotics"
              width={530}
              height={200}
              className="rounded-tr-4xl rounded-bl-4xl mb-4 w-full h-90 object-cover shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-semibold text-red-400">Industry Redefined</h1>
            <p className="mt-4 text-base text-gray-700 leading-relaxed">
            KP Automation is a leading technology company focused on delivering cutting-edge solutions and services that empower businesses to prosper in the digital era of Industry.
            </p>
            <Link href={'/industries/automotive'}>
             <button className="btn  mt-6">Learn More</button>
            </Link>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-1/2 mt-5">
            <h3 className="text-2xl font-semibold text-shadow-gray-700 text-red-400">
              Your Partner in Achieving Growth Through Digital Transformation
            </h3>
            <p className="mt-4 text-base text-gray-700 leading-relaxed">
              We support businesses in effectively managing digital transformation initiatives and achieving tangible growth by harnessing the collective strength of our experience and extensive network of expertise.
            </p>
            <Link href={'/corporatetraining'}>
             <button className="btn   mt-6">Get Started</button>
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="/PLC_SCADA.jpeg"
              alt="PLC SCADA"
              width={530}
              height={200}
              className="rounded-tl-3xl  rounded-br-3xl mt-4 w-full h-85 object-cover shadow-lg"
            />
          </div>
        </motion.div>
    </div>
    </>
  );
}
