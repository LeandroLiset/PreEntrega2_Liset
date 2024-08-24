import { Link } from "react-router-dom";
import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemContext";
import cart from "../assets/cart.webp";

export const CartWidget = () => {
    const { items } = useContext(ItemsContext);

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Link to="/cart">
            <img src={cart} height={25} alt="Carrito" />
            {totalItems > 0 && <span>{totalItems}</span>}
        </Link>
    );
};
