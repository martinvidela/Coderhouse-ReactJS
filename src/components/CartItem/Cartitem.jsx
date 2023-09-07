import "./CartItem.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartItem = ({ nombre, precio, quantity, id}) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div>
      <section className="contenedorcart">
        <h4>{nombre}</h4>
        <div>Price: ${precio}</div>
        <div>Quantity: {quantity}</div>
        <div>Total: ${parseInt(precio * quantity)}</div>
        <button onClick={() => removeItem(id)} className="boton">
          X
        </button>
      </section>
    </div>
  );
};
