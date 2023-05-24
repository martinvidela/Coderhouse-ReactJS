import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'



export const ItemDetail = ({ id, nombre, imagen, category, descripcion, precio, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio
        }

        addItem(item, quantity)
    }

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
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripcion: {descripcion}
                </p>
                <p className='Info'>
                    Precio: ${precio}
                </p>
            </section>
            <footer className='ItemFooter'></footer>
            {
                quantityAdded > 0 ? (
                    <Link to='' className='Option'>Terminar compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />

                )

            }

        </article>
    )
}
