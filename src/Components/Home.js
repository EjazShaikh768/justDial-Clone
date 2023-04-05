import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import '../App.css';
import Service_section from './Service_section';
import Sharing_Links from './Sharing_Links';
import BrandSlide from './BrandSlide';
import Recent_activity from './Recent_activity';
import ServicesIcon from './ServicesIcon';
  


function Home() {
  return (
    <div>
      <Header />
      <ServicesIcon />
      <Recent_activity />
      <BrandSlide />
      <hr />
      <Sharing_Links />
      <hr />
      <Service_section />
      <hr />
      <Footer />
    </div>
  )
}

export default Home
