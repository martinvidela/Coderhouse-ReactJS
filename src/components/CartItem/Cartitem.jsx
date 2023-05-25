import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const CartItem = ({nombre, precio, quantity, id}) => {

  const {removeItem} = useContext (CartContext)


  return (
    <div className=''>
      <section className='contenedorcart'>
        <h4>{nombre}</h4>
        <div>Precio: ${precio}</div>
        <div>Cantidad: {quantity}</div>        
        <div>Subtotal: ${precio*quantity}</div>    
        <button onClick={()=> removeItem(id)} className='boton'>X</button>
      </section>
    </div>
  )
}
