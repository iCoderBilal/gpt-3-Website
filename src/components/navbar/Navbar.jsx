import {React, useState} from 'react';
import '../navbar/navbar.css';
import logo from '../../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const Menu = ()=>{
  return(
  <>
    <p><a href="#">Home</a></p>
          <p><a href="#">What is GPT?</a></p>
          <p><a href="#">Open AI</a></p>
          <p><a href="#">Case Studies</a></p>
          <p><a href="#">Library</a></p>
  </>
  )
}

const Navbar = () => {
  const [togglebutton, setToggleButton] = useState(false);
  return (
    <>
    <div className="gpt3-navbar">
      <div className="gpt3-navbar-links">
        <div className="gpt3-navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3-navbar-links-container">
         <Menu/>
        </div>
      </div>

      <div className="gpt3-navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>

      <div className="gpt3-navbar-menu" >
    {togglebutton
      ? <FontAwesomeIcon icon={faXmark} className="icon" size="2x" onClick={()=>setToggleButton(false)} />
      : <FontAwesomeIcon icon={faBars} size="2x" className="icon"   onClick={()=>setToggleButton(true)} />
      } 

      {togglebutton && (
        <div className="gpt3-navbar-menu-container scale-up">
         <div className="gpt3-navbar-menu-container-links">
         <Menu/>
         <div className="gpt3-navbar-menu-container-links-sign">
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>
          </div> 
        </div>
      )}
      </div>
    </div>
   

    </>
   
  )
}

export default Navbar