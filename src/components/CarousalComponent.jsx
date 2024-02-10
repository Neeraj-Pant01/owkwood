import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'animate.css';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="img/main.jpg" alt="Image" />
        <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
          <div className="p-3" style={{ maxWidth: '700px' }}>
            <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
            <h1 className="display-3 text-white mb-4 animated slideInDown">Discover A Brand Luxurious Hotel</h1>
            <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">VIEW ALL SERVICES</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="img/f1.jpg" alt="Image" />
        <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
          <div className="p-3" style={{ maxWidth: '700px' }}>
            <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
            <h1 className="display-3 text-white mb-4 animated slideInDown">Discover A Brand Luxurious Hotel</h1>
            <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">VIEW ALL SERVICES</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;