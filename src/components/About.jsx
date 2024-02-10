import React from 'react';

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h6 className="section-title text-start text-primary text-uppercase">About Us</h6>
            <h1 className="mb-4">Welcome to <span className="text-primary text-uppercase">Oakwood-Resort</span></h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
              diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
              justo magna dolore erat amet
            </p>
            <a
              className="btn border-bottom text-primary text-uppercase mt-2"
              style={{ borderBottom: '2px solid #007bff' }}
              href="/"
            >
              Visit Our Galary
            </a>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.1s"
                  src="img/f1.jpg"
                  style={{ marginTop: '25%' }}
                />
              </div>
              <div className="col-6 text-start">
                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="img/f2.jpg" />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="img/f3.jpg" />
              </div>
              <div className="col-6 text-start">
                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="img/slide2.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;