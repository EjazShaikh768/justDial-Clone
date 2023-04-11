import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import '../App.css';
import Service_section from './Service_section';
import Sharing_Links from './Sharing_Links';
import BrandSlide from './BrandSlide';
import Recent_activity from './Recent_activity';
import ServicesIcon from './ServicesIcon';
import GallerySection from './GallerySection';
import Serv_Icons from './Serv_Icons';
import SliderSection from './SliderSection';
import SearchPage from './SearchPage';
  


function Home() {
  return (
    <div>
      <Header />
      <SearchPage />
      <SliderSection />
      <Serv_Icons />
      <GallerySection />
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
