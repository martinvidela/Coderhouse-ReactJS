import React, { useContext, useState } from 'react'
import { db } from '../../services/firebase/firebaseConfig'
import { addDoc, collection, getDocs, query, where, writeBatch } from 'firebase/firestore'


import { CheckoutForm } from '../CheckoutForm/CheckoutForm'
import { CartContext } from '../../context/CartContext'

export const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, lastname, phone, email}) => {
        setLoading(true);

        try {
            const orderTotal = total()
            const objOrder = {
                buyer: {
                    name,
                    lastname,
                    email,
                    phone
                },
                items: cart,
                total: orderTotal,
                date: new Date().toISOString()
            };

            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
            const productsRef = collection(db, 'products');
            const productsAddedFromFirestore = await getDocs(query(productsRef, where('id', 'in', ids)));
            const docs = productsAddedFromFirestore.docs;

            docs.forEach(doc => {
                const dataDoc = doc.data();


                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                console.log(objOrder)
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);
                const orderID = orderAdded.id;

                setOrderId(orderID);
                clearCart();
            } else {
                console.error('Hay productos que están fuera de stock');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Se está generando su orden</h1>;
    }
    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>;
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
};

