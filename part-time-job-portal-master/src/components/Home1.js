import React from 'react';
import Slideshow from './Slideshow'; // Correcting the import path
// import Jobs from './Jobs'; // Assuming you have a Job component defined
import './Home2.css';
import Footer from "./Footer.js";

const Home1 = () => {
  return (
    <div>
      <Slideshow />
      <Footer/>
    </div>
  );
};

export default Home1;
