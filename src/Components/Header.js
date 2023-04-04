import React from 'react'

function Header() {
    return (
        <div>
            <section>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">हिन्दी</a>
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