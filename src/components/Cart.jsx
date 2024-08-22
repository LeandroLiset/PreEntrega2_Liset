import Container from 'react-bootstrap/Container';
import { useContext, useState } from 'react';

import { ItemsContext } from '../contexts/ItemContext';
const initialValues = {
    phone: "",
    email: "",
    name: "",
};

export const Cart = () => {
    const [buyer, setBuyer] = useState(initialValues);

    const{reset, removeItem, items} = useContext(ItemsContext);

    return <Container>{items.map(i =>{
        return <div key={i.id}>
        <h1>{i.title}</h1>
        <h2>{i.price}</h2>
        <h3>{i.quantity}</h3>
        <img src={i.imageId} height={50} alt="" />
        </div>;
    })}</Container>;
};