import React from 'react'

export const Services = () => {
  return (
    <div>
        <section className="section service border-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className="section-title">
              <span className="h6 text-color">Our Services</span>
              <h2 className="mt-3 content-title ">
                We provide a wide range of creative services{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-5">
              <i className="ti-desktop" />
              <h4 className="mb-3">Web development.</h4>
              <p>
                A digital agency  here to replace your internal team, 
                here to partner
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-5">
              <i className="ti-layers" />
              <h4 className="mb-3">Interface Design.</h4>
              <p>
                A digital agency  here to replace your internal team, 
                here to partner
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-5">
              <i className="ti-bar-chart" />
              <h4 className="mb-3">Business Consulting.</h4>
              <p>
                A digital agency  here to replace your internal team, 
                here to partner
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
