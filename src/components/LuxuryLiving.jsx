// import React, { useState } from 'react';
// import { Modal } from 'react-bootstrap';

// const LuxuryLiving = () => {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const videoSrc = 'https://www.youtube.com/embed/DWRcNpR6Kdc';

//   return (
//     <div className="container-xxl py-5 px-0 wow zoomIn" data-wow-delay="0.1s">
//       <div className="row g-0">
//         <div className="col-md-6 bg-dark d-flex align-items-center">
//           <div className="p-5">
//             <h6 className="section-title text-start text-white text-uppercase mb-3">Luxury Living</h6>
//             <h1 className="text-white mb-4">Discover A Brand Luxurious Hotel</h1>
//             <p className="text-white mb-4">
//               Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
//             </p>
//             <button className="btn btn-primary py-md-3 px-md-5 me-3" onClick={handleShow}>
//               Our Rooms
//             </button>
//             <button className="btn btn-light py-md-3 px-md-5">Book A Room</button>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="video">
//             <button type="button" className="btn-play" onClick={handleShow}>
//               <span></span>
//             </button>
//           </div>
//         </div>
//       </div>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Youtube Video</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="ratio ratio-16x9">
//             <iframe
//               className="embed-responsive-item"
//               src={videoSrc}
//               allowFullScreen
//               allow="autoplay"
//             ></iframe>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default LuxuryLiving;


import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Fade } from 'react-reveal';

const LuxuryLiving = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const videoSrc = 'https://www.youtube.com/embed/DWRcNpR6Kdc';

  return (
    <div className="container-xxl py-5 px-0">
      <Fade>
        <div className="row g-0">
          <div className="col-md-6 bg-dark d-flex align-items-center">
            <div className="p-5">
              <h6 className="section-title text-start text-white text-uppercase mb-3">Luxury Living</h6>
              <h1 className="text-white mb-4">Discover A Brand Luxurious Hotel</h1>
              <p className="text-white mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <button className="btn btn-primary py-md-3 px-md-5 me-3" onClick={handleShow}>
                Our Rooms
              </button>
              <button className="btn btn-light py-md-3 px-md-5">Book A Room</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="video">
              <button type="button" className="btn-play" onClick={handleShow}>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Youtube Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="ratio ratio-16x9">
              {/* <iframe
                className="embed-responsive-item"
                src={videoSrc}
                allowFullScreen
                allow="autoplay"
              ></iframe> */}
              <iframe width="560" height="315" src="https://www.youtube.com/embed/2qf0QTItmnE?si=gY3Rt9dTykehs6v8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </Modal.Body>
        </Modal>
      </Fade>
    </div>
  );
};

export default LuxuryLiving;