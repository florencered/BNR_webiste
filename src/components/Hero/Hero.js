import React from 'react';
import './hero.css';  
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button'; 
import AOS from "aos"; 
import 'aos/dist/aos.css';
const Hero = () => { 
  useEffect(()=>{
    AOS.init({duration:2000});
},[])
  return (
    <div className='row '> 
    <div className='content col-9' > 
    <h1 className='text' id='heading' data-aos='zoom-in'>Fueling  <span className="gradient"> Indiviuals and Businesses </span>to access the top </h1>
    <p data-aos='zoom-in'>We are team of talented innovators focused on giving individuals and businesses access to the best products and services</p>  
    <a href="/waitlist" style={{textDecoration:"none"}} className='waitlistButton'><Button variant="outline-success" className=' button  py-3 blue-waitlist' style={{backgroundColor:"#011369",color:'white'}}>Join Our Waitlist</Button></a>
      
                
    </div> 
    <div className='hero-images col-3'> 
    <div className="three-img">
                    <div className="image"><img src="images/team2.jpg" alt='hero section'/></div>
                    <div className="image"><img src="images/internet.avif"alt='hero section'/></div>
                    <div className="image"><img src="images/deal.avif"alt='hero section'/></div>
                </div>

                <div className="three-img">
                    <div className="image"><img src="images/single.jpg" alt='hero section'/></div>
                    <div className="image"><img src="images/team.avif" alt='hero section'/></div>

                </div>


    </div>
        
    </div>
  )
}

export default Hero