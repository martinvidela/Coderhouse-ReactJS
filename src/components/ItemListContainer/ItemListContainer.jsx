import { useEffect, useState } from "react"
import { getProducts } from "../../assets/asyncMock"
import ItemList from "../ItemList/ItemList"
import '../Item/Item.css'
import { useParams } from "react-router-dom"
import { getProductsByCategory } from "../../assets/asyncMock"
import ItemCount from "../ItemCount/ItemCount"

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    const callProductbyCategory = (category) => {
        console.log('ingreso a la funcion')
        getProductsByCategory(category)
            .then(response => {
                console.log('response', response)
                setProducts(response)
            })
            .catch(error => {
                console.log('ingreso al error', error)
            })
    }


    useEffect(() => {
        const asyncFunc = categoryId ? callProductbyCategory(categoryId) : getProducts
        if (!categoryId) {
            asyncFunc(categoryId)
                .then(response => {
                    setProducts(response)
                })
                .catch(error => {
                    console.log('entro el error', error)
                })
        }

    }, [categoryId])

    return (
        <div >

            <ItemList products={products} />
        </div>
    )
}

