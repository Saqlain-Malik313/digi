import React from 'react'

const Navbar = () => {
    return (
        <div><header className="container-fluid py-2 shadow-lg position-sticky top-0 bg-white">
            <div className="container ">
                <div className="row align-items-center">
                    <figure className="col-lg-6 col-12 text-lg-start text-center mb-0 pb-0">
                        <img src="/Images/Untitled (400 x 250 px).svg" className="w-50" alt="Digital Mongers logo"/>
                    </figure>
                    <div className="col-lg-6">
                        <div className="btn-outer d-flex gap-3 justify-content-end">
                            <button className="btn btn-primary"> <i className="fa-solid fa-file"></i> Get Quote</button>
                            <button className="btn whatsapplogo"> <i className="fa-brands fa-whatsapp"></i> Chat With Us</button>
                        </div>

                    </div>
                </div>


            </div>
        </header> </div>
    )
}

export default Navbar;