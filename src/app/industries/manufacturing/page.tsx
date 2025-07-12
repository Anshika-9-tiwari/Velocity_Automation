'use client';

import PageBanner from '@/components/pageBanner';
import ContactComponent from '../../contact/contactcomponent';
import IndustryFeatureSection from '@/components/industryfeature';
import { motion } from 'framer-motion';

const ManufacturingIndustry = () => {
  const featureData = [
    {
      title: 'Production Line Automation',
      image: 'https://third-eye.ai/wp-content/uploads/2023/10/20075-e1700196665594.webp',
      desc: 'Our smart automation systems streamline repetitive manufacturing tasks with real-time monitoring and control, ensuring consistent quality and reduced labor costs.',
      extra: 'Empowering factories with robotic process automation (RPA) and PLC-controlled machines for 24/7 productivity.',
    },
    {
      title: 'Digital Twin & Simulation',
      image: 'https://third-eye.ai/wp-content/uploads/2023/10/interior-view-steel-factory-1-scaled-e1700196723875.webp',
      desc: 'Digital Twin technology replicates physical manufacturing assets in a virtual environment for analysis, optimization, and predictive decision-making.',
      extra: 'Manufacturers can simulate production lines, stress-test new workflows, and forecast output with precision.',
    },
    {
      title: 'Inventory & Resource Tracking',
      image: 'https://third-eye.ai/wp-content/uploads/2023/10/image-9.jpg',
      desc: 'Real-time tracking of materials, components, and finished goods using IoT-enabled systems and smart dashboards.',
      extra: 'Minimize overstock, prevent shortages, and optimize warehouse layouts based on live data.',
    },
    {
      title: 'Remote Diagnostics & Maintenance',
      image: 'https://cdn.pixabay.com/photo/2024/07/28/12/01/ai-generated-8927297_1280.jpg',
      desc: 'Remote condition monitoring systems allow predictive alerts and fault diagnostics for uninterrupted operation.',
      extra: 'Technicians can identify issues via smart dashboards before breakdowns occur—cutting downtime and repair costs.',
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <PageBanner
        title="Manufacturing Industry"
        description="Transforming manufacturing with Manufacturing Industry 4.0 integration"
        imageUrl="https://i.pinimg.com/736x/29/dd/37/29dd37cf8df4e5c58693e53a5310d53d.jpg"
      />
      <div className="px-6 md:px-16 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Overview</h1>
          <p className="mb-4">
            The Manufacturing industry is a vital sector that encompasses the design, development, production, and sale of motor vehicles, including cars, trucks, buses, motorcycles, and other automobiles. AI’s integration into manufacturing processes has led to increased efficiency, improved product quality, and enhanced decision-making.
          </p>
          <p>
            Adopting our IT solutions empowers automotive manufacturers to remain competitive, respond to market demands faster, improve product quality, and ultimately drive innovation within the industry..
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
      </div>
    </div>
  );
};

export default ManufacturingIndustry;
