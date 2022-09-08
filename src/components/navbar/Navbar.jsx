import {React, useState} from 'react'
import '../navbar/navbar.css'
import logo from '../../assets/logo.svg'
import { Fa500Px } from "react-icons/fa";


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
          <p><a href="#">Home</a></p>
          <p><a href="#">What is GPT?</a></p>
          <p><a href="#">Open AI</a></p>
          <p><a href="#">Case Studies</a></p>
          <p><a href="#">Library</a></p>
        </div>
      </div>

      <div className="gpt3-navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>

      <div className="gpt3-navbar-menu">
      {togglebutton
      ? <Fa500Px  className="icon" onClick={()=>setToggleButton(true)} />
      : <Fa500Px  className="icon" onClick={()=>setToggleButton(false)} />
      }
        
      </div>
    </div>

    </>
   
  )
}

export default Navbar