'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const logos = [
  { src: '/Imperial-auto.png',  alt: 'Imperial Auto' },
  { src: '/ALP-Logo.png',       alt: 'ALP' },
  { src: '/pprm-Logo.png',      alt: 'PPRM' },
  { src: '/Sambhv-logo.png',    alt: 'Sambhav' },
  { src: '/Esskay-Logo.jpg',    alt: 'Esskay' },
  { src: '/VarunBeverages.png', alt: 'Varun Beverages' },
];

/** Duplicate once so the loop looks seamless */
const rail = [...logos, ...logos];

export default function CustomersSection() {
  const railRef = useRef<HTMLDivElement>(null);

  const nudge = (dir: 'left' | 'right') => {
    railRef.current?.scrollBy({
      left: dir === 'left' ? -200 : 200,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-24 bg-base-50 text-center shadow-base-100">
      {/* heading */}
      <div className="mb-14">
        <div className="badge bg-base-300  text-error px-4 py-2 mb-4">
          Trusted&nbsp;By
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold">Our Customers</h2>
      </div>

      {/* carousel */}
      <div className="relative overflow-hidden">
        {/* left / right buttons */}
        <button
          onClick={() => nudge('left')}
          className="btn btn-circle btn-outline absolute left-0 top-1/2 -translate-y-1/2 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => nudge('right')}
          className="btn btn-circle btn-outline absolute right-0 top-1/2 -translate-y-1/2 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* auto‑scrolling */}
        <motion.div
          ref={railRef}
          className="flex gap-16 px-16"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 10,
            repeat: Infinity,
          }}
        >
          {rail.map(({ src, alt }, idx) => (
            <div
              key={alt + idx} 
              className="shrink-0 flex items-center justify-center w-48 h-28"
            >
              <Image
                src={src}
                alt={alt}
                width={160}
                height={80}
                className="object-contain"
                priority
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
