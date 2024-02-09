import React from 'react'
import { Link } from "react-router-dom";
import "../Components-Styles/Logo.css";
import imageSrc from '../Assets/kisspng-computer-icons-clip-art-5b12f0d2509421.5770652715279679543301.png';

const Logo = () => {
  return (
    <div className='logo'>
      <Link to="/">
      <img src={imageSrc} alt="Northcoders Logo" />
      </Link>
    </div>
  )
}

export default Logo