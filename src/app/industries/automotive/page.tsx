'use client';

import PageBanner from '@/components/pageBanner';
import ContactComponent from '../../contact/contactcomponent';
import IndustryFeatureSection from '@/components/industryfeature'; 
import { motion } from 'framer-motion';
import CustomersSection from '@/components/ourcustomers';

const slides = [
  {
    title: "Driving Innovation in Automotive",
    description: "Revolutionizing vehicle production with intelligent automation & robotics.",
    imageUrl: "https://i.pinimg.com/1200x/28/c0/9e/28c09e21510ef93a13a5103ba15941b1.jpg",
  },
  {
    title: "Precision Engineering at Every Step",
    description: "Delivering high-quality, consistent performance through smart assembly systems.",
    imageUrl: "https://i.pinimg.com/1200x/61/e6/47/61e6472de10908daf4b14196c4d7a15a.jpg",
  },
  {
    title: "Smart Robotics for Modern Plants",
    description: "Enhancing speed, safety, & reliability in automotive production lines.",
    imageUrl: "https://i.pinimg.com/736x/df/f6/7a/dff67a40bfce3904534ae748312837c7.jpg",
  },
  {
    title: "Empowering the Future of Mobility",
    description: "Transforming the automotive industry with data-driven automation & innovation.",
    imageUrl: "https://i.pinimg.com/736x/a6/70/5e/a6705e629ee67710b88ec3a3cc5cf91f.jpg",
  },
];


const Industries = () => {
  const featureData = [
    {
      title: 'Machine Utilization & Productivity',
      image: '/machine-factory.jpeg',
      desc: `Machine monitoring in the manufacturing industry enables tracking and analyzing performance, health, and utilization of machinery. Our AI solution helps optimize production, reduce downtime, and ensure product quality.`,
      extra: `Artificial Intelligence (AI) has emerged as a transformative technology in the automotive industry, revolutionizing the way products are designed, produced, and maintained. .`,
    },
    {
      title: 'Condition Based Monitoring',
      image: '/condition-based.webp',
      desc: `Condition-based monitoring (CBM) is a proactive maintenance strategy to maximize equipment reliability and minimize costs. Our CBM solution monitors machinery in real-time to detect early issues.`,
      extra: `This approach lets manufacturers schedule maintenance only when needed—avoiding unnecessary downtime and expense.`,
    },
    {
      title: 'Energy Monitoring',
      image: '/energy.webp',
      desc: `Energy monitoring is vital for sustainability and cost management. Our platform gives real-time insights into consumption and usage patterns. It involves the systematic measurement, analysis, and management of energy consumption and efficiency within manufacturing processes. `,
      extra: `By leveraging AI and smart analytics, we help businesses optimize efficiency and cut costs.`,
    },
    {
      title: 'Smart Quality Inspection',
      image: 'https://third-eye.ai/wp-content/uploads/2023/10/standard-quality-control-collage-concept-scaled.jpg',
      desc: `Smart quality inspection ensures consistency and precision through AI-driven technologies, reducing defects and improving workflows. This approach aims to minimize defects, reduce waste, and improve overall efficiency.`,
      extra: `By integrating AI-driven solutions, automotive manufacturers can achieve unparalleled levels of precision, consistency, and compliance while optimizing production workflows.`,
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <div>
        <PageBanner slides={slides} />
      </div>

      <div className="px-6 md:px-16 py-12">
        {/* Overview Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Overview</h1>
          <p className="mb-4">
            The Automotive industry encompasses the design, development, production, and sale of motor vehicles such as cars, trucks, buses, and motorcycles.
          </p>
          <p className="mb-4 text-green-400">
           <i> Artificial Intelligence (AI) has transformed automotive processes—enhancing efficiency, product quality, and decision-making.</i>
          </p>
          <p>
            Our IT solutions help manufacturers stay competitive, meet demand, and foster innovation.
          </p>
        </div>

        {/* Reused Feature Sections */}
        {featureData.map((item, i) => (
          <IndustryFeatureSection key={i} index={i} {...item} />
        ))}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ContactComponent />
        </motion.div>

        {/* Our Customers */}
        <div>
          <CustomersSection />
        </div>
      </div>
    </div>
  );
};

export default Industries;
