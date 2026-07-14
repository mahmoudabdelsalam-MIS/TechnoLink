import React, { useState } from 'react';
import Button from '../../shared/components/button/Button';
import heroImg1 from '../../../assets/heroImg1.png';
import heroImg2 from '../../../assets/heroImg2.png';
import Quotation from '../../quotation/quotation';

export default function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <section className="relative min-h-[80vh] flex items-center bg-linear-to-r from-white via-white to-slate-50 py-12 px-6 md:px-16">
      <style>{`
        @keyframes floatUpDown1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes floatUpDown2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes floatUpDown3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes dashRotate {
          to { stroke-dashoffset: -200; }
        }
        @keyframes pulseSoft {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.15); }
        }
        .float-slow { animation: floatUpDown1 6s ease-in-out infinite; }
        .float-med { animation: floatUpDown2 5s ease-in-out infinite; animation-delay: 0.4s; }
        .float-fast { animation: floatUpDown3 4.5s ease-in-out infinite; animation-delay: 0.8s; }
        .dash-animate { animation: dashRotate 12s linear infinite; }
        .dot-pulse { animation: pulseSoft 3.5s ease-in-out infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* النصف الأول: النصوص والأزرار */}
        <div className="flex flex-col items-start gap-6 p-6">
          <p className="text-gray-600 text-xl md:text-2xl font-medium">
            Best Products with
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="text-secondary">TECNO</span>
            <span className="text-primary">LINK</span>
          </h1>

          <p className="text-gray-500 text-base md:text-lg max-w-lg leading-relaxed">
            Helping families live intelligently means were always working to bring our customers the latest technology.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="outline" onClick={() => setIsModalOpen(true)}>Get a quote</Button>
            <Button variant="primary">Browse products</Button>
            <Quotation isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
          </div>
        </div>

        {/* النصف الثاني: الصورة والأشكال الخلفية */}
<div className="relative flex justify-center items-center w-full h-140 max-w-lg mx-auto overflow-hidden">

          {/* 1. توهج خفيف في الخلفية (z-0) */}
          <div className="absolute z-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#F68D20]/15 rounded-full blur-3xl opacity-70 float-slow" />

          {/* 2. الإطار المنقط (z-0) */}
          <svg
            viewBox="0 0 500 400"
            className="absolute z-0 w-[95%] h-[95%] float-med pointer-events-none"
            fill="none"
          >
            <path
              d="M60,150 C40,60 150,20 250,30 C360,40 460,70 470,160
                 C480,250 430,320 340,350 C250,380 120,370 70,300
                 C25,240 80,220 60,150 Z"
              stroke="#F68D20"
              strokeWidth="2"
              strokeDasharray="6 6"
              className="dash-animate"
              opacity="0.6"
            />
          </svg>

          {/* 3. دواير صغيرة متناثرة (z-0 مع ألوان واضحة) - كلها جوه حدود الـ 0% لـ 100% */}
          <span className="absolute z-0 top-[6%] left-[5%] w-3 h-3 rounded-full bg-[#F68D20] dot-pulse" />
          <span className="absolute z-0 top-[4%] left-[45%] w-2.5 h-2.5 rounded-full border-2 border-[#F68D20] float-slow" />
          <span className="absolute z-0 top-[20%] right-[4%] w-3 h-3 rounded-full bg-pink-400 dot-pulse" style={{ animationDelay: '1s' }} />
          <span className="absolute z-0 top-[45%] right-[1%] w-2.5 h-2.5 rounded-full border-2 border-pink-400 float-med" />
          <span className="absolute z-0 bottom-[10%] right-[8%] w-3 h-3 rounded-full bg-[#F68D20] dot-pulse" style={{ animationDelay: '2s' }} />
          <span className="absolute z-0 bottom-[15%] left-[20%] w-2.5 h-2.5 rounded-full border-2 border-amber-400 float-fast" />
          <span className="absolute z-0 top-[55%] left-[2%] w-3 h-3 rounded-full bg-amber-400 dot-pulse" style={{ animationDelay: '0.6s' }} />


          {/* 5. الصور (z-10 و z-20) */}
<img
            src={heroImg1}
            alt="Tecnolink Products"
            className="w-48 sm:w-64 md:w-80 lg:w-80 h-auto absolute right-[35%] top-[35%] sm:top-[28%] md:top-[24%] lg:top-[20%] object-contain z-0 drop-shadow-xl float-med"
          />
          <img
            src={heroImg2}
            alt="Tecnolink Products"
            className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto absolute  left-[35%] top-[25%] sm:top-[16%] md:top-[5%] lg:top-[5%] object-contain  z-1 drop-shadow-xl pointer-events-none float-fast"
          />
        </div>

      </div>
    </section>
  );
}