import React from 'react'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import AboutSection from './components/AboutSection'
import BannerSection from './components/BannerSection'
import NewProducts from './components/NewProducts'
import FeaturedProducts from './components/FeaturedProducts'
import AboutSectionTwo from '../about/components/AboutSectionTwo'

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturesSection/>
      <AboutSection/>
      <FeaturedProducts/>
      <BannerSection/>
      <NewProducts/>
    </div>
  )
}
