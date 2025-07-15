'use client';

import PageBanner from '@/components/pageBanner';
import ContactComponent from '../../contact/contactcomponent';
import { motion } from 'framer-motion';
import CustomersSection from '@/components/ourcustomers';

const Siemens = () => {
  const products = [
  {
    title: 'Siemens PLC',
    description: 'We serve all siemens PLC like LOGO, S7-1200, S7-200 Smart, ET200SP, S7-300, S7-400, S7-1500, ET200s etc',
    image: 'https://atechnology.in/wp-content/uploads/2023/04/plc-1.jpg',
  },
  {
    title: 'Siemens HMI',
    description: 'We Deliver all HMI Products Like- Basic Panels 1st Gen, Basic Panels 2nd Gen, Comfort Panels 1st Gen - Standard devices',
    image: 'https://atechnology.in/wp-content/uploads/2023/04/CPMFORT-PANEL-PHOTO-removebg-preview.jpg',
  },
  {
    title: 'Siemens AC Drive',
    description: 'We serve all Siemens AC Drives like V20, G120, G120C etc',
    image: 'https://atechnology.in/wp-content/uploads/2023/04/4.jpg',
  },
  {
    title: 'Siemens Servo System',
    description: 'We serve all siemens Servo System  like V90 SERVO, S120,  etc',
    image: 'https://atechnology.in/wp-content/uploads/2023/04/sinamics-s210-servo-drive-system-product-image-removebg-preview.jpg',
  },
  {
    title: 'Siemens Simatic IPC',
    description: 'SIMATIC IPCs are designed to operate reliably around the clock, 365 days in a year. ',
    image: 'https://atechnology.in/wp-content/uploads/2023/04/simatic-ipc-and-scada-software-packages-removebg-preview.jpg',
  },
  {
    title: 'Siemens Sematic SCADA',
    description: 'The SIMATIC WinCC V7 SCADA software is an innovative, scalable process visualization system.',
    image: 'https://atechnology.in/wp-content/uploads/2023/04/Scada-small.jpg',
  },
  {
    title: 'Simatic IOT2000',
    description: '',
    image: 'https://atechnology.in/wp-content/uploads/2023/04/simatic-iot2050-iot-gateway-views-removebg-preview.jpg'
  }
  
];
  return (
    <div className="bg-white text-gray-800">
      <PageBanner
        title="Siemens Products"
        description='PLC, HMI, CONTROL UNIT, DRIVES & MOTORS etc '
        imageUrl="https://i.pinimg.com/736x/56/d8/a1/56d8a14df98686062ee2367a10514052.jpg" 
      />

     {/* CourseCardSection */}
      <div className="max-w-8xl mx-auto px-6 md:px-12 py-18">
        <h2 className="text-3xl font-bold text-center mb-12">Explore All Our Siemens Products </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((training, index) => (
            <motion.div whileHover={{ scale: 1.03 }}>
              <div
                key={index}
                className="bg-base-50 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 border"
              >
                <figure>
                  <img src={training.image} alt={training.title} className="w-full h-55 object-cover" />
                </figure>
                <div className="p-5 space-y-3 ">
                  <h3 className="text-xl font-semibold">{training.title}</h3>
                  <p className="text-red-500 italic">{training.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ContactComponent />
        </motion.div>

        {/* our customers */}
        <div>
          <CustomersSection />
        </div>
    </div>
  );
};

export default Siemens;
