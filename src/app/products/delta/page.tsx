'use client';

import PageBanner from '@/components/pageBanner';
import ContactComponent from '../../contact/contactcomponent';
import { motion } from 'framer-motion';
import CustomersSection from '@/components/ourcustomers';

const Delta = () => {
  const products = [
  {
    title: 'Delta PLC',
    description: 'We serve all Delta PLC like LOGO, S7-1200, S7-200 Smart, ET200SP, S7-300, S7-400, S7-1500, ET200s etc',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/348737158/DU/ES/MC/7855297/delta-dvp14ss2-plc-250x250.jpg',
  },
  {
    title: 'Delta HMI',
    description: 'We deliver all Delta HMI Like- Basic Panels 1st Gen, Basic Panels 2nd Gen, Comfort Panels 1st Gen ',
    image: '/DeltaHMI.jpeg',
  },
  {
    title: 'Delta AC Drive',
    description: 'We understand need of customer & deliver all Delta AC Drives like V20, G120, G120C etc',
    image: 'https://www.deltathailand.com/imgadmins/products/model_photo/20190528142224.JPG',
  },
  {
    title: 'Delta Servo System',
    description: 'We serve all delta Servo System  like V90 SERVO, S120,  etc',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/2/394130460/PZ/AZ/WW/29312612/delta-ac-servo-system.jpg',
  },
  {
    title: 'Delta IPC',
    description: 'Delta IPCs are designed to operate reliably around the clock, 365 days in a year. ',
    image: 'https://filecenter.deltaww.com/products/images/06/060707/INDUSTRIAL_PC_M.JPG?w=350',
  },
  // {
  //   title: 'Delta SCADA',
  //   description: 'The WinCC V7 SCADA software is an innovative, scalable process visualization system.',
  //   image: 'https://5.imimg.com/data5/LB/WK/MY-15762058/delta-scada-system.jpg',
  // },
  
];
  return (
    <div className="bg-white text-gray-800">
      <PageBanner
        title="All Delta Products"
        description='PLC, HMI, CONTROL UNIT, DRIVES & MOTORS etc '
        imageUrl="https://i.pinimg.com/736x/56/d8/a1/56d8a14df98686062ee2367a10514052.jpg" 
      />

     {/* CourseCardSection */}
      <div className="max-w-8xl mx-auto px-6 md:px-12 py-18">
        <h2 className="text-3xl font-bold text-center mb-12">Explore All Our Delta Products </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((products, index) => (
            <motion.div whileHover={{ scale: 1.03 }}>
              <div
                key={index}
                className="bg-base-50 shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition duration-300 border-gray-200 border-2"
              >
                <figure>
                  <img src={products.image} alt={products.title} className="w-full h-55 object-cover"/>
                </figure>
                <div className="p-5 space-y-3 ">
                  <h3 className="text-xl font-semibold">{products.title}</h3>
                  <p className="text-orange-500 italic">{products.description}</p>
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

export default Delta;
