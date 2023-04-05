import React from 'react';
import bus from './Images/si_bus.svg';
import car from './Images/si_car.svg';
import dth from './Images/si_dth.svg';
import flight from './Images/si_flight.svg';
import gas from './Images/si_gas.svg';
import hotel from './Images/si_hotel.svg';
import loan from './Images/si_insurance.svg';
import light from './Images/si_light.svg';
import mbl from './Images/si_mobile.svg';
import train from './Images/si_train.svg';
import wtr from './Images/si_water.svg';


function ServicesIcon() {
    return (
        <div>

            <section className='pad'>
                <div className='container-fluid'>
                    <div className='row  px-4'>
                        <div className='col-12'>
                            <div className='row serviceIcon'>
                                <div className='col-3 p-5 msgbox'>
                                    <h3>Bills & Recharge</h3>
                                    <p>Pay your bills & recharge instantly with Justdial</p>
                                    <a href='' >Explore More</a>
                                </div>
                                <div className='col-9 '>
                                    <div className='row justify-content-around px-4 py-5'>
                                        <div className=' iconbox text-center'>
                                           <div className='imgbox'>
                                            <img src={mbl} alt="" ></img>
                                           </div>
                                           <a href=''>Mobile</a>
                                        </div>
                                        <div className=' iconbox text-center'>
                                           <div className='imgbox'>
                                            <img src={light} alt="" ></img>
                                           </div>
                                           <a href=''>Electricity</a>
                                        </div>
                                        <div className=' iconbox text-center'>
                                           <div className='imgbox'>
                                            <img src={dth} alt="" ></img>
                                           </div>
                                           <a href=''>DTH</a>
                                        </div>
                                        <div className=' iconbox text-center'>
                                           <div className='imgbox'>
                                            <img src={wtr} alt="" ></img>
                                           </div>
                                           <a href=''>Water</a>
                                        </div>
                                        <div className=' iconbox text-center'>
                                           <div className='imgbox'>
                                            <img src={gas} alt="" ></img>
                                           </div>
                                           <a href=''>Gas</a>
                                        </div>
                                        <div className=' iconbox text-center'>
                                           <div className='imgbox'>
                                            <img src={loan} alt="" ></img>
                                           </div>
                                           <a href=''>Insurance</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row serviceIcon1'>
                                <div className='col-3 p-5 msgbox'>
                                    <h3>Travel Bookings</h3>
                                    <p>Instant ticket bookings for your best travel experience  </p>
                                    <a href='' >Explore More</a>
                                </div>
                                <div className='col-9 '>
                                    <div className='row justify-content-around px-4 py-5'>
                                        <div className=' iconbox text-center'>
                                           <div className='imgbox'>
                                            <img src={flight} alt="" ></img>
                                           </div>
                                           <a href=''>Flight</a>
                                        <p className='text-danger'>Powered By Easemytrip.com</p>
                                        </div>
                                        <div className=' iconbox text-center'>
                                           <div className='imgbox'>
                                            <img src={bus} alt="" ></img>
                                           </div>
                                           <a href=''>Bus</a>
                                        <p className='text-danger'>Affordable Rides</p>
                                        </div>
                                        <div className=' iconbox text-center'>
                                           <div className='imgbox'>
                                            <img src={train} alt="" ></img>
                                           </div>
                                           <a href=''>Train</a>
                                        <p className='text-danger'>Hassle-free Booking</p>
                                        </div>
                                        <div className=' iconbox text-center'>
                                           <div className='imgbox'>
                                            <img src={hotel} alt="" ></img>
                                           </div>
                                           <a href=''>Hotel</a>
                                        <p className='text-danger'>Budget-friendly Stay</p>
                                        </div>
                                        <div className=' iconbox text-center'>
                                           <div className='imgbox'>
                                            <img src={car} alt="" ></img>
                                           </div>
                                           <a href=''>Car Rental</a>
                                        <p className='text-danger'>Drive Easy Anywhere</p>
                                        </div>
                                        <div className=' iconbox text-center'>
                                           
                                        </div>
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

export default ServicesIcon
