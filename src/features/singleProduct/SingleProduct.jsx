import React from 'react'
import ProductDetails from './components/ProductDetails'
import SimilarProducts from './components/SimilarProducts'


export default function SingleProduct() {
  return (
    <div> 
      <ProductDetails/>
      <SimilarProducts/>
    </div>
  )
}
