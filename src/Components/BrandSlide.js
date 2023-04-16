import React from 'react'
import slide from './Images/brandSlide.png';
import slide1 from './Images/brandSlide1.png';
import slide2 from './Images/brandSlide2.png';
import slide3 from './Images/brandSlide3.png';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation  } from "swiper";


function BrandSlide() {
  return (
    <div>
      <section className='pad'>
        <div className='container-fluid'>
          <div className='col-12 justify px-4'>
            <h5>Popular Brands </h5>
          </div>
          <div className='row my-5' id='brandslide'>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              // pagination={{
              //   clickable: true,
              // }}
              navigation={true}
              modules={[ Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className='col-4 brandslide'>
                {/* <a href='' className='btn px-2 py-0'> <b> <i class="fa-duotone fa-2x fa-less-than"></i></b> </a> */}
                <img src={slide} alt="" className='img-fluid' />
              </SwiperSlide>
              <SwiperSlide className='col-4 brandslide'>
                <img src={slide1} alt="" className='img-fluid' />
              </SwiperSlide>
              <SwiperSlide className='col-4 brandslide '>
                {/* <a href='' className='btn1 btn  px-2 py-0'> <b> <i class="fa-duotone fa-2x fa-greater-than"></i>   </b> </a> */}
                <img src={slide} alt="" className='img-fluid' />
              </SwiperSlide>
              <SwiperSlide className='col-4 brandslide'>
                <img src={slide3} alt="" className='img-fluid' />
              </SwiperSlide>
              <SwiperSlide className='col-4 brandslide'>
                <img src={slide} alt="" className='img-fluid' />
              </SwiperSlide>
              <SwiperSlide className='col-4 brandslide'>
                <img src={slide2} alt="" className='img-fluid' />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>


      {/* <>Slide 1</>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide> */}

    </div>
  )
}

export default BrandSlide
