import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react';
import banner1 from '../../../../assets/banner1.png';
import Button from '../button/Button';


export default function BreadCrumbs() {
    const location = useLocation()

    const currentPath = location.pathname.replace('/' , '');
    // وضع مسافه قبل اي حرف كابتل
    const formattedPath = currentPath.replace(/([A-Z])/g, ' $1').trim();
    // الحرف الاول كابتل و ينزل باقي الحروف زي مهي
    const pageTitle = formattedPath.charAt(0).toUpperCase() + formattedPath.slice(1);
    console.log(pageTitle);

    
    
  return (
    <div className='group relative h-60 overflow-hidden '>
      <img 
        src= {banner1}
        alt="" 
        className='absolute inset-0 w-full h-full object-cover '/>
        <div className='absolute inset-0 bg-black/50 z-0 '/>
        <div className='absolute inset-0 text-white  flex flex-col gap-4 justify-center items-center'>
            <div>
            <span className='text-4xl font-bold tracking-wide'>{pageTitle}</span>
            </div>
            <div className='flex'>
            <Link to='/'>HOME</Link>
            <MoveRight className='mx-1 text-xs'/>
            <Link to={currentPath} className='text-gray-300 '>{pageTitle}</Link>
            </div>
        </div>
    </div>
  )
}
