import React from 'react'
import { ScanEye, Target, Gem } from 'lucide-react';

export default function AboutSectionTwo() {
  const items = [
    {
      icon: ScanEye,
      title: 'Our Vision',
      text: 'Helping families live intelligently means we’re always working to bring our customers the latest technology.  Helping families live intelligently means we’re always working to bring our customers the latest technology. ',
    },
    {
      icon: Target,
      title: 'Our Goal',
      text: 'Helping families live intelligently means we’re always working to bring our customers the latest technology.  Helping families live intelligently means we’re always working to bring our customers the latest technology. ',
    },
    {
      icon: Gem,
      title: 'Our value',
      text: 'Helping families live intelligently means we’re always working to bring our customers the latest technology.  Helping families live intelligently means we’re always working to bring our customers the latest technology. ',
    },
  ];

  return (
    <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12 px-6 md:px-16'>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className='flex flex-col gap-4 text-secondary'>
            <Icon size={44} />
            <h3 className='font-semibold text-xl'>{item.title}</h3>
            <p className='text-md font-semibold text-gray-500'>{item.text}</p>
          </div>
        );
      })}
    </div>
  )
}