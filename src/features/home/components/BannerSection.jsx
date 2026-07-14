import React from 'react'
import banner1 from '../../../assets/banner1.png';
import Button from '../../shared/components/button/Button';


export default function BannerSection() {
  return (
    <div className='group relative h-50 overflow-hidden my-10'>
      <img 
        src= {banner1}
        alt="" 
        className='absolute inset-0 w-full h-full object-cover '/>
        <div className='absolute inset-0 bg-black/50  '/>
        <div className='absolute inset-0 flex justify-around items-center text-white '>
          <h4 className="text-xl md:text-4xl font-semibold tracking-wide">Ready to Work With us ! <span className='block'>Let's Talk...</span></h4>
          <Button variant="borderd" size="md" className="px-14">Let's Talk</Button>
        </div>
    </div>
  )
}
