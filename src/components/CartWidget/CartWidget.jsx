import React, { useContext } from 'react'
import cart from '../CartWidget/cart.svg'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

 const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  return (
  <Link to='/cart' className='CartWidget' style={{display: totalQuantity> 0 ? 'block' : 'none'}}>
    <img src={cart} alt="cart-widget"/>
     { totalQuantity }
     </Link >
  )
}

export default CartWidget