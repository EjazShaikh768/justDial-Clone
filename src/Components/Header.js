import React from 'react';
import logo from './Images/jdlogosvg.svg';

function Header() {
    return (
        <div>
            <section>
                <nav className="navbar navbar-expand-lg bg-body-white py-3  bg-white">
                    <div className="container-fluid">
                        <img src={logo} alt="website logo" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 ">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        English
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">We are Hiring</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Invester  Relations</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Advertise</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Free Listing</a>
                                </li>
                                <li className="nav-item d-flex">
                                    <a className="nav-link" href="#"><i class="fa-solid fa-right-to-bracket"></i> Login</a> <b className='mt-2'>/</b>  <a className="nav-link" href="#">Sign Up</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </section>
        </div>
    )
}

export default Header
