import React from 'react'

function SearchPage() {
    return (
        <div>

            <section className='pad'>
                <div className='container-fluid' id='searchPage'>
                    <div className='row my-5  px-4'>
                        <div className='col-6'>
                            <div className='row justify-content-around'>
                                <div className='col-12'>
                                    <h3 className='d-flex' >Search across  <span className='d-flex'> <b>‘2.8 Crore+’ </b> <aside>Products & Services</aside>  </span>   <span className='d-flex'> <b>‘3.4 Crore+‘</b> <aside>Businesses </aside> </span></h3>
                                </div>
                                <div className='col-4 border pseudo-search1'>
                                    <div className=" ">
                                        <input type="text"  placeholder='Mumbai' autofocus required />
                                    </div>
                                </div>
                                <div className='col-7 border pseudo-search'>
                                        <input type="text" placeholder='Mumbai' autofocus required />

                                        <i class="fa-solid fa-2x  fa-microphone"></i>
                                            <button className="fa fa-search   btn ms-3 btn-danger" type="submit"></button>
                                    </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SearchPage
