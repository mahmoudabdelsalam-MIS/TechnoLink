import React from 'react'
import Button from '../button/Button';
import phones from '../../../../assets/phones.png';
import googleplay from '../../../../assets/googleplay.png';
import appstore from '../../../../assets/appstore.png';


export default function DownloadApp() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center rounded-4xl overflow-hidden my-12 w-full max-w-xl sm:max-w-2xl md:max-w-5xl lg:max-w-6xl mx-auto p-4 lg:p-12 bg-linear-to-r from-[#F68D20] to-[#FFBF71]'>
          <div className="flex flex-col items-start gap-6 p-6">
          <p className="text-light text-xl md:text-2xl font-medium">
            Get
          </p>

          <h1 className="text-xl sm:text-2xl md:text-4xl text-light font-semibold tracking-tight">
            Your Products Very Easily
          </h1>

          <p className="text-gray-200 text-base md:text-lg max-w-lg leading-relaxed">
            Download Technolink mobile app and get an easily experience in browsing our products.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <div className='bg-black px-4 py-1 flex items-center justify-center  rounded-xl cursor-pointer'>
              <svg className="w-10 h-10 mr-1 fill-white" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.31c.64-.78 1.08-1.85.96-2.93-.93.04-2.07.62-2.74 1.4-.6.7-1.12 1.8-0.98 2.87 1.04.08 2.12-.55 2.76-1.34z"/>
              </svg>
              <div className='text-light'>
                <p className='text-sm'>Download on the</p>
                <p className='text-2xl'>App Store</p>

              </div>
            </div>

              <div className='bg-black px-4 py-1 flex items-center justify-cente rounded-xl cursor-pointer'>
                <svg className="w-10 h-10 mr-1" viewBox="0 0 512 512">
                    <path fill="#00f0ff" d="M11 20.2C8 22.8 6 27.2 6 33v446c0 5.8 2 10.2 5 12.8l234.8-235.8L11 20.2z"/>
                    <path fill="#00ea7a" d="M327.3 322.2L245.8 256l81.5-66.2 92.5 53.6c11.5 6.7 11.5 17.5 0 24.2l-92.5 54.6z"/>
                    <path fill="#ffe100" d="M245.8 256L11 501.8c4.2 2.1 9.4 2.5 14.6-.5l301.7-175.1L245.8 256z"/>
                    <path fill="#ff2a4d" d="M245.8 256l81.5-66.2L25.6 14.7c-5.2-3-10.4-2.6-14.6-.5L245.8 256z"/>
                  </svg>
              <div className='text-light  items-center'>
                <p className='text-sm '>Get it on</p>
                <p className='text-2xl'>Google Play</p>

              </div>
            </div>
          </div>
        </div>

        <div className='self-end sm:-mb-6 md:-mb-4 lg:-mb-12'>
          <img src={phones} alt="" className='object-contain' />
        </div>
    </div>
  )
}
