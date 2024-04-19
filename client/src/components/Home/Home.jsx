import React from 'react'
import NavBar from '../NavBar/NavBar'
import DilogBox from './DilogBox'
import DemoCarousel from './Carousel'
import ProductHomePage from './ProductHomePage'

const Home = () => {
  return (
    <div>
        <NavBar />
        <DilogBox />
        <DemoCarousel />
        <ProductHomePage />
    </div>
  )
}

export default Home