import React from 'react'
import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom';
import Navbar from '../shared/components/navbar/Navbar'
import Footer from '../shared/components/footer/Footer'
import BreadCrumbs from '../shared/components/breadCrumbs/BreadCrumbs';


export default function layout() {
  const location = useLocation()
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Navbar />
      {!isHomePage && <BreadCrumbs/>}
      <Outlet/>
      {/* بيخلي الاسكرول يرجع لطبيعته لو دخلت صفحه جديده */}
      <ScrollRestoration/>
      <Footer />
    </>
  )
}
