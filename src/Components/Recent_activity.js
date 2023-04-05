import React from 'react';
import img1 from './Images/recentActivity_pytm.jpg';
import img2 from './Images/ra_spa.jpg';
import img3 from './Images/ra_twitter.jpg';
import img4 from './Images/ra_user.jpg';
import img5 from './Images/ra_ytb.jpg';
import userImg from './Images/user3.jpg'
function Recent_activity() {
    return (
        <div>
            <section className='pad'>
                <div className='container-fluid'>
                    <div className='col-12 justify px-4'>
                        <h3>Recent Activity</h3>
                    </div>
                    <div className='row my-5 justify-content-between' id='RecentActivity'>
                        <div className='col col-md-4    RecentActivity'>
                            <h4>PAYTM.COM</h4>
                            <div className='imgbox'>
                                <img src={img1} alt="" className='img-fluid' />
                            </div>
                            <div className='row px-3 my-3'>
                                <div className='col-6 d-flex'>
                                    <img src={userImg} alt='user iamge' />
                                    <div>
                                        VIPIN
                                        <p className='text-muted'>Wrote a review</p>
                                    </div>
                                </div>
                                <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></p>
                                <p>
                                    Hello friends I have been using Paytm for almost 3 years this app is one of the best app which is very easy to use to send and receive money this app gives you many benefits like....
                                </p>
                            </div>
                        </div>
                        <div className='col col-md-4  RecentActivity'>
                            <h4>SPASALOON.COM</h4>
                            <div className='imgbox'>
                                <img src={img2} alt="" className='img-fluid' />
                            </div>
                            <div className='row px-3 my-3'>
                                <div className='col-6 d-flex'>
                                    <img src={userImg} alt='user iamge' />
                                    <div>
                                        VIPIN
                                        <p className='text-muted'>Wrote a review</p>
                                    </div>
                                </div>
                                <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></p>
                                <p>
                                    Facebook.com is a social networking website that was launched in 2004 by Mark Zuckerberg, along with his college roommates and fellow students. Initially designed for college...  </p>
                            </div>
                        </div>
                        <div className='col col-md-4 py-0  RecentActivity p-0'>
                            <h5 className='px-3'>How would you rate your experience?</h5>
                            <div className='startbox '>
                                <div className='row px-3 my-3 '>
                                    <div className='col-4'>
                                        <div className='imgbox'>
                                            <img src={img1} alt='user iamge' />
                                        </div>
                                    </div>
                                    <div className='col-8'>
                                        <h5>Paytm.com</h5>
                                        <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i> <span className='text-muted'>102193 Ratings</span> </p>
                                        <span className='mb-3'><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                                            <br />     <br />   <a href='' className='pt-3'>Tap to rate</a></span>
                                    </div>
                                    <hr />
                                    <div className='col-4'>
                                        <div className='imgbox'>
                                            <img src={img4} alt='user iamge' />
                                        </div>
                                    </div>
                                    <div className='col-8'>
                                        <h5>Paytm.com</h5>
                                        <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i> <span className='text-muted'>102193 Ratings</span> </p>
                                        <span className='mb-3'><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                                            <br />     <br />   <a href='' className='pt-3'>Tap to rate</a></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col col-md-4  RecentActivity '>
                            <h4>TWITTER.COM</h4>
                            <div className='imgbox'>
                                <img src={img3} alt="" className='img-fluid' />
                            </div>
                            <div className='row px-3 my-3'>
                                <div className='col-6 d-flex'>
                                    <div className='imgbox'>
                                        <img src={userImg} alt='user iamge' />
                                    </div>
                                    <div>
                                        VIPIN
                                        <p className='text-muted'>Wrote a review</p>
                                    </div>
                                </div>
                                <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></p>
                                <p>
                                    Hello friends I have been using Paytm for almost 3 years this app is one of the best app which is very easy to use to send and receive money this app gives you many benefits like....
                                </p>
                            </div>
                        </div>
                        <div className='col col-md-4  RecentActivity '>
                            <h4>FACEBOOK.COM</h4>
                            <div className='imgbox'>
                                <img src={img4} alt="" className='img-fluid' />
                            </div>
                            <div className='row px-3 my-3'>
                                <div className='col-6 d-flex'>
                                    <img src={userImg} alt='user iamge' />
                                    <div>
                                        VIPIN
                                        <p className='text-muted'>Wrote a review</p>
                                    </div>
                                </div>
                                <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></p>
                                <p>
                                    Hello friends I have been using Paytm for almost 3 years this app is one of the best app which is very easy to use to send and receive money this app gives you many benefits like....
                                </p>
                            </div>
                        </div>
                        <div className='col col-md-4  RecentActivity '>
                            <h4>YOUTUBE.COM</h4>
                            <div className='imgbox'>
                                <img src={img5} alt="" className='img-fluid' />
                            </div>
                            <div className='row px-3 my-3'>
                                <div className='col-6 d-flex'>
                                    <img src={userImg} alt='user iamge' />
                                    <div>
                                        VIPIN
                                        <p className='text-muted'>Wrote a review</p>
                                    </div>
                                </div>
                                <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></p>
                                <p>
                                    Hello friends I have been using Paytm for almost 3 years this app is one of the best app which is very easy to use to send and receive money this app gives you many benefits like....
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Recent_activity
