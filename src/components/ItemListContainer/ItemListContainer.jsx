import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    const callProductByCategory = (category) => {
        console.log('Ingresó a la función');
        const collectionRef = query(collection(db, 'products'), where('category', '==', category));
        return getDocs(collectionRef)
            .then((querySnapshot) => {
                const productsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                return productsData;
            })
            .catch((error) => {
                console.log('Error fetching products:', error);
                throw error;
            });
    };

    useEffect(() => {
        const asyncFunc = categoryId ? callProductByCategory : getProducts;
        if (!categoryId) {
            asyncFunc(categoryId)
                .then((response) => {
                    setProducts(response);
                })
                .catch((error) => {
                    console.log('Error fetching products:', error);
                });
        }
    }, [categoryId]);

    const getProducts = async () => {
        try {
            const collectionRef = collection(db, 'products');
            const querySnapshot = await getDocs(collectionRef);
            const productsData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            return productsData;
        } catch (error) {
            console.log('Error fetching products:', error);
            throw error;
        }
    };

    return (
        <div>
                    <ItemList products={products} />

        </div>
    );
};
