'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const logos = [
  { src: '/Imperial-auto.png', alt: 'Imperial Auto' },
  { src: '/ALPGroup.png', alt: 'ALP' },
  { src: '/pprm.webp', alt: 'PPRM' },
  { src: '/Sambhv-logo.png', alt: 'Sambhav' },
  { src: '/uvalidkoping.svg', alt: 'uv' },
  { src: '/VarunBeverages.png', alt: 'Varun Beverages' },
];

// Triple duplication for smoother loop effect
const rail = [...logos, ...logos, ...logos];

export default function CustomersSection() {
  const railRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const resumeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = railRef.current;
    if (!container || !isAutoScrolling) return;

    const scroll = () => {
      container.scrollBy({ left: 1, behavior: 'smooth' });

      // Reset scroll when reaching near end
      if (container.scrollLeft >= container.scrollWidth / 1.5) {
        container.scrollLeft = container.scrollWidth / 3;
      }
    };

    const interval = setInterval(scroll, 15);
    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const restartAutoScroll = () => {
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      setIsAutoScrolling(true);
    }, 3000);
  };

  const nudge = (dir: 'left' | 'right') => {
    setIsAutoScrolling(false);
    railRef.current?.scrollBy({
      left: dir === 'left' ? -200 : 200,
      behavior: 'smooth',
    });
    restartAutoScroll();
  };

  useEffect(() => {
    const container = railRef.current;
    if (container) {
      // Start from the middle block to allow loop scroll
      container.scrollLeft = container.scrollWidth / 3;
    }
  }, []);

  return (
    <section className="py-16 bg-gray-50 text-center shadow-sm">
      {/* Heading */}
      <div className="mb-14">
        <div className="badge bg-gray-50 border-1 border-error text-error px-4 py-2 mb-4">
          Trusted&nbsp;By
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold text-red-400">Our Customers</h2>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        {/* Left Button */}
        <button
          onClick={() => nudge('left')}
          className="btn btn-circle btn-outline btn-error absolute left-0 top-1/2 -translate-y-1/2 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Button */}
        <button
          onClick={() => nudge('right')}
          className="btn btn-circle btn-outline btn-error absolute right-0 top-1/2 -translate-y-1/2 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Scrollable Logo Rail */}
        <div
          ref={railRef}
          className="flex gap-16 px-12 overflow-x-auto scroll-smooth scrollbar-hide"
          onWheel={(e) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
              e.preventDefault();
              railRef.current?.scrollBy({ left: e.deltaY });
            }
          }}
        >
          {rail.map(({ src, alt }, idx) => (
            <div
              key={`${alt}-${idx}`}
              className="shrink-0 flex items-center justify-center w-48 h-28 relative"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain p-2 transition duration-300"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
