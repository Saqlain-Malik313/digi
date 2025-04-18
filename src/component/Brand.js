import React from 'react'

const Brand = () => {
  return (
    <div><section className="container-fluid brandingSec py-5">
    <div className="container d-flex flex-row">
        <div className="row d-flex flex-row justify-content-between align-content-center">
            <div className="col-12 col-lg-6 align-content-center servicesSection">
                <div>
                    <h3 className="services">Services We Offer</h3>
                </div>
                
                <div className="justify-content-between">
                    <h2 className="ourServices lh-base">From bold brand building to powerful product development — we’re your all-in-one digital growth partner.</h2>
                </div>
            </div>
            <div className="col-12 col-lg-3 mt-4">
                <div className="">
                    <div className="card1 shadow-lg rounded-3">
                        <figure className="card1Figure"><i className="fa-solid fa-palette"></i></figure>
                        <h5 className="card-title">UI/UX Design, Web Design</h5>
                        <p className="card-text">We design smart, user-focused websites that convert, engage, and drive results.</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3 mt-4">
                <div className="card2 shadow-lg rounded-3">
                    <figure className="card2Figure"><i className="fa-solid fa-code"></i></figure>
                    <h5 className="card-title">Web/App Development</h5>
                    <p className="card-text">Smart, secure, and scalable — we develop platforms that grow with your brand from day one.</p>
                </div>
            </div>
            <div className="col-12 col-lg-3 mt-4">
                <div className="card3 shadow-lg rounded-3">
                    <figure className="card3Figure"><i className="fa-solid fa-globe"></i></figure>
                    <h5 className="card-title">Search Engine Optimization</h5>
                    <p className="card-text">Smart SEO solutions that help your brand get found, clicked, and trusted on Google.</p>
                </div>
            </div>
            <div className="col-12 col-lg-3 mt-4">
                <div className="card4 shadow-lg rounded-3">
                    <figure className="card4Figure"><i className="fa-solid fa-rectangle-ad"></i></figure>
                    <h5 className="card-title">Google & Facebook Ads </h5>
                    <p className="card-text">Maximize ROI with high-converting ad campaigns tailored for your audience on Google and Facebook. </p>
                </div>
            </div>
            <div className="col-12 col-lg-3 mt-4">
                <div className="card5 shadow-lg rounded-3">
                    <figure className="card5Figure"><i className="fa-solid fa-shield-heart"></i></figure>
                    <h5 className="card-title">Social Media Management</h5>
                    <p className="card-text">From content to engagement, we handle your social media so you can focus on business.</p>
                </div>
            </div>
            <div className="col-12 col-lg-3 mt-4">
                <div className="card6 shadow-lg rounded-3">
                    <figure className="card6Figure"><i className="fa-solid fa-screwdriver-wrench"></i></figure>
                    <h5 className="card-title">Web/App Maintenance</h5>
                    <p className="card-text">From minor fixes to major updates, we handle everything your web or app needs.</p>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
  )
}

export default Brand