import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({initial, stock, onAdd}) =>{
    const [quantity, setQuantity] = useState(initial);

    const increase= () =>{

        setQuantity(quantity+1)
    }


    const decrease= () =>{

        setQuantity(quantity-1)
    }

    return(
        <div className='container-contador'> 
       
            <div className='botones'>
            <button className='boton'disabled={quantity <=1} onClick={decrease}>-</button>
            <h2>{quantity}</h2>
            <button className='boton'disabled={quantity >=stock} onClick={increase}>+</button>
            </div>
            <button 
            onClick={()=>onAdd(quantity)}
            className='addcart'>
            Add to cart
             </button>
        </div>
       


    )



}

export default ItemCount