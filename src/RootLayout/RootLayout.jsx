import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default RootLayout