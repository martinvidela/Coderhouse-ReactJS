import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import cart from '../Navbar/cart.svg'
import logo from '../Navbar/logo.png'



export const Navbar = () => {
  return (
    <nav className='navbar'>
      <img className='logo' src={logo} alt="logo" />
      <ul className='navbar-list'>
        <li className='nav-item'>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/category/:id' className='nav-link'>
            Gaming
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/item/:id' className='nav-link'>
            Oficina
          </NavLink>
        </li>
      </ul>
    <img src={cart} alt="cart" />
    </nav >
  )
}
