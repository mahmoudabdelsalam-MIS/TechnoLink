import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { X } from 'lucide-react';

// ==================== Validation Schema ====================

// بيانات تجريبية - غيّرها بالدول/المدن الحقيقية عندك أو اجلبها من API
const countryCityMap = {
  Egypt: ['Cairo', 'Alexandria', 'Giza'],
  'Saudi Arabia': ['Riyadh', 'Jeddah', 'Dammam'],
};

const schema = yup.object({
  companyName: yup.string().trim().required('Company name is required').min(2, 'Company name must be at least 2 characters'),
  location: yup.string().trim().required('Location is required'),
  mobileNumber: yup.string().trim().required('Mobile number is required').matches(/^[+]?[0-9\s-]{8,15}$/, 'Enter a valid mobile number'),
  email: yup.string().trim().required('Email is required').email('Enter a valid email address'),
  country: yup.string().required('Please select a country').notOneOf([''], 'Please select a country'),
  city: yup.string().required('Please select a city').notOneOf([''], 'Please select a city'),
}).required();

const defaultValues = {
    companyName: '',
    location: '',
    mobileNumber: '',
    email: '',
    country: '',
    city: '',
}

export default function Quotation({ isOpen, onClose }) {
  const {register,handleSubmit,control,watch,reset,formState: { errors, isSubmitting }} = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  //عشان اعرف بيها لو مختارش الدوله يبق خانه المدينه تتقفل لحد ما يختار الدوله و لما تختار الدوله تبدا هي تعرضلك المدن
  const watchedCountry = watch('country');

//   =================== Send to Api ========================
  const onSubmit = async (data) => {
    try {
      // استبدل ده بطلب الـ API الحقيقي بتاعك
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      reset();
      onClose();
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  // كود إيقاف وتفعيل الاسكرول تلقائياً
//   useEffect(() => {
    
//     if (isOpen) {
//         const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
//       // قفل اسكرول الصفحة عند فتح المودال
//       document.body.style.paddingRight = `${scrollbarWidth}px`;
//       document.body.style.overflow = 'hidden';
//     } else {
//       // إرجاع الاسكرول لطبيعته عند قفل المودال
//       document.body.style.overflow = 'unset';
//       document.body.style.paddingRight = '0px';
//     }

//     // Cleanup Function: تنظيف التأثير عند اختفاء المكون من الشاشة
//     return () => {
//       document.body.style.overflow = 'unset';
//       document.body.style.paddingRight = '0px';
//     };
//   }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full z-50 max-w-md bg-white rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        // عشان لما تدوس جوا المربع الابيض مينقلش الكليك للاب الي هو خارج المربع الابيض فيقفله ف دي بقا بتخلي الكليك متتنقلش للاب فميتقفلش المودال
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-2">
          <h2 className="text-secondary text-xl font-bold">Request for Quotation</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 px-8 pb-8 pt-4">

          {/* Company name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-black">Company name</label>
            <input
              type="text"
              placeholder="Enter name of your company..."
              {...register('companyName')}
              className={`w-full bg-gray-100 text-sm px-4 py-3 rounded-lg outline-none placeholder:text-gray-400
                border ${errors.companyName ? 'border-red-400' : 'border-transparent'}
                focus:border-secondary transition-colors`}
            />
            {errors.companyName && (
              <span className="text-xs text-red-500">{errors.companyName.message}</span>
            )}
          </div>

          {/* Location */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-black">Location</label>
            <input
              type="text"
              placeholder="Enter your location..."
              {...register('location')}
              className={`w-full bg-gray-100 text-sm px-4 py-3 rounded-lg outline-none placeholder:text-gray-400
                border ${errors.location ? 'border-red-400' : 'border-transparent'}
                focus:border-secondary transition-colors`}
            />
            {errors.location && (
              <span className="text-xs text-red-500">{errors.location.message}</span>
            )}
          </div>

          {/* Mobile number */}
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

          {/* Email */}
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

          {/* Country / City */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-black">Country</label>
            <div className="flex gap-3">
              {/* Select Country */}
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className={`w-1/2 bg-gray-100 text-sm px-4 py-3 rounded-lg outline-none text-gray-500
                      border appearance-none cursor-pointer
                      ${errors.country ? 'border-red-400' : 'border-transparent'}
                      focus:border-secondary transition-colors`}
                  >
                    <option value="">Select country</option>
                    {Object.keys(countryCityMap).map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                )}
              />

              {/* Select City */}
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    disabled={!watchedCountry}
                    className={`w-1/2 bg-gray-100 text-sm px-4 py-3 rounded-lg outline-none text-gray-500
                      border appearance-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed
                      ${errors.city ? 'border-red-400' : 'border-transparent'}
                      focus:border-secondary transition-colors`}
                  >
                    <option value="">Select City</option>
                    {(countryCityMap[watchedCountry] || []).map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                )}
              />
            </div>
            {(errors.country || errors.city) && (
              <span className="text-xs text-red-500">
                {errors.country?.message || errors.city?.message}
              </span>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-secondary hover:bg-secondary/90 disabled:opacity-60
              text-white font-semibold text-sm py-3.5 rounded-lg mt-3 transition-colors"
          >
            {isSubmitting ? 'Sending...' : 'Send request'}
          </button>

        </form>
      </div>
    </div>
  );
}