import React, { useState } from 'react'



export const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, lastname, phone, email,
        }

        onConfirm(userData)
    }


    return (
        <div className='Container'>
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label'>
                    Nombre
                </label>
                <input type="text" value={name} onChange={({ target }) => setName(target.value)} />
                <label className='Label'>
                    Apellido
                </label>
                <input type="text" value={lastname} onChange={({ target }) => setLastname (target.value)} />
                <label className='Label'>
                    Telefono
                    <input
                        className='Input'
                        type='text'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <label className='Label'>
                    Email
                    <input
                        className='Input'
                        type="email"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <div className='Label'>
                    <button type='sumbit' className='ButtonSumbit'>Crear Orden</button>
                </div>
            </form>
        </div>
    )
}
