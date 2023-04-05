import React from 'react'
import slide from './Images/brandSlide.png';
import slide1 from './Images/brandSlide1.png';
import slide2 from './Images/brandSlide2.png';
import slide3 from './Images/brandSlide3.png';

function BrandSlide() {
  return (
    <div>
      <section className='pad'>
        <div className='container-fluid'>
          <div className='col-12 justify px-4'>
            <h5>Popular Brands </h5>
          </div>
          <div className='row my-5' id='brandslide'>

            <div className='col-4 brandslide'>
              <a href='' className='btn px-2 py-0'> <b> <i class="fa-duotone fa-2x fa-less-than"></i></b> </a>
              <img src={slide} alt="" className='img-fluid' />
            </div>
            <div className='col-4 brandslide'>
              <img src={slide1} alt="" className='img-fluid' />
            </div>
            <div className='col-4 brandslide '>
              <a href='' className='btn1 btn  px-2 py-0'> <b> <i class="fa-duotone fa-2x fa-greater-than"></i>   </b> </a>
              <img src={slide} alt="" className='img-fluid' />
            </div>
            {/* <div  className='col-4 brandslide'>
                        <img src={slide3} alt=""  className='img-fluid'/>
                       </div>
                       <div  className='col-4 brandslide'>
                        <img src={slide} alt=""  className='img-fluid'/>
                       </div>
                       <div  className='col-4 brandslide'>
                        <img src={slide2} alt="" className='img-fluid' />
                       </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BrandSlide
