import React from 'react'
import cart from '../CartWidget/cart.svg'


export const CartWidget = () => {
  return (
    <div style={{display:'flex'}}>
      <img src={cart} alt="cart" />
      <p>0</p>
    </div>
  )
}
