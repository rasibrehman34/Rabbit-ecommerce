import React from 'react'
import TopBar from '../Layout/TopBar'
import Navbar from './Navbar'


const Header = () => {
  return (
    <div className='border-b border-gray-200' >

      {/* topbar */}
      <TopBar />
      {/* navbar */}
      <Navbar />
      {/* cart drawer */}

      
    </div>
  )
}

export default Header
