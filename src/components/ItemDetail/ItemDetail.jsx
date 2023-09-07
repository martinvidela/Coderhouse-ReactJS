import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({
  id,
  nombre,
  imagen,
  category,
  descripcion,
  precio,
  stock,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      nombre,
      precio,
    };

    addItem(item, quantity);
  };

  return (
    <div>
      <article className="card-detail">
        <picture>
          <img src={imagen} alt={nombre} className="imagen-detail" />
        </picture>
        <section>
          <h2 className="info-detail">{nombre}</h2>
          <p className="info-detail">Category: {category}</p>
          <p className="info-detail">{descripcion}</p>
          <p className="info-detail">${precio}</p>
        </section>
      </article>
      {quantityAdded > 0 ? (
        <Link to="/cart" className="Option">
          Terminar compra
        </Link>
      ) : (
        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
      )}
    </div>
  );
};
