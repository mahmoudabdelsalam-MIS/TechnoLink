import React from 'react'
import ProductCard from '../../shared/components/cards/ProductCard'


export default function SimilarProducts() {
  return (
<div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 overflow-x-hidden">
  
  {/* 2️⃣ ضبطنا الـ Padding في الموبايل من pl-8 لـ pl-2 أو شيلناه عشان يمتد صح */}
  <div className="flex flex-col items-start my-4 max-w-lg">
    <h2 className="text-primary text-xl md:text-2xl font-bold">
      Similar <span className="text-secondary">Products</span>
    </h2>
    {/* الخط الأفقـي */}
    <span className="w-18 h-1 bg-secondary rounded-full shrink-0 mt-1" />
  </div>

  {/* 3️⃣ خففنا الـ px-8 في الموبايل وخليناها px-0 أو px-2 لأن الأب محدد الـ Padding خلاص */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-4 gap-6">
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </div>

</div>
  )
}
