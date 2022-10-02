import React from 'react';
import {Routes,Route, Navigate} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // add this to integrating bootstrap into our React Project
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"; // add this to integrating bootstrap into our React Project
import Home from './Screens/Home';
import About from './Screens/About';
import Contact from './Screens/Contact';
import Service from './Screens/Service';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';

const App = ()=> {
  return (
    /* Routes is use to stop looking remaining url if on is match that 
    increase your website hard 
    path="/" means be default screen
    exat to check the exat path is match or not without that our website 
    always remaining at a default page location because of /
   */
    <>
       <NavBar />
        <Routes> 
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/service" element={<Service />}/>
          <Route exact path="*" element={<Navigate to='/' />} />
          
      </Routes>
      <Footer />
    </>
      
    /* <Route exact path="*" element={<Navigate to='/' />}  />
       Path is * 
       Navigate to='/' means if user type wrong URL we will redirect it into 
       the Home page 
    */  
     
     
      
  );
}

export default App;
