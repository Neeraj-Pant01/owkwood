import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react'
import Homepage from './pages/Homepage';
import NavigationBar from './components/NavigationBar';
import Aboutus from './pages/Aboutus/Aboutus';
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <>
    <NavigationBar />
    <Routes >
      <Route path='/' element={<Homepage />}/>
      <Route path='/about-us' element={<Aboutus />}/>
    {/* <Homepage /> */}
    {/* <Aboutus /> */}
    </Routes>
    </>
  )
}

export default App

