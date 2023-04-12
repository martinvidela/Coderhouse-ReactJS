import './ItemCount.css'
import { useState } from 'react'

const ItemCount = () =>{
    const [valor, setValor] = useState(0);

    const sumar= () =>{

        setValor(valor+1)
    }

    const res= () =>{

        setValor(0)
    }

    const disminuir= () =>{

        setValor(valor-1)
    }

    return(
        <div className='container-contador'> 
            <h1>Contador</h1>
            <h2>{valor}</h2>
            <div className='botones'>
            <button className='boton' onClick={sumar}>Aumentar</button>
            <button className='boton' onClick={res}>Restablecer</button>
            <button className='boton' onClick={disminuir}>Disminuir</button>
            </div>
            <button className='addcart'>
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