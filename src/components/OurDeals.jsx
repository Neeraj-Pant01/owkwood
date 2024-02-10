import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WOW from 'wowjs';

const OurDeals = () => {
  useEffect(() => {
    // Initialize WOW.js
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  return (
    <div className="container-xxl py-5">
      <Container>
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title text-center text-primary text-uppercase">Our Deals</h6>
          <h1 className="mb-5">Best Price For <span className="text-primary text-uppercase">Your Stay</span></h1>
        </div>
        <Row className="g-4">
          <Col lg={4} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
            <div className="room-item shadow rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src="img/camp.jpg" alt="" />
                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">₹ 1200/Person</small>
              </div>
              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">Dome Tent</h5>
                </div>
                <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                <div className="d-flex justify-content-between">
                  <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">View Detail</a>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
            <div className="room-item shadow rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src="img/camp.jpg" alt="" />
                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">₹ 1200/Person</small>
              </div>
              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">Dome Tent</h5>
                </div>
                <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                <div className="d-flex justify-content-between">
                  <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">View Detail</a>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
            <div className="room-item shadow rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src="img/camp.jpg" alt="" />
                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">₹ 1200/Person</small>
              </div>
              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">Dome Tent</h5>
                </div>
                <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                <div className="d-flex justify-content-between">
                  <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">View Detail</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurDeals;