import React, { useContext } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../CartItem/Cartitem";

export const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity() === 0) {
    return (
      <div>
        <h1 className="totalquantity">Oops! Your cart is empty.</h1>
        <Link to="/" className="Productos">
          Go back to products
        </Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <div className="container-total">
        <h3>Total: ${parseInt(total())}</h3>
        <Link to="/Checkout">
          <button className="button">GO TO CHECKOUT</button>
        </Link>
      </div>
    </div>
  );
};
