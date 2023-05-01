import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({initial, stock, onAdd}) =>{
    const [valor, setValor] = useState(initial);

    const increase= () =>{

        setValor(valor+1)
    }

    const res= () =>{

        setValor(0)
    }

    const decrease= () =>{

        setValor(valor-1)
    }

    return(
        <div className='container-contador'> 
            <h1>Contador</h1>
            <h2>{valor}</h2>
            <div className='botones'>
            <button className='boton'disabled={valor >=stock} onClick={increase}>Aumentar</button>
            <button className='boton' onClick={res}>Restablecer</button>
            <button className='boton'disabled={valor <=1} onClick={decrease}>Disminuir</button>
            </div>
            <button 
            onClick={()=>onAdd(valor)}
            className='addcart'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Agregar al carrito
             </button>
        </div>
       


    )



}

export default ItemCount