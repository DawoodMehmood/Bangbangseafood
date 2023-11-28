import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import logoimage from '../img/logo.png'

const Home = () => {
  const navigate = useNavigate();
  const  HandleViewMenuButton =() => {
    navigate('/menu');
  }

  return (
    <div >
   
    <div className='home my-5'>
      <img
        src={logoimage}
        alt="bang bang seafood & grill Logo"
        
      />
      <div className='my-5'><Button className='show-menu-button' variant='warning' onClick={HandleViewMenuButton}>VIEW MENU</Button></div>
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
