import React from 'react'
import { MapPin } from 'lucide-react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { IoLogoInstagram } from "react-icons/io";

export default function SectionOne() {
  return (
    <div className='h-8 sm:h-10 bg-light flex justify-between items-center px-4 sm:px-8 md:px-20 lg:px-40 text-xs sm:text-sm text-primary'>

      <div className='flex gap-1.5 sm:gap-2 font-semibold items-center min-w-0'>
        <MapPin className='text-secondary cursor-pointer shrink-0' size={16} />
        <p className='truncate'>
          <span className='hidden sm:inline'>24 Makram Ebied, Nasr City, Cairo. Egypt</span>
          <span className='sm:hidden'>Nasr City, Cairo</span>
        </p>
      </div>

      {/* الأيقونات */}
      <div className='flex gap-2 sm:gap-3 items-center justify-between shrink-0'>
        <FaFacebookF className='text-sm sm:text-lg cursor-pointer hover:text-secondary transition-all' />
        <IoLogoInstagram className='text-sm sm:text-lg cursor-pointer hover:text-secondary transition-all' />
        <FaTwitter className='text-sm sm:text-lg cursor-pointer hover:text-secondary transition-all' />
      </div>

    </div>
  )
}