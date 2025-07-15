'use client';

import ContactComponent from '@/app/contact/contactcomponent';
import PageBanner from '@/components/pageBanner';
import IndustryFeatureSection from '@/components/industryfeature';
import { motion } from 'framer-motion';

const featureData = [
  {
    title: 'Worker health and safety',
    image: 'https://third-eye.ai/wp-content/uploads/2023/09/food.jpg',
    desc: `Contamination and quality inspection of food are critical aspects of ensuring food safety and consumer health. Proper inspection helps identify and prevent potential hazards that could arise from contamination, spoilage, or other quality issues.`,
    extra: `Also, Vision-based system to monitor the usage of personal protective equipment (PPE) in a food and beverages factory for worker’s safety and health....`,
  },
  {
    title: 'AI-Based Quality Inspection',
    image: '/icecream-food.jpg',
    desc: `AI-driven vision systems automate food quality inspection by detecting contamination, deformation, or mislabeling with high accuracy.`,
    extra: `It reduces human error, ensures consistent quality, and enhances consumer trust with real-time defect detection on production lines.`,
  },
  {
    title: 'Packaging Line Automation',
    image: '/object-segmentation.jpeg',
    desc: `Automated packaging systems streamline bottling, sealing, and labeling operations in high-speed food production environments.`,
    extra: `Our smart automation boosts throughput, improves hygiene, and reduces operational costs in bakery, snack, and beverage lines.`,
  },
  {
    title: 'Sorting and Counting',
    image: '/bottle-sort.jpg',
    desc: `Automated sorting and counting in food manufacturing is a crucial process to ensure product quality, safety, and efficiency. `,
    extra: `It involves the use of various technologies and systems to sort and count food items accurately like Weight-based Sorting, Colour and Size Sorting, OCR, Barcode Scanning etc.`,
  },
];

const FoodAndBeverages = () => {
  return (
    <div className="bg-white text-gray-800">
      <PageBanner
        title="Food and Beverages Industry"
        description='Transforming manufacturing with Food and Beverages Industry 4.0 integration'
        imageUrl="https://i.pinimg.com/736x/7e/75/59/7e75595fa40e1abb5e6bb0b7f0f638b1.jpg" 
      />

      <div className="px-6 md:px-16 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Overview</h1>
          <p className="mb-4">
            The Food & Beverages industry demands strict safety, hygiene, and real-time tracking across the supply chain. From processing to packaging,
            smart technologies are transforming how food is produced, stored, and delivered.
          </p>
          <p>
           <i> Our smart factory and AI-driven solutions help food companies increase efficiency, reduce waste, and meet global safety regulations with ease.</i>
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

export default FoodAndBeverages;
