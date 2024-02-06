import React from 'react'
import { Link } from "react-router-dom";
import "../Components-Styles/Logo.css";

const Logo = () => {
  return (
    <div className='logo'>
      <Link to="/Home">
      <img src="https://banner2.cleanpng.com/20180602/gzr/kisspng-computer-icons-clip-art-5b12f0d2203726.491813631527967954132.jpg" alt="Northcoders Logo" />
      </Link>
    </div>
  )
}

export default Logo