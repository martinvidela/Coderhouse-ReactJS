import React from 'react'
import Item from '../Item/Item'



const ItemList = ({ products }) => {
    console.log('esto es productos', products)
    return (
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}


        </div>
    )
}

export default ItemList