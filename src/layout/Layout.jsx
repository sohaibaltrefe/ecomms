import React from 'react'
import Navbar from '../assets/components/wep/navbar/Navbar'
import Footer from '../assets/components/wep/footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>  )
}
