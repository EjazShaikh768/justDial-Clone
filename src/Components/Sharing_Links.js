import React from 'react';
import appstore from './Images/appStore.png';
import playstore from './Images/googlePlay.png';
import fb from './Images/facebook.png'
import ytb from './Images/youtube.png'
import inst from './Images/instagram.png'
import lnkd from './Images/linkedin.png'
import twtr from './Images/twitter.png'


function Sharing_Links() {
    return (
        <div>

            <section className='pad'>

                <div className='container-fluid'>
                    <div className='row '>
                        <div className='col-12 links' >
                            <h5> Popular Categories </h5>
                            <p>
                                <a href=''>Body Massage Centres</a> |           <a href=''>Cinema Halls </a> |
                                <a href=''> Schools </a> |           <a href=''> Beauty Spas</a> |
                                <a href=''> Dermatologists</a> |           <a href=''>Hospitals </a> |
                                <a href=''> Malls</a> |           <a href=''>Gyms </a> |
                                <a href=''>Beauty Parlours </a> |           <a href=''>Estate Agents </a> |
                                <a href=''>Banquet Halls </a> |           <a href=''>ENT Doctors </a> |
                                <a href=''> Book Shops</a> |           <a href=''>Bike On RentS </a> | 
                                <a href=''>exologist Doctors </a> |           <a href=''>Neurologists </a> |
                                <a href=''>Gynaecologist & Obstetrician Doctors </a> |           <a href=''>Tiffin Services </a> |
                                <a href=''> Travel Agents</a> |           <a href=''>Paying Guest  </a> |
                                <a href=''>Accommodations </a> |           <a href=''>General Physician Doctors </a> |
                                <a href=''> Dentists</a> |           <a href=''>Orthopaedic Doctors </a> |
                                <a href=''>Chemists </a> |           <a href=''> Motor Training Schools</a> |  
                                <a href=''> Gastroenterologists</a> |           <a href=''> Car Rental</a> |
                                <a href=''>Salons </a> |           <a href=''> Courier Services</a> |
                                <a href=''>Dance Classes </a> |           <a href=''> Pathology Labs</a> |
                                <a href=''>Taxi Services </a> |           <a href=''> </a> |
                                <a href=''> AC Repair & Services</a> |           <a href=''>Cake Shops </a> |
                                <a href=''> Mobile Phone Dealers</a> |           <a href=''>Pet Shops </a> |
                                <a href=''> Dmart</a> |           <a href=''>Packers And Movers </a> |
                                <a href=''> Psychiatrists</a> |           <a href=''>Dharamshalas </a> |
                                <a href=''>Urologist Doctors </a> |           <a href=''> </a> |
                                <a href=''>Bicycle Dealers </a> |           <a href=''> Bakeries</a> |
                                <a href=''>Coffee Shops </a> |           <a href=''> </a> |
                                <a href=''>Sonography Centres </a> |           <a href=''>Paediatricians </a> |
                                <a href=''> Hostels</a> |           <a href=''> Yoga Classes</a> |
                                <a href=''>Cardiologists </a> |           <a href=''>Electrical Shops </a> |
                                <a href=''> Skin Care </a> |           <a href=''>Clinics </a> |
                                <a href=''> Diagnostic Centres</a> |  <br />          <a href=''> Homeopathic Doctors</a> |
                                <a href=''> Physiotherapists</a> |           <a href=''> Photo Studios</a> |
                                <a href=''>Plumbers </a> |           <a href=''> Electricians</a> |
                                <a href=''>Sports Goods Dealers </a> |           <a href=''>Music Classes </a> |
                                <a href=''> Shoe Dealers</a> |           <a href=''> Hair Stylists</a> |
                                <a href=''>Gift Shops </a> |           <a href=''>Ophthalmologists </a> |
                                <a href=''>Car Repair & Services </a> |           <a href=''>Ayurvedic Doctors </a> |  <br /><a href=''> Eye Clinics </a> |
                                <a href=''>Carpenters </a> |           <a href=''> Jewellery Showrooms</a> |
                                <a href=''>Cooks On HireStationery Shops </a> |           <a href=''> Nephrologists</a> |
                                <a href=''>CaterersInterior Designers </a> |           <a href=''>Rehabilitation Center </a> |
                                <a href=''> Drug De Addiction Center</a> |           <a href=''> </a> |
                                <a href=''> AC Repair</a> |           <a href=''> Grocery Stores</a> |
                                <a href=''> Hotels</a> |    <br />       <a href=''>Cab & Car Rental </a> |
                                <a href=''> Spa & Salon</a> |           <a href=''>Car service </a> |
                                <a href=''> Lab TestOn Demand Service</a> |           <a href=''> JdSocial Blog</a> |    <a href=''> Jd Curated Collection</a> |
                            </p>
                        </div>
                       
                    </div>
                </div>
            </section>
            <hr />
            <section className='pad'>

<div className='container-fluid'>
    <div className='row '>
        
        <div className='col-6 social-icons'>
            <h5 > <span >Follow us on</span>
                <a href=''><img src={fb} alt="facebook icon" /></a>
                <a href=''><img src={ytb} alt="youtube icon" /></a>
                <a href=''><img src={inst} alt="instagram icon" /></a>
                <a href=''><img src={lnkd} alt="linkedin icon" /></a>
                <a href=''><img src={twtr} alt="twitter icon" /></a>

            </h5>
        </div>
        <div className='col-6 text-end store-images d-flex'>
            <img src={playstore} alt="play store png" />
            <img src={appstore} alt="app store png" />
        </div>
    </div>
</div>
</section>
        </div>
    )
}

export default Sharing_Links
