import { useEffect, useState } from "react"
import { getProducts } from "../../assets/asyncMock"
import ItemList from "../ItemList/ItemList"
import '../Item/Item.css'


export const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts()
        .then(response =>{
            setProducts(response)
        })

        .catch(error=>{
            console.log(error)
        })
    },[]

    )

    return (
        <div className>

            <h1>HOLA</h1>
        <ItemList products={products}/>

        </div>
    )
}

