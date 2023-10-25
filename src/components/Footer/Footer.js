import React from 'react'
import Button from 'react-bootstrap/Button'; 
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon,MDBBtn } from 'mdb-react-ui-kit';
const Footer = () => {
  return (
    <div id="footer"> 
        <MDBFooter  className=' text-lg-start  text-muted mt-5 pt-5 ' style={{"backgroundColor":"#011369",fontSize:"1.1rem"}}>

      <section className='' color='light' style={{"color":"white"}}>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-3'>
              <h5 className=' fw-bold mb-4'>
                What are you waiting for?
              </h5>
              <p>
              Our mission at BuildNRun is to empower businesses in Africa by making e-commerce accessible and
                    affordable for all. We believe that every business that buys and sells should have a place on the
                    internet, and we're dedicated to making that a reality through our innovative solutions and expert
                    services
                    Contact us and let us build you a store on the internet!
              </p> 
              <a href="/waitlist" style={{textDecoration:"none"}} className='waitlistButton'><MDBBtn className='mt-3 mb-5 px-5 py-3' style={{"backgroundColor":"white","color":"#011369",fontSize:"1.1rem"}}>Join our Waitlist</MDBBtn></a>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 text-center'> 
            <h6 className='text-uppercase fw-bold mb-4 '>Connect with us</h6> 
            
            <a href='' className='me-4 ml-2 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
            
            
            <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
            

            
            <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a> 
          <p className='mt-3'>Terms of Service | Privacy Policy </p>
            

            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/' className='text-reset' style={{textDecoration:"none"}}>
                  Home
                </a>
              </p>
              <p>
                <a href='#products' className='text-reset' style={{textDecoration:"none"}}>
                  Product
                </a>
              </p>
              <p>
                <a href='/about' className='text-reset' style={{textDecoration:"none"}}>
                  About Us
                </a>
              </p>
              <p>
                <a href='/waitlist' className='text-reset' style={{textDecoration:"none"}}>
                  Join our Waitlist
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Lagos,Nigeria
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                contact@buildnrun.org
              </p>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 fw-bold' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)',color:"white" }}>
      © Build N Run 2023.
        
        All rights reserved.
        
      </div>
    </MDBFooter>
        
    </div>
  )
}

export default Footer