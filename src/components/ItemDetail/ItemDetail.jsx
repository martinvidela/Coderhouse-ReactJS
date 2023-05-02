import React from 'react'
import { Link } from 'react-router-dom'

export const ItemDetail = ({id, nombre, imagen, category, descripcion, precio, stock }) => {
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
    
    </article>
        )
}
