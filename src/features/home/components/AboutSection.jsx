import React from 'react'
import Button from '../../shared/components/button/Button';
import photoFeatures from '../../../assets/photoFeatures.png';
import { Link } from 'react-router-dom';


export default function AboutSection() {
  return (
    <div className='max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-16'>

        <div className="flex flex-col items-start gap-6 p-6 ">
          <p className="text-primary text-lg md:text-2xl font-bold">
            About Us
          </p>
            
          <h3 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight text-primary">
            Who is <span className='text-secondary '>TECNO</span>LINK ?
          </h3>

          <div className='flex items-stretch gap-4 ml-10 max-w-lg'>
            <span className="w-1 bg-gray-300 rounded-full my-1.5 shrink-0 h-18" />

          <p className="text-gray-500 text-base md:text-lg  max-w-lg leading-relaxed  pl-2">
            
            Helping families live intelligently means we’re always working to bring our customers the latest technology. As one of the premier providers of smart home technology, we are recognized throughout
             the industry for our products, innovation & customer satisfaction.
             <br />
             <span className='my-4 inline-block'>Helping families live intelligently means we’re always working to bring our customers the latest technology. </span>
          </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link to={"/aboutUs"}>
            <Button variant="outline" >Know More !</Button>
            </Link>
            <Link to={"/contactUs"}>
            <Button variant="primary">Contact Us</Button>
            </Link>
          </div>
        </div>

      <div>
        <img src={photoFeatures} alt="" />
      </div>
    </div>
  )
}
