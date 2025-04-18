import React from 'react'

const Work = () => {
  return (
    <section className="container-fluid py-5 ourProcessSection">
        <div className="container d-flex flex-row">
            <div className="container-row align-content-center">
                <div className="column col-lg-6 col-12">
                    <div className="ourProcess">Work Process</div>
                        <div>
                            <h3 className="mt-4 lh-base">From concept to launch, our process ensures every step is focused, strategic, and results-driven.</h3>
                            <p className="pb-lg-5">With deep expertise across diverse workflows, we tailor the perfect development process to fit your product’s unique journey.</p>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="container">
                <div className="row ">
                    <div className="text-center col-lg-11 col-12 figContainer">
                        <figure>
                            <img src="/Images/Vector 3.png" alt=""/>
                        </figure>
                    </div>
                
                <div className="container d-flex justify-content-evenly align-items-center arrow mt-3 m-0 p-0">
                    <div className="col-lg-3 col-12 px-4">
                        <div className="d-flex flex-wrap gap-3 align-items-center">
                            <h5 className="gap-lg-4">01</h5>
                            <h6>User Research</h6>
                            <p>User research helps us find out exactly how our target customers feel when interacting with a product </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div className="d-flex flex-wrap gap-3 px-4 align-items-center">
                            <h5 className="gap-lg-4">02</h5>
                            <h6>Design</h6>
                            <p>User research helps us find out exactly how our target customers feel when interacting with a product </p>
                        </div>
                        
                    </div>
                    <div className="col-lg-3 col-12">
                        <div className="d-flex flex-wrap gap-3 px-4 align-items-center">
                            <h5 className="gap-lg-4">03</h5>
                            <h6>Test</h6>
                            <p>User research helps us find out exactly how our target customers feel when interacting with a product </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div className="d-flex flex-wrap gap-3 px-4 align-items-center">
                            <h5 className="gap-lg-4">04</h5>
                            <h6>Implement</h6>
                            <p>User research helps us find out exactly how our target customers feel when interacting with a product </p>
                        </div>
                    </div>
                </div>
                <div className="container ">
                    <div className="row d-flex flex-row">
                        <div className="text-center col-lg-6 figContainer2">
                            <figure>
                                <img src="/Images/inverted arrow.png" alt=""/>
                            </figure>
                        </div>
                        <div className="text-center col-lg-6 figContainer2">
                            <figure>
                                <img src="/Images/inverted arrow.png" alt=""/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work