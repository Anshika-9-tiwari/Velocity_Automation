'use client';

import Link from 'next/link';
import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";

export default function HeaderTop() {
  return (
    <div className="w-full bg-gradient-to-r from-red-800 via-red-600 to-red-800 text-white text-sm px-0 md:px-4  py-2.5 md:py-4 flex flex-col md:flex-row justify-between items-center ">
        {/* Left: Email and Phone */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-success text-sm md:text-lg " />
            <a href="mailto: info@velocityautomation.co.in" className="hover:underline text-md md:text-lg">info@velocityautomation.co.in</a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-success text-lg" />
            <a href="tel:+9818293887" className="hover:underline text-md md:text-lg">+91 98182 93887</a>
          </div>
        </div>

        {/* right Links */}
        <div className="hidden md:flex items-center gap-7 mt-2 md:mt-0 transition duration-300 animate-pulse ">
          <Link href="https://www.linkedin.com/company/velocity-automation/posts/?feedView=all" className="hover:text-green-400">
            <FaLinkedin size={25} />
          </Link>
          <Link href="https://wa.me/919818293887" className="hover:text-green-400">
            <FaWhatsapp size={25} />
          </Link>
          <Link href="https://instagram.com" className="hover:text-green-400">
            <FaInstagram size={25} />
          </Link>
        </div>
      </div>
  );
}
