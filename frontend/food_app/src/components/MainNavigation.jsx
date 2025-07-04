import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
export default function MainNavigation() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet>
    </Outlet>
    <Footer></Footer>
    </>
  )
}
