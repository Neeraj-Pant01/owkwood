import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react'
import Homepage from './pages/Homepage';
import NavigationBar from './components/NavigationBar';
import Aboutus from './pages/Aboutus/Aboutus';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Contact from './pages/contact/ContactUs';


const App = () => {
  return (
    <>
    <NavigationBar />
    <Routes >
      <Route path='/' element={<Homepage />}/>
      <Route path='/about-us' element={<Aboutus />}/>
      <Route path='/contact' element={<Contact />} />
    {/* <Homepage /> */}
    {/* <Aboutus /> */}
    </Routes>
    <Footer />
    </>
  )
}

export default App

