import ItemCount from "../ItemCount/ItemCount"
import React from "react"

export const ItemList = ({ greeting }) => {

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades.`)
    }



    return (
        <div >
            <h1 className="saludo">{greeting}</h1>
            <ItemCount initial={1} stock={7} onAdd={onAdd} />
        </div>
    )
}

export default ItemList