import React from "react";
import logo1 from '../../../../../assets/logo1.png';
import logo2 from '../../../../../assets/logo2.png';
import logo3 from '../../../../../assets/logo3.png';
import logo4 from '../../../../../assets/logo4.png';
import logo5 from '../../../../../assets/logo5.png';
import logo6 from '../../../../../assets/logo6.png';

export default function TrustedCompanies() {
  const companyLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

  const duplicatedLogos = [...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos];

  return (
    <section className="py-6 bg-white border-b border-t border-gray-50">
      <style>{`
        .marquee-inner {
            animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
            0% {
                transform: translateX(0%);
            }
            100% {
                transform: translateX(-50%);
            }
        }
      `}</style>

      <div className="overflow-hidden w-full relative max-w-7xl mx-auto select-none">
        {/* Left Gradient Overlay */}
        <div className="absolute left-0 top-0 h-full w-24 md:w-32  pointer-events-none bg-linear-to-r from-white to-transparent" />
        
        <div
          className="marquee-inner flex will-change-transform w-fit"
          style={{ animationDuration: "35s" }}
        >
          <div className="flex items-center">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="w-40 md:w-48 flex items-center justify-center shrink-0 mx-4"
              >
                <img
                  src={logo}
                  alt={`Company Partner ${index}`}
                  className="max-h-12 w-auto object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Gradient Overlay */}
        <div className="absolute right-0 top-0 h-full w-24 md:w-32  pointer-events-none bg-linear-to-l from-white to-transparent" />
      </div>
    </section>
  );
}