import React from 'react';
import gb_img1 from './Images/GB_img1.webp';
import gb_img2 from './Images/GB_img2.webp';
import gb_img3 from './Images/GB_img3.webp';
import gb_img4 from './Images/BG_img4.webp';
import gb_img5 from './Images/BG_img5.webp';
import gb_img6 from './Images/BG_img6.webp';
import gb_img7 from './Images/BG_img7.webp';
import gb_img8 from './Images/BG_img8.webp';
import gb_img9 from './Images/BG_img9.webp';
import gb_img10 from './Images/BG_img10.webp';
import gb_img11 from './Images/BG_img11.webp';
import gb_img12 from './Images/BG_img12.webp';

function GallerySection() {
    return (
        <div>
            <section className='pad my-5'>
                <div className='container-fluid'>
                    <div className='row justify-content-between px-4 my-5'>
                        <div className='col galleryBox  '>
                            <h5 className='px-4'>Wedding Requisite</h5>
                            <div className='row text-center px-4 mb-3'>
                                <div className='col-4 '>
                                    <img src={gb_img1} alt='' className='img-fluid mb-3' ></img>
                                    <span>Banquet Halls</span>
                                </div>
                                <div className='col-4 '>
                                    <img src={gb_img2} alt='' className='img-fluid mb-3' ></img>
                                    <span>Bridal Requisite</span>
                                </div>
                                <div className='col-4 '>
                                    <img src={gb_img3} alt='' className='img-fluid mb-3' ></img>
                                    <span className=''>Caterers</span>
                                </div>
                            </div>
                        </div>
                        <div className='col galleryBox ms-5'>
                        <h5 className='px-4'>Beauty & Spa</h5>
                            <div className='row text-center px-4 mb-3'>
                                <div className='col-4 '>
                                    <img src={gb_img4} alt='' className='img-fluid mb-3' ></img>
                                    <span>Banquet Halls</span>
                                </div>
                                <div className='col-4 '>
                                    <img src={gb_img5} alt='' className='img-fluid mb-3' ></img>
                                    <span>Bridal Requisite</span>
                                </div>
                                <div className='col-4 '>
                                    <img src={gb_img6} alt='' className='img-fluid mb-3' ></img>
                                    <span className=''>Caterers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-between px-4 mt-4 '>
                        <div className='col galleryBox  '>
                            <h5 className='px-4'>Repairs & Services</h5>
                            <div className='row text-center px-4 mb-3'>
                                <div className='col-4 '>
                                    <img src={gb_img7} alt='' className='img-fluid mb-3' ></img>
                                    <span>Banquet Halls</span>
                                </div>
                                <div className='col-4 '>
                                    <img src={gb_img8} alt='' className='img-fluid mb-3' ></img>
                                    <span>Bridal Requisite</span>
                                </div>
                                <div className='col-4 '>
                                    <img src={gb_img9} alt='' className='img-fluid mb-3' ></img>
                                    <span className=''>Caterers</span>
                                </div>
                            </div>
                        </div>
                        <div className='col galleryBox ms-5'>
                        <h5 className='px-4'>Daily Needs</h5>
                            <div className='row text-center px-4 mb-3'>
                                <div className='col-4 '>
                                    <img src={gb_img10} alt='' className='img-fluid mb-3' ></img>
                                    <span>Banquet Halls</span>
                                </div>
                                <div className='col-4 '>
                                    <img src={gb_img11} alt='' className='img-fluid mb-3' ></img>
                                    <span>Bridal Requisite</span>
                                </div>
                                <div className='col-4 '>
                                    <img src={gb_img12} alt='' className='img-fluid mb-3' ></img>
                                    <span className=''>Caterers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default GallerySection
