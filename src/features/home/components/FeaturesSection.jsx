import React from 'react'
import img1 from '../../../assets/img1.png';
import img2 from '../../../assets/img2.png';
import img3 from '../../../assets/img3.png';
import img4 from '../../../assets/img4.png';

import Button from '../../shared/components/button/Button';

const features = [
  {
    id: 1,
    title: 'Access Control Product',
    description: 'Take the guesswork out of sintering printed parts. Live Sinter™ tackles the decades-old problem',
    image: img1,
  },
  {
    id: 2,
    title: 'Access Control Product',
    description: 'Take the guesswork out of sintering printed parts. Live Sinter™ tackles the decades-old problem',
    image: img2,
  },
  {
    id: 3,
    title: 'Access Control Product',
    description: 'Take the guesswork out of sintering printed parts. Live Sinter™ tackles the decades-old problem',
    image: img3,
  },
  {
    id: 4,
    title: 'Access Control Product',
    description: 'Take the guesswork out of sintering printed parts. Live Sinter™ tackles the decades-old problem',
    image: img4,
  },
];

function FeatureCard({ title, description, image }) {
  return (
    <div className="group relative h-70 md:h-80 overflow-hidden cursor-pointer">
      {/* الصورة */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* الطبقة الغامقة - بتزيد شوية عند الهوفر */}
      <div className="absolute inset-0 bg-black/50 transition-colors duration-500 ease-out group-hover:bg-black/60" />

      {/* المحتوى */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-white text-xl md:text-2xl font-bold mb-2 transition-transform duration-500 ease-out group-hover:-translate-y-1">
          {title}
        </h3>

        {/* الوصف - مخفي ومتحرك من تحت، يظهر بسلاسة عند الهوفر */}
        <p
          className="text-gray-200 text-sm leading-relaxed mb-4 max-h-0 opacity-0 -translate-y-2
            transition-all duration-500 ease-out delay-75
            group-hover:max-h-24 group-hover:opacity-100 group-hover:translate-y-0"
        >
          {description}
        </p>

        {/* الزرار - يظهر بعد الوصف بشوية (Stagger) */}
        <Button 
        variant="borderd"
        className="self-start opacity-0 translate-y-3 transition-all duration-500 ease-out delay-150">Shop Now</Button>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <div className="max-w-8xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
  );
}