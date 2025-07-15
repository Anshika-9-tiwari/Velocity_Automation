'use client';

import PageBanner from '@/components/pageBanner';
import ContactComponent from '../../contact/contactcomponent';
import IndustryFeatureSection from '@/components/industryfeature'; 
import { motion } from 'framer-motion';
import CustomersSection from '@/components/ourcustomers';

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
      <PageBanner
        title="Automotive Industry"
        description="Transforming manufacturing with Automotive Industry 4.0 integration"
        imageUrl="https://i.pinimg.com/736x/97/6a/4d/976a4d0522e07697ab5b0afed2752f67.jpg"
      />

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
