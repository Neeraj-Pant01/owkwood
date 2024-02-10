import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react'
import NavigationBar from './components/NavigationBar'
import CarouselComponent from './components/CarousalComponent';
import About from './components/About';
import OurDeals from './components/OurDeals';
import LuxuryLiving from './components/LuxuryLiving';
import Services from './components/Services';
import Testimonial from './components/Testimonials';
import Team from './components/Team';


const App = () => {
  return (
    <>
    <NavigationBar />
    <CarouselComponent />
    <About />
    <OurDeals />
    <LuxuryLiving />
    <Services />
    <Testimonial />
    <Team />
    </>
  )
}

export default App

