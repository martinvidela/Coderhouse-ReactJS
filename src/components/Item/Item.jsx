import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, nombre, imagen, precio, stock }) => {
  return (
    <div className="CardItem">
      <Link to={`/item/${id}`} style={{textDecoration:'none'}}>
        <picture>
          <img src={imagen} alt={nombre} className="ItemImg" />
        </picture>
        <header className="Header">
          <h2 className="ItemHeader">{nombre}</h2>
        </header>

        <section className="sectionCard">
          <p className="Info">${precio}</p>
        </section>
      </Link>
    </div>
  );
};

export default Item;
