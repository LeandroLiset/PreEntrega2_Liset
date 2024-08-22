import { Link } from "react-router-dom";
import cart from "../assets/cart.webp";

export const CartWidget = () => {
    return (
        <Link to="/cart">
            <img src={cart} height={25} /><span>3</span>
        </Link>
    );
};