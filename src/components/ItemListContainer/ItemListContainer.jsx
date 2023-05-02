import { useEffect, useState } from "react"
import { getProducts } from "../../assets/asyncMock"
import ItemList from "../ItemList/ItemList"
import '../Item/Item.css'
import { useParams } from "react-router-dom"


export const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

   
   
   useEffect(()=>{
    const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc(categoryId)
    .then(response=>{
        setProducts(response)
    })
    .catch(error=>{
        console.log(error)
    })
   }
   )

    return (
        <div >

        <ItemList products={products}/>

        </div>
    )
}

