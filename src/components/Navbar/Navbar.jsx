import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../Navbar/logo.png'
import { CartWidget } from '../CartWidget/CartWidget'



export const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <Link to='/'>
        <img className='logo' src={logo} alt="logo" />
        </Link>
        <ul className='navbar-list'>
          <li className='nav-item'>
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/category/Gaming' className='nav-link'>
              Gaming
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/category/Oficina' className='nav-link'>
              Oficina
            </NavLink>
          </li>
        </ul>
         <CartWidget />
      </nav >
     
    </>
  )
}
