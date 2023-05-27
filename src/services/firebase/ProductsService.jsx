import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

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

export default getProducts;
