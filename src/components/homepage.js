import React from 'react';
import { Button } from 'react-bootstrap';
import logoimage from '../img/logo.png'

const Home = () => {
  console.log('Home component rendered');
  return (
    <div >
   
    <div className='home my-5'>
      <img
        src={logoimage}
        alt="bang bang seafood & grill Logo"
        
      />
      <div className='my-5'><Button className='show-menu-button' variant='warning'>VIEW MENU</Button></div>
      <div className='home-text my-3'>
        <strong>3897 N Haverhill Rd, <br/>West Palm Beach, Fl</strong>
      </div>
      <div  className='home-text my-3'>
        <strong>TUESDAY - SATURDAY<br/>11:00 to 10:00</strong>

      </div>
      <div  className='home-text my-3'>
        <strong>SUNDAY - MONDAY<br/>11:00 to 8:00</strong>
       
      </div>
    </div>
    
    </div>
  );
};

export default Home;
