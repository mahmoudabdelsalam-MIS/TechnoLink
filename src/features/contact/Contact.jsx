import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import mainLogo from '../../assets/logo.png';
import { Phone, MapPin, Mail } from 'lucide-react';
import Button from '../shared/components/button/Button';

const schema = yup.object({
  name: yup.string().trim().required('Name is required').min(2, 'Name must be at least 2 characters'),
  mobileNumber: yup.string().trim().required('Mobile number is required').matches(/^[+]?[0-9\s-]{8,15}$/, 'Enter a valid mobile number'),
  email: yup.string().trim().required('Email is required').email('Enter a valid email address'),
  companyName: yup.string().trim().required('Name is required').min(2, 'Name must be at least 2 characters'),
  message: yup.string().trim().required('Message is required').min(10, 'Message must be at least 10 characters'),
}).required();

const defaultValues = {
  name: '',
  mobileNumber: '',
  email: '',
  companyName: '',
  message: '',
};

export default function Contact() {
  const {register,handleSubmit,reset,formState: { errors, isSubmitting },} = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  // =================== Send to Api ========================
  const onSubmit = async (data) => {
    try {
      // استبدل ده بطلب الـ API الحقيقي بتاعك
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      reset();
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  return (
    <div>
      <div className='w-full h-75 sm:h-100 md:h-125 border-none relative z-0'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13818.12525611658!2d31.3086658936096!3d30.02161146133958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f0b02442ca5%3A0xb08fc5e8d2091240!2z2KrZg9mG2YjZhNmK2YbZgyDZhNmE2KPZhti42YXYqSDYp9mE2YfZhtiv2LPZitipIFRlY2hub2xpbmsgZm9yIEVuZ2luZWVyaW5nIFN5c3RlbXM!5e0!3m2!1sar!2seg!4v1783818987105!5m2!1sar!2seg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className='w-full h-full border-none'
        ></iframe>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-2 -mt-32 sm:-mt-40 bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

            {/* العمود الشمال: اللوجو + الكارت البرتقالي */}
            <div className="md:col-span-5 flex flex-col items-center gap-6">
              <div className="w-32 h-32 mx-auto">
                <img src={mainLogo} alt="Logo" className="w-full h-full object-contain" />
              </div>

              <div className="w-full flex flex-col gap-8 p-6 sm:p-8 bg-linear-to-t from-[#F68D20] to-[#FFBF71] rounded-2xl text-white shadow-md">
                <div className='flex flex-col gap-4'>
                  <h3 className="text-xl font-bold">Contact Information</h3>
                  <p className="text-sm text-orange-100 leading-relaxed">
                    Helping families live intelligently means we're always working to bring our customers.
                  </p>
                </div>

                <div className='flex flex-col gap-8 text-sm'>
                  <div className='flex gap-2 text-sm'>
                    <Phone size={22} />
                    <p>(+2) 01012345678</p>
                  </div>
                  <div className='flex gap-2 text-sm'>
                    <MapPin size={22} />
                    <p>24 Makram Ebeid, Nasr City, Cairo Egypt.</p>
                  </div>
                  <div className='flex gap-2 text-sm'>
                    <Mail size={22} />
                    <p>info@technolink.com</p>
                  </div>
                </div>
                <Button variant="borderd" className="capitalize">Browse our Products</Button>
              </div>
            </div>

            {/* العمود اليمين: فورم Get in touch */}
            <div className="md:col-span-7">
              <h3 className="text-black text-lg font-bold mb-6">Get in touch</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-black">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name..."
                    {...register('name')}
                    className={`w-full bg-gray-100 text-sm px-4 py-3 rounded-lg outline-none placeholder:text-gray-400
                      border ${errors.name ? 'border-red-400' : 'border-transparent'}
                      focus:border-secondary transition-colors`}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500">{errors.name.message}</span>
                  )}
                </div>

                {/* Mobile number + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-black">Mobile number</label>
                    <input
                      type="tel"
                      placeholder="Enter your mobile number..."
                      {...register('mobileNumber')}
                      className={`w-full bg-gray-100 text-sm px-4 py-3 rounded-lg outline-none placeholder:text-gray-400
                        border ${errors.mobileNumber ? 'border-red-400' : 'border-transparent'}
                        focus:border-secondary transition-colors`}
                    />
                    {errors.mobileNumber && (
                      <span className="text-xs text-red-500">{errors.mobileNumber.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-black">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email address..."
                      {...register('email')}
                      className={`w-full bg-gray-100 text-sm px-4 py-3 rounded-lg outline-none placeholder:text-gray-400
                        border ${errors.email ? 'border-red-400' : 'border-transparent'}
                        focus:border-secondary transition-colors`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                {/* Name (الحقل الثاني زي ما هو في الصورة) */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-black">Company Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full Company Name..."
                    {...register('companyName')}
                    className={`w-full bg-gray-100 text-sm px-4 py-3 rounded-lg outline-none placeholder:text-gray-400
                      border ${errors.companyName ? 'border-red-400' : 'border-transparent'}
                      focus:border-secondary transition-colors`}
                  />
                  {errors.companyName && (
                    <span className="text-xs text-red-500">{errors.companyName.message}</span>
                  )}
                </div>

                {/* Your Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-black">Your Message</label>
                  <textarea
                    rows={4}
                    placeholder="Write your message..."
                    {...register('message')}
                    className={`w-full bg-gray-100 text-sm px-4 py-3 rounded-lg outline-none placeholder:text-gray-400 resize-none
                      border ${errors.message ? 'border-red-400' : 'border-transparent'}
                      focus:border-secondary transition-colors`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500">{errors.message.message}</span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 disabled:opacity-60
                    text-white font-semibold text-sm py-3.5 rounded-lg mt-2 transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}