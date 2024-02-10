// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const Testimonial = () => {
//   const testimonials = [
//     {
//       id: 1,
//       image: 'img/testimonial-1.jpg',
//       name: 'Client Name',
//       profession: 'Profession',
//       text: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos',
//     },
//     {
//       id: 2,
//       image: 'img/testimonial-2.jpg',
//       name: 'Client Name',
//       profession: 'Profession',
//       text: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos',
//     },
//     {
//       id: 3,
//       image: 'img/testimonial-3.jpg',
//       name: 'Client Name',
//       profession: 'Profession',
//       text: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos',
//     },
//   ];

//   const options = {
//     showArrows: true,
//     showStatus: false,
//     showIndicators: true,
//     infiniteLoop: true,
//     autoPlay: true,
//     interval: 3000,
//     transitionTime: 500,
//     stopOnHover: true,
//     emulateTouch: true,
//     swipeable: true,
//     dynamicHeight: false,
//     selectedItem: 0,
//     showThumbs: false,
//     thumbWidth: 100,
//     customTransition: '',
//     useKeyboardArrows: true,
//     autoFocus: false,
//     centerMode: false,
//     centerSlidePercentage: 80,
//     swipeScrollTolerance: 5,
//     flickThreshold: 0.4,
//     asNavFor: null,
//     useCSS: true,
//     slickGoTo: 0,
//     responsive: [
//       {
//         breakpoint: 1000,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="container-xxl testimonial my-5 py-5 bg-dark">
//       <div className="container">
//         <Carousel options={options}>
//           {testimonials.map((testimonial) => (
//             <div className="testimonial-item position-relative bg-white rounded overflow-hidden" key={testimonial.id}>
//               <p>{testimonial.text}</p>
//               <div className="d-flex align-items-center">
//                 <img className="img-fluid flex-shrink-0 rounded" src={testimonial.image} style={{ width: '45px', height: '45px' }} />
//                 <div className="ps-3">
//                   <h6 className="fw-bold mb-1">{testimonial.name}</h6>
//                   <small>{testimonial.profession}</small>
//                 </div>
//               </div>
//               <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;


import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "../App.css"

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      image: 'img/testimonial-1.jpg',
      name: 'Client Name',
      profession: 'Profession',
      text: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos',
    },
    {
      id: 2,
      image: 'img/testimonial-2.jpg',
      name: 'Client Name',
      profession: 'Profession',
      text: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos',
    },
    {
      id: 3,
      image: 'img/testimonial-3.jpg',
      name: 'Client Name',
      profession: 'Profession',
      text: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos',
    },
  ];

  return (
    <div className="container-xxl testimonial my-5 py-5 bg-primary">
      <div className="container">
        <Carousel autoPlay interval={3000} showArrows infiniteLoop>
          {testimonials.map((testimonial) => (
            <div className="testimonial-item position-relative bg-white rounded overflow-hidden p-3" key={testimonial.id}>
              <p className="fs-5">{testimonial.text}</p>
              <div className="d-flex align-items-center mt-3">
                <img className="img-fluid rounded-circle me-3" src={testimonial.image} style={{ width: '50px', height: '50px' }} alt={testimonial.name} />
                <div>
                  <h6 className="fw-bold mb-0">{testimonial.name}</h6>
                  <small className="text-muted">{testimonial.profession}</small>
                </div>
              </div>
              <i className="fa fa-quote-right fa-2x text-primary position-absolute bottom-0 end-0 mb-3 me-3"></i>
            </div>
          ))}
        </Carousel>
        <div className="carousel-controls">
          <button className="carousel-control-prev">
            <FaChevronLeft />
          </button>
          <button className="carousel-control-next">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>

  );
};

export default Testimonial;



