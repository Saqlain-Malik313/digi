import React from 'react'

const Section = () => {
  return (
    <div><section className="container-fluid py-lg-5 py-sm-4 py-3">
    <div className="container">
        <div className="row justify-content-between py-2 gy-4 align-items-center">
            <div className="col-lg-6">
                <div className="bannerContent">
                    <p>Hello,</p>
                    <h1 className="py-3">We Enhance <br/>Your <span>Brand Clarity</span> </h1>
                    <h6 className="lh-lg py-3">From building pixel-perfect websites to launching scroll-stopping campaigns, we fuse strategy, storytelling, and tech to turn digital chaos into brand clarity.</h6>
                    <div className="bannerBtn">
                        <button className="btn letsTalk shadow-lg mt-2"> <i className="fa-brands fa-whatsapp"></i> Book a Free Consultation</button>
                    </div>
                    
                </div>
            </div>
            <div className="col-lg-5">
                <form action="" className="bannerForm shadow-lg" id="form">
                    <h3>Let’s Build Your Digital Success Together</h3>
                    <p>We’re ready when you are. Drop your info below.</p>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="name" placeholder="Full name" autocomplete="name"/>
                        <label for="floatingText">Your name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" autocomplete="email" required/>
                        <label for="floatingInput">Email address <span className="text-danger">*</span> </label>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">
                            <select name="countryCode" id="code">
                                <option data-countryCode="IN" value="+91" Selected>India (+91)</option>
                                <option data-countryCode="SA" value="+966">Saudi Arabia (+966)</option>
                                <option data-countryCode="OM" value="+968">Oman (+968)</option>
                                <option data-countryCode="BH" value="+973">Bahrain (+973)</option>
                                <option data-countryCode="US" value="+1">USA (+1)</option>
                                <option data-countryCode="QA" value="+974">Qatar (+974)</option>
                                <option data-countryCode="UAE" value="+971">United Arab Emirates(+971)</option>
                            </select>
                        </span>
                        <div className="form-floating">
                            <input type="text" className="form-control"  id="phone" placeholder="Username" required/>
                            <label for="floatingInputGroup1">WhatsApp Number</label>
                        </div>
                    </div> 
                    <div className="form-floating mb-3">
                        <input type="url" className="form-control" placeholder="https://www.yoursite.com" id="web"/>
                        <label for="floatingInput">Website URL <span className="text-danger">*</span></label>
                    </div>
                    <div className="mb-3 contactFormBtn">
                        <button className="btn shadow-lg" type="submit ">Get in Touch</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
</div>
  )
}

export default Section