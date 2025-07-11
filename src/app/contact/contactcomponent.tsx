'use client';

import React from 'react';
import { MdContactPhone } from 'react-icons/md';
import Link from 'next/link';

const ContactImp = () => {
  return (
    <div className="w-full py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10  p-6 rounded-xl shadow-lg text-black bg-gray-50">
        {/* Icon */}
        <div className="text-red-400 mt-1 text-6xl md:text-7xl">
          <MdContactPhone />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left ">
          <h2 className="text-3xl font-semibold mb-3 text-center">Contact Us</h2>
          <p className="mb-3 text-base text-center">
            Hey! Are you facing the same industry challenges in your Career growth? We can help you digitize and transform your
            challenges and problems into potential digital solutions.
          </p>
          <h6 className="font-semibold text-sm md:text-base text-center">
            Talk to our experts to know more about our Courses and Services.
          </h6>
        </div>

        {/* Button */}
        <div>
          <Link href="/contact">
            <button className="btn bg-red-400  btn-outline  text-white  btn-wide">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactImp;

