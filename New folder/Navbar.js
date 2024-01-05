import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMenu} from "react-icons/ai";


export const Navbar = () => {
  const [mobileView,setMobview] = useState(false);
  return (
    <div className="App">
    <nav className='navbar'>
      <h2 className='logo'>Online Store</h2> 
      <ul className={mobileView ? 'navmobile' : 'navlink'} onClick={()=>setMobview(false)}>
        <li>
          <Link className='home' to="/">Home</Link>
        </li>
        <li>
          <Link className='home' to="/about">About</Link>
        </li>
        <li>
          <Link className='home' to="/product">Product</Link>
        </li>
        <li>
          <Link className='home' to="/contact">Contact</Link>
        </li>
      </ul>

      <button className='menubar-icon' onClick={()=>
        setMobview(!mobileView)}><AiOutlineMenu/> 
      </button>
    </nav>
    </div>
 )

}

export default Navbar
