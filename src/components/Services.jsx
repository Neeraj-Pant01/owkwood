import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => {
  const services = [
    {
      icon: 'fa-utensils',
      title: 'Restaurant',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
    },
    {
      icon: 'fa-spa',
      title: 'Spa & Fitness',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
    },
    {
      icon: 'fa-swimmer',
      title: 'Sports & Gaming',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
    },
    {
      icon: 'fa-glass-cheers',
      title: 'Event & Party',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
    },
    {
      icon: 'fa-dumbbell',
      title: 'GYM & Yoga',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
    },
  ];

  return (
    <div className="services">
      <Row>
        {services.map((service, index) => (
          <Col key={index} lg={4} md={6} className="wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
            <Card className="service-item rounded">
              <Card.Body className="service-icon bg-transparent border rounded p-1">
                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                    
                <i className={`fas ${service.icon} fa-2x text-primary`}></i>
                </div>
              </Card.Body>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;