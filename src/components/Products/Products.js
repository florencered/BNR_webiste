import React from 'react'
import "./products.css" 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Navigation, Pagination,Autoplay } from 'swiper/modules'; 
import Button from 'react-bootstrap/Button';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Products = () => {
  return (
    <div>
        <h3 className='heading' id="products">CHECK OUT OUR PRODUCTS</h3> 
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='glass-card'>
        <h3 className='text-center fs-3 pt-5 pb-3 card-header'>Marketspot</h3>
                    <p className=' text px-3'>Marketspot is a vertically integrated multi vendor marketplace that connects sellers and buyers in a seamless and secure way. You can create your own store within Marketspot and 
                        access a range of services and products that complement and enhance your selling experience.</p> 
                        <a href="/waitlist" style={{textDecoration:"none"}} className='waitlistButton'><Button variant="outline-success button" className='py-3' style={{backgroundColor:"#011369",color:'white',marginLeft:'1.5rem'}}>Join Our Waitlist</Button></a>
        </SwiperSlide>
        <SwiperSlide className='glass-card'>
        <h3 className='text-center fs-3 pt-5 pb-3 card-header'>HubSpot</h3>
                    <p className=' text px-3'>Coming Soon.</p> 

        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Products