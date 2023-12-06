import React from 'react'
import Navbar from '../assets/components/dashboard/navbar/Navbar'
import Footer from '../assets/components/dashboard/footer/Footer'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
<>
<Navbar/>
<Outlet/>

<Footer/>
</>  )
}
