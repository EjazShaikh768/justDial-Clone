import React from 'react';
import slider1 from './Images/sliderImg1.webp'
import slider2 from './Images/sliderImg2.webp';
import slider3 from './Images/sliderImg3.webp';
import slider4 from './Images/sliderImg4.webp';
import slider5 from './Images/SliderImg00.webp';
import slider6 from './Images/sliderImg01.webp';
import slider7 from './Images/sliderImg02.webp';
import slider8 from './Images/sliderImg03.webp';
import slider9 from './Images/sliderImg04.webp';
import slider10 from './Images/sliderImg05.webp';
import slider11 from './Images/sliderImg06.webp';
import Carousel from 'react-bootstrap/Carousel';
function SliderSection() {
    return (
        <div>
            <section className='pad'>
                <div className='container-fluid'>
                    <div className='row  px-4'>
                        <div className='col-5 Carousel'>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={slider5}
                                        alt="First slide"
                                    />
                                    
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={slider6}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={slider7}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={slider8}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={slider9}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={slider10}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={slider11}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className='col-7'>
                            <div className='row'>
                                <div className='col-3 firstCard '>
                                    <img src={slider1} alt='card ' className='img-fluid' />
                                    <div className='topText'>
                                        <h4>B2B</h4>
                                        <span>Quick <br/> Quotes</span>  
                                    </div>
                                  
                                </div>
                                <div className='col-3 secondCard '>
                                    <img src={slider2} alt='card ' className='img-fluid' />
                                    <div className='topText'>
                                        <h4>XPERTS</h4>
                                        <span>Quick <br/> Quotes</span>
                                    </div>
                                </div>
                                <div className='col-3 thirdCard '>
                                    <img src={slider3} alt='card ' className='img-fluid' />
                                    <div className='topText'>
                                        <h4>REAL STATE</h4>
                                        <span>Quick <br/> Quotes</span>
                                    </div>
                                </div>
                                <div className='col-3 fourthCard '>
                                    <img src={slider4} alt='card ' className='img-fluid' />
                                    <div className='topText'>
                                        <h4>DOCTORS</h4>
                                        <span>Quick <br/> Quotes</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SliderSection
