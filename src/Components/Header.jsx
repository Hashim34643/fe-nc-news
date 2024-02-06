import React from 'react'
import Title from './Title'
import Logo from './Logo'
import Account from './Account'
import "../Components-Styles/Header.css"

const Header = () => {
  return (
    <div className='header'>
        <Logo />
        <Title />
        <Account />
    </div>
  )
}

export default Header