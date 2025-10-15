'use client';

import PageBanner from '@/components/pageBanner';
import ContactComponent from '../../contact/contactcomponent';
import { motion } from 'framer-motion';
import CustomersSection from '@/components/ourcustomers';

const slides = [
    {
      title: "B&R  PLC",
      description: "We serve all B&R  PLC like X20 System, etc.",
      imageUrl: "https://www.br-automation.com/fileadmin/X20MM4456_X67SM2436_Schrittmotor_WEISS-6d5df77e.jpg",
    },
    {
      title: "B&R  HMI",
      description: "All B&R  HMI Like- Automation Panel multi-touch, etc.",
      imageUrl: "https://www.br-automation.com/fileadmin/Automation_Panel_930_white-8c980af2.jpg",
    },
     {
      title: "B&R Motion Control",
      description: "all B&R  Motion Control like  8LVA and 8WSA compact servo motors etc.",
      imageUrl: "https://www.br-automation.com/fileadmin/Motion_Brochure_-_page_5-e5738877.jpg",
    },
    {
      title: "B&R I/O System",
      description: "all B&R  I/O System  like X20 System Coated X20 systems, etc.",
      imageUrl: "https://www.br-automation.com/fileadmin/X20DI9371_Block_Dreiteilung_WEISS-1ec2f3bd.jpg",
    },
  ];

const BandR = () => {
  const products = [
  {
    title: 'B&R  PLC',
    description: 'We serve all B&R  PLC like X20 System, X20 System coated, X90 mobile control system, ET200s etc',
    image: 'https://www.br-automation.com/fileadmin/X20MM4456_X67SM2436_Schrittmotor_WEISS-6d5df77e.jpg',
  },
  {
    title: 'B&R  HMI',
    description: 'We deliver all B&R  HMI Like- Automation Panel multi-touch, Mobile Panel 7200,  and Power Panel T-Series etc',
    image: 'https://www.br-automation.com/fileadmin/Automation_Panel_930_white-8c980af2.jpg',
  },
  {
    title: 'B&R Motion Control',
    description: 'We understand need of customer & deliver all B&R  Motion Control like  8LVA and 8WSA compact servo motors , 8LVB and 8WSB gear motors etc',
    image: 'https://www.br-automation.com/fileadmin/Motion_Brochure_-_page_5-e5738877.jpg',
  },
  {
    title: 'B&R I/O System',
    description: 'We serve all B&R  I/O System  like X20 System Coated X20 systems , X67 System , XV System etc',
    image: 'https://www.br-automation.com/fileadmin/X20DI9371_Block_Dreiteilung_WEISS-1ec2f3bd.jpg',
  },
  
];

  return (
    <div className="bg-white text-gray-800">
     <div className='bg-white'>
       <PageBanner slides={slides}/>
     </div>

     {/*CardSection */}
      <div className="max-w-8xl mx-auto px-6 md:px-12 py-18">
        <h2 className="text-3xl font-bold text-center mb-12">Explore All Our B&R Products </h2>
        <p className="text-xl  mb-20">
          B&R delivers advanced automation solutions with scalable PLCs, motion control, and integrated safety systems. Known for innovation and flexibility, B&R products empower industries to achieve smarter, faster, and more reliable production. <br />B&R offers world-class automation and digitalization solutions including PLCs, drives, HMIs, and industrial control systems. Trusted for reliability, innovation, and performance, B&R products help industries achieve smarter production, higher efficiency, and seamless connectivity.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((products, index) => (
            <motion.div whileHover={{ scale: 1.03 }}>
              <div
                key={index}
                className="overflow-hidden bg-base-50 shadow-lg rounded-xl hover:border-b-red-300 hover:border-r-orange-300 transition duration-300 border-gray-100 border-3"
              >
                <figure>
                  <img src={products.image} alt={products.title} className="w-full h-85 object-cover"/>
                </figure>
                <div className="p-5 space-y-3 ">
                  <h3 className="text-xl font-semibold uppercase">{products.title}</h3>
                  <p className="text-gray-800 italic">{products.description}</p>
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

export default BandR;
