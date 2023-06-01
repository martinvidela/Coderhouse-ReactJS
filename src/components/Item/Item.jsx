import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ id, nombre, imagen, precio, stock }) => {
    return (
        <article className='CardItem'>
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className="ItemImg" />
            </picture>

            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock: {stock}
                </p>

                <Link to={`/item/${id}`} className='Option'> Ver detalles </Link>

            </section>

        </article>
    )

}

export default Item