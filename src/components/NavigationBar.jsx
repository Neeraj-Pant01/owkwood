import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <>
    <Navbar style={{height:'2.5rem',background:"#0F172B"}} expand="lg" variant="dark" >
      <Container>
       
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{fontSize:14,fontWeight:600,color:'white'}}>Book Your Stay Now !</Nav.Link>
            <Nav.Link href="/about" style={{fontSize:14,fontWeight:600,color:'white'}}>harshit@gmail.com</Nav.Link>
            <Nav.Link href="/services" style={{fontSize:14,fontWeight:600,color:'white'}}>Call Us +91-9520593613</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <nav  className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container-fluid" >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
    </div>
  </div>
</nav>
    </>
  );
};

export default NavigationBar;