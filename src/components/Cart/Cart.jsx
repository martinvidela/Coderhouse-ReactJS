import React, { useContext } from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/Cartitem';

export const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div >
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <div className='container-total'>
            <h3>Total: ${total()}</h3>
            <button onClick={() => clearCart()} className='Button'>Limpiar carrito</button>
            <Link to='/checkout' className='checkout'>CHECKOUT</Link>
            </div>
        </div>
    );
}

