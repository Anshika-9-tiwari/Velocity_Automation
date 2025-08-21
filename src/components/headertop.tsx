'use client';

import Link from 'next/link';
import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function HeaderTop() {
  return (
    <div className="w-full bg-gradient-to-r from-red-800 via-red-600 to-red-800 text-white text-sm px-0 md:px-4  py-1 md:py-2 flex flex-col md:flex-row justify-between items-center ">
        {/* Left: Email and Phone */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-success" />
            <a href="mailto: info@velocityautomation.co.in" className="hover:underline"> info@velocityautomation.co.in</a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-success" />
            <a href="tel:+9818293887" className="hover:underline">+91 98182 93887</a>
          </div>
        </div>

        {/* right Links */}
        <div className="hidden md:flex items-center gap-4 mt-2 md:mt-0 transition duration-300 animate-pulse">
          <Link href="https://www.linkedin.com/company/velocity-automation/posts/?feedView=all" className="hover:text-green-400">
            <FaLinkedin size={18} />
          </Link>
          <Link href="https://wa.me/919818293887" className="hover:text-green-400">
            <FaWhatsapp size={18} />
          </Link>
          <Link href="https://instagram.com" className="hover:text-green-400">
            <FaInstagram size={18} />
          </Link>
        </div>
      </div>
  );
}
