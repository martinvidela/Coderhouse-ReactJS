import React from 'react'
import { useState, useEffect } from "react";
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../assets/asyncMock';



const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)


  const {itemId} = useParams()



  useEffect(() => {
    getProductById(itemId)
      .then(response => {
        console.log(response)
        setProduct(response)
        
      })
      .catch(error => {
        console.log(error)
      })
  }, [itemId])

  return (
    <div className='ItemDetailContainer'>
      <ItemDetail {...product} />
    </div>
  )

}


export default ItemDetailContainer