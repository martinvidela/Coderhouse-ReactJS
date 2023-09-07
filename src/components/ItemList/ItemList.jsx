import React from "react";
import Item from "../Item/Item";
import { useLocation } from "react-router-dom";

const ItemList = ({ products }) => {
  const location = useLocation();
  const show = location.pathname === "/";
  return (
    <div>
      {show ? (
        <img
          src="https://morainformatica.com/_next/image?url=https%3A%2F%2Fmedia.morainformatica.com%2Fbfa79461-c496-41ae-a8cd-425178aef6ae.png&w=1920&q=75"
          alt=""
        />
      ) : (
        ""
      )}
      <div className="ListGroup">
        {products.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>

      {show ? (
        <img src="https://morainformatica.com/_next/image?url=https%3A%2F%2Fmedia.morainformatica.com%2F10b61183-e63b-4dc5-a24c-dbc5f1a43400.png&w=1920&q=75"></img>
      ) : (
        ""
      )}
    </div>
  );
};

export default ItemList;
