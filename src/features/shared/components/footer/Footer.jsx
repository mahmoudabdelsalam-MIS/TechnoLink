import React from 'react'
import DownloadApp from '../downloadapp/DownloadApp'
import CompaniesSlider from './components/CompaniesSlider'
import MainNav from './components/MainNav'

export default function footer() {
  return (
    <>
      <DownloadApp/>
      <CompaniesSlider/>
      <MainNav/>
    </>
  )
}
