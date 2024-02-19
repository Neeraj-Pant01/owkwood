// import { Navbar, Nav, Container } from 'react-bootstrap';
import { MdSearch } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <nav className="navbar bg-body-tertiary p-4">
    <div className=" d-flex w-100 justify-content-around  align-items-center">
      <div className="d-flex align-items-center gap-3">
        <div style={{background:'#d0d0d05e',borderRadius:'50%'}} className="p-2">
          <MdSearch style={{fontSize:'22px'}}/> 
        </div>
          <div className="ms-2 d-flex align-items-center" style={{color:'gray'}}><IoMdCall  className="mr-2"/>+9520593613</div>
      </div>
      <div>Logo</div>
      <div className="d-flex gap-4">
      <a className="btn  text-white py-2 px-4" href="" style={{background:'#FEA116',borderRadius:'25px'}}>View Detail</a>
      <a className="btn  text-white py-2 px-4" href="" style={{background:'#0F172B',borderRadius:'25px'}}>Book Now</a>
      </div>
    </div>
    <div className="d-flex w-100 justify-content-center gap-5 mt-4">
     <Link to={'/'} style={{color:'gray',fontSize:'16px'}}>Home</Link>
     <Link style={{color:'gray',fontSize:'16px'}}>Services</Link>
     <Link to={'/contact'} style={{color:'gray',fontSize:'16px'}}>Contact Us</Link>
     <Link to="/about-us" style={{color:'gray',fontSize:'16px'}}>About Us</Link>
    </div>
  </nav>
  );
};

export default NavigationBar;