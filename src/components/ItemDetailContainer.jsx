import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from "firebase/firestore";

import Container from 'react-bootstrap/Container';

import { ItemsContext } from '../contexts/ItemContext';
import { ItemCount } from './ItemCount';



export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    // const value = useContext(ItemsContext);

    useEffect(() => {
        const db = getFirestore();

        const refDoc = doc(db, "items", id);
    
    getDoc(refDoc)
     .then((snapshot) => {
     setItem({ id: snapshot.id, ...snapshot.data() });
        })
     .finally(() => setLoading(false));
    }, [id]);
    
        

    if (loading) return <Container className='mt-3'>Wait...</Container>;

    if (!item)
        return <Container className='mt-3'>No hay productos que mostrar.</Container>;

    return (
        <Container className='mt-3'>
            <h1>Producto</h1>
            <h2>{item.title}</h2> 
            <img src={item.imageId} height={300}/>
            <h4>{item.categoryId}</h4>
            <p>{item.description}</p>
            <h3>Precio: ${item.price}</h3>
            <ItemCount stock={item.stock} />
        </Container>
    );
}; 