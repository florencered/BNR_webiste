import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Info from '../../components/Info/Info'
import Products from '../../components/Products/Products'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/card/Card'

const Home = () => {
  return (
    <div>
        <Header/> 
        <Hero/> 
        <Card/> 
        <Products/> 
        <Footer/>
    </div>
  )
}

export default Home