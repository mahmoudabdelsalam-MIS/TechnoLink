import React from 'react';
import { Link } from 'react-router-dom'
import photoFeatures from '../../../../assets/photoFeatures.png';
import Button from '../button/Button';

export default function FeaturedProductsCard({
  image= photoFeatures,
  title = 'SmartAge 2-Pack Fire Alarms Smoke Detector',
  description = 'Firms was methodical in its selection of additive manufacturing technology, want to reinforce and exten...',
}) {
  return (
    
    <div className="group relative w-full max-w-sm rounded-2xl bg-white p-3 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/60">
      
      {/*  الصورة و اللمعه*/}
      <div className="relative overflow-hidden rounded-xl bg-slate-50 h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* لمعة خفيفة بتعدي عند الهوفر */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-out"/>
      </div>

      {/* المحتوى */}
      <div className="pt-5 pb-4 px-2">
        <h3 className="text-lg font-bold text-primary leading-snug mb-2 transition-colors duration-300 group-hover:text-secondary">
          {title}
        </h3>

        <p className="text-sm text-gray leading-relaxed mb-5 line-clamp-3">
          {description}
        </p>

        {/* الزرار */}
        <Link to="/singleProduct">
        <Button variant="third">Know More</Button>
        </Link>
      </div>
    </div>
  );
}