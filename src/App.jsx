import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react'
import Homepage from './pages/Homepage';
import NavigationBar from './components/NavigationBar';
import Aboutus from './pages/Aboutus/Aboutus';


const App = () => {
  return (
    <>
    <NavigationBar />
    {/* <Homepage /> */}
    <Aboutus />
    </>
  )
}

export default App

