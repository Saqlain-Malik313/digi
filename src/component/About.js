import React from 'react'

const About = () => {
    return (
        <section className="container-fluid py-5 AboutUsSection">
            <div className="container d-flex flex-row">
                <div className="container-row align-content-center">
                    <div className="column col-lg-6 col-12">
                        <div className="aboutUs">About Us</div>
                        <div>
                            <h3 className="mt-4">The Brains Behind the Magic</h3>

                            <div className="">
                                <p className="mt-4">At Digital Mongers, we’re a team of strategists, designers, and developers turning bold ideas into digital success. Established in 2018, we’ve spent the last 7 years helping brands grow with powerful digital solutions that deliver real impact. From branding and web design to SEO and paid ads — we blend creativity with data to build, grow, and scale businesses in the digital world.
                                </p>
                            </div>
                            <div className="py-3 ">
                                <button className="btn btnEnquire shadow-lg mt-2" data-bs-toggle="modal" data-bs-target="#EnqNowModal">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col aboutUsImg">
                    <img src="/Images/Aboutsusimg.webp" alt="" />
                </div>
            </div>

        </section >
    )
}

export default About