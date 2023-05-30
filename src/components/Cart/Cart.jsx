import React, { useContext } from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/Cartitem';
import { Checkout } from '../Checkout/Checkout';


export const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity() === 0) {
        return (
            <div>
                <h1 className='totalquantity'>No hay items en el carrito</h1>
                <Link to='/' className='Productos'>Productos</Link>
            </div>
        )
    }

    return (
        <div >
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <div className='container-total'>
                <h3>Total: ${parseInt(total())}</h3>
                <button onClick={() => clearCart()} className='Button'>Limpiar carrito</button>
                <Link to='/Checkout' className='checkout'>CHECKOUT</Link>
            </div>
        </div>
    );
}

