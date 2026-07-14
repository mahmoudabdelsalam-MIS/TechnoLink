import React from 'react'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import MainNav from './components/MainNav'

export default function Navbar() {
  return (
    <>
      <SectionOne/>
      <div className='sticky top-0 z-5'>
      <SectionTwo />
      <MainNav/>
      </div>
    </>
  )
}
