import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas'; 
import "./waitlist_header.css"

function WaitlistHeader() {
  return (
    <>
      {[ 'lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-5  ">
          <Container fluid>
            <Navbar.Brand href="#" className=''>
            <img src="images/logo.jpg" alt="logo" style={{height:"5rem",width:"5rem",backgroundColor:"red",marginLeft:"1rem"}}/ >
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end" 
            >
              <Offcanvas.Header closeButton> 
              
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src="images/logo.jpg" alt="logo" style={{height:"4rem",width:"4rem",backgroundColor:"red",marginLeft:"1rem"}}/ >
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body> 
           
                  <Nav className="justify-content-center  w-100 fs-5 dark "> 
                  <Nav.Link href="/" className='px-4 my-3 item'>Home</Nav.Link>
                  <Nav.Link href="/about" className='px-4 my-3 item'>About Us</Nav.Link> 
    
                  <Nav.Link href="#footer" className='px-4 my-3 item'>Contact</Nav.Link> 
                  
                </Nav> 
                <a href="/waitlist" style={{textDecoration:"none"}} className='waitlistButton'><Button variant="outline-success blue-waitlist" className=' button py-3  my-3' style={{backgroundColor:"#011369",color:'white'}}> Join Our Waitlist</Button></a>
          
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default WaitlistHeader;