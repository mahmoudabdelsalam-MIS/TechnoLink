import React from 'react'
import product from '../../../../assets/product8.png';


export default function ProductCard() {
  return (
    <div className='w-sm flex gap-4 p-4 bg-gray-200'>
      <img src={product} alt="" />
      <div className='flex flex-col gap-4'>
        <h4 className='font-semibold'>Product Name</h4>
        <p className='text-xs'>Helping families live intelligently means we’re always working to bring our customers the latest techn...</p>
      </div>
      
    </div>
  )
}
