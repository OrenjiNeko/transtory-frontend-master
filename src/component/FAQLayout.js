import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";

const FAQLayout = () => {
  return (
    <div className="FAQ">
        <Navbar />
        <Outlet />
      <Footer />
    </div>
  )
}

export default FAQLayout