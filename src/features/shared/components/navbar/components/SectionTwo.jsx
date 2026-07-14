import React, { useState } from 'react'
import logo from '../../../../../assets/logo.png';
import Button from '../../button/Button';
import { Phone, Mail } from 'lucide-react';
import Quotation from '../../../../quotation/quotation';
import { Link } from 'react-router-dom';

export default function SectionTwo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='flex flex-wrap justify-between md:justify-around items-center gap-4 px-4 md:px-8 py-3 md:py-0 md:h-22 bg-white'>

      {/* اللوجو */}
      <Link to={'/'} className='flex justify-center items-center gap-2 sm:gap-4'>
        <img src={logo} alt="Logo" className="h-10 sm:h-12 md:h-14 w-auto" />
        <p className='text-secondary font-semibold text-lg sm:text-xl md:text-2xl'>TECNOLINK</p>
      </Link>

      <div className='hidden md:flex justify-center items-center gap-8 lg:gap-16'>
        <div>
          <p className='text-gray text-xs py-1'>Call us</p>
          <div className='flex justify-center items-center gap-2 text-sm font-semibold'>
            <Phone size={16} />
            <p><span className='px-1'>(+2)</span>01012345678</p>
          </div>
        </div>

        <div>
          <p className='text-gray text-xs py-1'>Email us</p>
          <div className='flex justify-center items-center gap-2 text-sm font-semibold'>
            <Mail size={16} />
            <p>TecnoLink@gmail.com</p>
          </div>
        </div>
      </div>

      {/* الزرار */}
      <div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsModalOpen(true)}
        >
          Get a quote
        </Button>
        <Quotation isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>

      <div className='flex md:hidden w-full justify-between items-center gap-4 pt-3 border-t border-gray-100'>
        <div className='flex items-center gap-2 text-xs font-semibold'>
          <Phone size={14} />
          <p><span className='px-0.5'>(+2)</span>01012345678</p>
        </div>
        <div className='flex items-center gap-2 text-xs font-semibold'>
          <Mail size={14} />
          <p className='truncate max-w-32'>TecnoLink@gmail.com</p>
        </div>
      </div>

    </div>
  )
}