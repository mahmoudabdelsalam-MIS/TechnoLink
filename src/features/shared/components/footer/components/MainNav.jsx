import React, { useState } from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { IoLogoInstagram } from "react-icons/io";
import { MapPin, Phone, SendHorizontal, CircleCheckBig   } from 'lucide-react';
import backgroundNav from '../../../../../assets/backgroundNav.png';
import mainLogo from '../../../../../assets/logo.png';


import product1 from '../../../../../assets/product1.png';
import product2 from '../../../../../assets/product2.png';
import product3 from '../../../../../assets/product3.png';
import product4 from '../../../../../assets/product4.png';
import product5 from '../../../../../assets/product5.png';
import product6 from '../../../../../assets/product6.png';

export default function MainNav() {
  const productImages = [product1, product2, product3, product4, product5, product6];
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    // استبدل ده بطلب الـ API الحقيقي بتاعك لو محتاج تبعت الإيميل فعليًا
    console.log('Submitted email:', email);

    setEmail('');       // يفضي الخانة
    setIsSent(true);    // يبدل شكل الزرار لـ Done
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (isSent) setIsSent(false); // لو الشخص بدأ يكتب تاني بعد الإرسال، يرجع الزرار لطبيعته
  };

  return (
    <div className="relative w-full overflow-hidden min-h-87.5 bg-bgNav">

      <img
        src={backgroundNav}
        alt="Navbar Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-8 md:p-12">

        {/* Start First Quarter of Nav */}
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="flex gap-8 items-center">
            <img src={mainLogo} alt="logo" className='w-18 h-18' />
            <h3 className="text-secondary font-bold text-xl">TECNOLINK</h3>
          </div>
          <p className='text-gray'> rms was methodical in its selection of additive manufacturing technology, want to reinforce and exten...</p>
          <div className='flex gap-3 items-center justify-between text-light'>
            <FaFacebookF className='text-lg cursor-pointer hover:text-secondary transition-all' />
            <IoLogoInstagram className='text-lg cursor-pointer hover:text-secondary transition-all' />
            <FaTwitter className='text-lg cursor-pointer hover:text-secondary transition-all' />
          </div>
        </div>
        {/* End First Quarter of Nav */}

        {/* Start Second Quarter of Nav */}
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="flex flex-col gap-2 items-start">
            <p className='text-light font-semibold text-xl'>NEW LETTER</p>
            <div className='w-8 h-1 bg-secondary' />
          </div>
          <p className='text-gray'> rms was methodical in its selection of additive manufacturing technology</p>

          <form className="w-full flex items-stretch gap-2 max-w-xs" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Your email address..."
              className="w-full bg-white/10 border border-white/10 text-light placeholder:text-gray text-sm px-4 py-2.5 rounded-sm outline-none focus:border-secondary transition-colors"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-secondary text-light text-sm font-semibold px-4 py-2.5 rounded-sm shrink-0 hover:bg-secondary/90 transition-colors"
            >
              {isSent ? 'Done' : 'Send'}
              <span className="text-xs">{isSent ? <CircleCheckBig size={16}/> : <SendHorizontal size={16}/>}</span>
            </button>
          </form>
        </div>
        {/* End Second Quarter of Nav */}

        {/* Start Third Quarter of Nav - Products */}
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="flex flex-col gap-2 items-start">
            <p className='text-light font-semibold text-xl'>Products</p>
            <div className='w-8 h-1 bg-secondary' />
          </div>

          <div className="grid grid-cols-3 gap-2 w-full max-w-55">
            {productImages.map((img, index) => (
              <div key={index} className="aspect-square w-full overflow-hidden rounded-2xl bg-white/5">
                <img
                  src={img}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        {/* End Third Quarter of Nav */}

        {/* Start Fourth Quarter of Nav - Official info */}
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="flex flex-col gap-2 items-start">
            <p className='text-light font-semibold text-xl'>Official info</p>
            <div className='w-8 h-1 bg-secondary' />
          </div>

          <div className="flex gap-3 items-start text-light text-sm">
            <MapPin size={18} className="text-light shrink-0 mt-0.5" />
            <p>24 Makram Ebied, Nasr City, Cairo. Egypt</p>
          </div>

          <div className="flex gap-3 items-center text-light text-sm">
            <Phone size={18} className="text-light shrink-0" />
            <p>(+2) 01012345678</p>
          </div>
        </div>
        {/* End Fourth Quarter of Nav */}

      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 mx-8 md:mx-12">
        <p className="text-center text-light text-sm py-5">
          All rights reserved for TECHNOLINK &copy; 2022
        </p>
      </div>

    </div>
  );
}