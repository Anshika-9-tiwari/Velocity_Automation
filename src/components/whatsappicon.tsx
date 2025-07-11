'use client';

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsappSticky() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="https://wa.me/9163972 06850" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-300">
          <FaWhatsapp size={28} />
        </div>
      </Link>
    </div>
  );
}
