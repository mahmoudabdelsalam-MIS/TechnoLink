import React from 'react'
import FeaturedProductsCard from '../../shared/components/cards/FeaturedProductsCard'

export default function FeaturedProducts() {
  return (
    <div className="max-w-350 mx-auto px-4 sm:px-8 lg:px-12">
        <div className='flex flex-col items-stretch pl-8 my-4 max-w-lg'>
        <h2 className='  text-primary text-xl md:text-2xl font-bold '>Featured <span className='text-secondary'>Products</span></h2>
        {/* الخط الافقي */}
        <span className="w-18 h-1 bg-secondary rounded-full shrink-0" />
        </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      <FeaturedProductsCard/>
      <FeaturedProductsCard/>
      <FeaturedProductsCard/>
      <FeaturedProductsCard/>

    </div>
    </div>
  )
}
