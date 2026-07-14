import React, { useState } from 'react'
import product from '../../../assets/product7.png';
import Button from '../../shared/components/button/Button';
import Quotation from '../../quotation/quotation';


export default function ProductDetails() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 px-6 md:px-16 gap-16 my-12'>
      {/* img product */}
      <div className='flex justify-center'>
        <img src={product} alt="" className='max-w-full h-auto object-contain max-h-112.5'/>
      </div>
      {/* product Details */}
      <div className='flex flex-col items-start gap-8'>
        <h2 className='text-black text-xl font-semibold'>Product Name</h2>

        <div className='flex flex-col gap-4'>
          <h3 className='text-secondary text-sm font-semibold'>Description</h3>
          <p className='text-gray max-w-xl'>Designed to be the fastest way to 3D print metal parts at-scale, the P-50 leverages Desktop Metal’s patent-pending Single Pass
             Jetting technology and bi-directional printing to achieve speeds up to 100 times those of laser powder
              bed fusion technologies⁴, producing parts in volumes and at costs competitive with conventional mass
               production techniques. Featuring a state-of-the-art print bar with native 1200 dpi, an inert processing
                environment, and constant wave spreading for print bed uniformity, the P-50 offers the quality
                , reliability, and economics required for high-volume, end-use applications.</p>
        </div>

        <div className='w-full max-w-lg flex flex-col gap-6 mt-4 '>
          <div className='flex items-center justify-between '>
          <h4 className='text-secondary text-sm font-semibold'>Technology</h4>
          <p className='font-semibold'>Single Pass Jetting™</p>
          </div>
          <div className='flex items-center justify-between'>
          <h4 className='text-secondary text-sm font-semibold'>Print direction</h4>
          <p className='font-semibold '>Bi-directional</p>
          </div>
          <div className='flex items-center justify-between'>
          <h4 className='text-secondary text-sm font-semibold'>Build box size</h4>
          <p className='font-semibold '>490 x 380 x 260 mm (19.2 x 15 x 10.2 in)</p>
          </div>
          <div className='flex items-center justify-between'>
          <h4 className='text-secondary text-sm font-semibold'>Resolution</h4>
          <p className='font-semibold'>Native 1200 dpi</p>
          </div>

        </div>

        <div className='flex justify-center items-center gap-6'>
          <Button variant='third' onClick={() => setIsModalOpen(true)}>Request for Quotation</Button>
          <Button variant='outline'>Download all specs</Button>
          <Quotation isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            {/* isModalOpen = true = isOpen */}
          

        </div>

      </div>

      
    </div>
  )
}
