'use client';

import { motion } from 'framer-motion'
import React from 'react'

const videofile = () => {
  return (
   <>
      {/* Responsive Video Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="my-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
          <svg className="w-7 h-7 text-red-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 16.5l6-4.5-6-4.5v9z" />
            <path d="M21 3H3c-1.1 0-2 .9-2 2v14a2 2 0 002 2h18c1.1 0 2-.9 2-2V5a2 2 0 00-2-2zm0 16H3V5h18v14z" />
          </svg>
          Steel Manufacturing Process
        </h2>

        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl border border-gray-200">
          <div className="aspect-w-16 aspect-h-5">
            <video
              className="w-full h-1/2 object-cover"
              controls
              // autoPlay
              muted
              // loop
              playsInline
            >
              <source src="/video/steel-process.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </motion.div>
   </>
  )
}

export default videofile
