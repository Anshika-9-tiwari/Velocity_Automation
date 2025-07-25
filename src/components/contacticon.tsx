'use client';

import Link from 'next/link';
import CallIcon from '@mui/icons-material/Call';

export default function ContactSticky() {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Link href="tel:+919818293887" passHref>
        <div className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition duration-300 animate-pulse">
          <CallIcon style={{ fontSize: 28 }} />
        </div>
      </Link>
    </div>
  );
}
