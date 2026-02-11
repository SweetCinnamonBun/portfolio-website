import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'

const RootLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-grow py-20 bg-[#A8DF8E]'>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
