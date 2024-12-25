import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const RootLayout = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout