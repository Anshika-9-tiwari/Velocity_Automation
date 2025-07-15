'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ContactComponent from '../../contact/contactcomponent'
import PageBanner from '@/components/pageBanner';
import CustomersSection from '@/components/ourcustomers';

const ControlPanel = () => {

  return (
    <div className="bg-white text-gray-900">
      {/* Banner */}
       <PageBanner
        title="Control Panel"
        description=''
        imageUrl="https://i.pinimg.com/736x/56/d8/a1/56d8a14df98686062ee2367a10514052.jpg" 
      />
      <div className="space-y-16 px-4 md:px-10 py-16 bg-white">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-1/2" >
            <img
              src="https://atechnology.in/wp-content/uploads/2023/04/Control-panel.jpg"
              alt="Robotics"
              width={530}
              height={200}
              className="border border-red-600 rounded-tr-4xl rounded-bl-4xl mb-4 w-full h-90 object-cover shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-semibold text-red-400">Control Panel</h1>
            <p className="mt-4 text-base text-gray-700 leading-relaxed">
              We provides end-to-end integration of control systems across different components of your manufacturing process chain. We focus on maximizing our customer’s impact by providing high-quality, efﬁcient and secure solutions and minimizing the time to value.
            </p>
            <p className="mt-4 text-base text-gray-700 leading-relaxed">
              We understand need of customer & deliver a quality services which meets their excat speciﬁcation.</p>
          </div>
        </motion.div>
      </div>

      {/* Our Services */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-base-200 py-16"
      >
        <h2 className="text-4xl font-semibold text-center mb-8">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-3 max-w-4xl mx-auto text-center  bg-base-50">
          <div className="flex items-start gap-2">
            <span className="text-green-600 text-xl">✅</span>
            <p>PLC Based Control Panel</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-600 text-xl">✅</span>
            <p>Drive Based Control Panel</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-600 text-xl">✅</span>
            <p>PLC & DCS Programming</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-600 text-xl">✅</span>
            <p>Motion Control Programming & Configuration</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-600 text-xl">✅</span>
            <p>SCADA Based Control Panel</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-600 text-xl">✅</span>
            <p>System Upgradation/Retroﬁtting</p>
          </div>
        </div>
      </motion.div>

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

export default ControlPanel;

