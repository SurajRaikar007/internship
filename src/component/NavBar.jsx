import React from 'react'
import './Navbar.css'

const NavBar = () => {
  return (
    <>
    <nav>
        <h2>PRADA</h2>
        <div id= 'nav-left'>
        <a id='atag' href="#">Home</a>
        <a id='atag' href="#">Products</a>
        <a id='atag' href="#">Contact</a>
        <button>Click here</button> 
        </div>
    </nav>
    </>
  )
}

export default NavBar