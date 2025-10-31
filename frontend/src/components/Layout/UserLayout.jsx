import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Outlet  } from "react-router-dom";
const UserLayout = () => {
  return (
    <div>
        {/* header content */}
        <Header  />
        {/* main content */}
        <main>
          <Outlet />
        </main>
        
        {/* footer content  */}
        <Footer />
    </div>
  )
}

export default UserLayout
