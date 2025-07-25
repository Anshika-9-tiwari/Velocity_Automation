'use client';

import ContactComponent from '@/app/contact/contactcomponent';
import PageBanner from '@/components/pageBanner';
import IndustryFeatureSection from '@/components/industryfeature';
import { motion } from 'framer-motion';
import Videofile from '../steel/videofile';

const featureData = [
  {
    title: 'Steel Industry Overview',
    image: '/industry.jpg',
    desc: `The steel industry is one of the most essential and foundational sectors of the global economy. It involves the production, processing, and distribution of steel, which is an alloy primarily composed of iron and carbon. Steel is known for its strength, durability, and versatility, making it a critical material in various sectors including construction, automotive, infrastructure, machinery, shipbuilding, appliances, and more.`,
    extra: `As a backbone of industrial development, it plays a major role in economic growth and job creation. Modern steel production also focuses on sustainability, with high levels of recycling and energy efficiency.`,
  },
  {
    title: 'Smart Quality Inspection',
    image: '/steelSize.jpg',
    desc: `Smart quality inspection in the steel industry is a critical process that involves the use of advanced technologies and automation to ensure the quality and integrity of steel products. Steel is a fundamental material used in various industries, including construction, automotive, aerospace, and manufacturing. Maintaining high-quality standards is essential to ensure the safety and reliability of steel products.`,
    extra: `Steel is essential in manufacturing gears, shafts, actuators, tools, and sensors that are key parts of automated systems.`,
  },
  {
    title: 'Importance in the Automation Industry',
    image: '/steelplant.jpg',
    desc: `The steel industry plays a critical role in supporting the automation industry, as it provides the structural and mechanical backbone for many automated systems and components. Here's how:`,
    extra: `Steel is used to build the frames of robots, conveyor systems, CNC machines, and industrial arms due to its strength and durability . Automated factories require high-strength, wear-resistant, and heat-resistant steel to ensure safe and long-lasting performance.`,
  },
  
];

const Steel = () => {
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      <PageBanner
        title="Steel Industry"
        description='Transforming manufacturing with Steel Industry 4.0 integration'
        imageUrl="/steelplant.jpg" 
      />

      <div className="px-6 md:px-16 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Overview</h1>
          <p className="mb-4">
            The steel industry, known for its strength and durability, is embracing a new era of transformation fueled by artificial intelligence (AI) solutions. In an age where digital innovation permeates every sector, AI is revolutionizing the way steel is produced, processed, and utilized. From streamlining production processes to optimizing supply chains, AI is breathing new life into the traditional steel industry.
          </p>
          <p className=' italic'>
           AI solutions in the steel industry encompass a wide range of technologies, including machine learning, data analytics, robotics, and IoT (Internet of Things). These cutting-edge tools empower manufacturers and stakeholders with actionable insights, predictive capabilities, and improved operational efficiency. By harnessing the power of AI, the steel industry is unlocking untapped potential, driving unprecedented productivity, and staying ahead in an ever-evolving market.
          </p>
        </div>

       {/* Reused Feature Sections */}
        {featureData.map((item, i) => (
          <IndustryFeatureSection key={i} index={i} {...item} />
        ))}

       {/* VideoSection */}
        <div>
          <Videofile/>
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
      </div>
    </div>
  );
};

export default Steel;
