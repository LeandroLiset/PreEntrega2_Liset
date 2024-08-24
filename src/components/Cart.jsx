import Container from 'react-bootstrap/Container';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { ItemsContext } from '../contexts/ItemContext';

const initialValues = {
    phone: "",
    email: "",
    name: "",
};

export const Cart = () => {
    const [buyer, setBuyer] = useState(initialValues);
    const { reset, removeItem, items } = useContext(ItemsContext);
    const total = items?.reduce((acc, act) => acc + act.price * act.quantity, 0);

    const handleChange = (ev) => {
        setBuyer(prev => {
            return { ...prev, [ev.target.name]: ev.target.value };
        });
    }

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePhone = (phone) => {
        const re = /^\d{8,20}$/;
        return re.test(String(phone));
    };

    const handleOrder = () => {
        if (!validateEmail(buyer.email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }
        if (!validatePhone(buyer.phone)) {
            alert("Por favor, ingresa un número de teléfono válido (solo dígitos, entre 8 y 20 caracteres).");
            return;
        }

        const order = {
            buyer,
            items,
            total,
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                alert("Su orden: " + id + " ha sido completada con éxito");
                reset();
                setBuyer(initialValues);
            }
        });
    };

    if (!items.length) return "No estás comprando nada, agrega más productos.";

    return (
        <Container>
            <button onClick={reset}>VACIAR CARRITO</button>
            {items?.map((i) => (
                <div key={i.id}>
                    <h1>{i.title}</h1>
                    <h2>Valor unitario: ${i.price}</h2>
                    <h3>Cantidad {i.quantity}</h3>
                    <img src={i.imageId} height={50} alt="" />
                </div>
            ))}
            <h2>Total: {total}</h2>
            <hr />
            {!!items.length &&
                <form>
                    <div>
                        <label>Nombre</label>
                        <input value={buyer.name} onChange={handleChange} name="name" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input value={buyer.email} onChange={handleChange} name="email" />
                    </div>
                    <div>
                        <label>Teléfono</label>
                        <input value={buyer.phone} onChange={handleChange} name="phone" />
                    </div>
                    <button type="button" onClick={handleOrder}>COMPRAR</button>
                </form>}
        </Container>
    );
};



