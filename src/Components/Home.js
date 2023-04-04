import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import '../App.css';
import Service_section from './Service_section';
function Home() {
  return (
    <div>
      <Header />
      <Service_section />
      <Footer />
    </div>
  )
}

export default Home
