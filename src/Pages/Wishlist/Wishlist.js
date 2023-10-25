import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer' 
import "./wishlist.css"; 
import { Helmet } from "react-helmet"; 
import FormScript from '../../components/hooks/FormScript';
import WaitlistHeader from '../../components/WaitlistHeader/WaitlistHeader'; 
  

const Wishlist = () => { 
  // FormScript("https://formfacade.com/include/110196581247884762972/form/1FAIpQLSffjBfyCL9KTZ6FO6btwcoI6-IuaPCY__6NwvZN2sAsJgndxQ/clean.js?div=ff-compose");

  return (
    <div>
        <WaitlistHeader/> 
        <div className='content mx-3'> 
        <h2 >Introducing Marketsite</h2>
              <p style={{color:'black',fontSize:'19px'}}>

The internet is a world of opportunities and with e-commerce on the rise we want you to take advantage of it. It's hard to focus on the right thing, creating products without the stress of promoting, analyzing and managing payments in your business and we  know what if feels like, we needed an easy, integrated and accessible  platform that instead of convincing customers to trust your business is legitimate, you're verified which will establish customer trust and relationships. With this  we are excited to launch BNR MarketSite, a platform accessible for businesses to trade with customers and grow your business hassle free. In the coming months it will be  rolled out for testing, join our waiting list to be in the league of stress free businesses.

              </p> 

        </div>   
        <div> 
        <h3 className='text-center'>Join our waiting list here</h3> 
        <div className='waitlist mt-5'>   
        <div id="ff-compose"></div>
       < Helmet>
        <script
          src="https://formfacade.com/include/110196581247884762972/form/1FAIpQLSffjBfyCL9KTZ6FO6btwcoI6-IuaPCY__6NwvZN2sAsJgndxQ/clean.js?div=ff-compose"
          crossorigin="anonymous"
          async
        ></script>
      </Helmet>

       
 
        </div>  

        </div>


        <Footer/>
    </div>
  )
}

export default Wishlist