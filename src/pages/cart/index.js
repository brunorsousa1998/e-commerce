import { useContext } from "react";

import { CartContext } from "../../contexts/cart";

import CartList from "../../components/cart-list";
import CartPrices from "../../components/cart-prices";
import CartOptions from "../../components/cart-options";

import "./style.css";

const Cart = () => {
    const { cart, subtotal, shipping } = useContext(CartContext);

    return (
        <section className="cart">
            <div>
                <CartList cart={cart} />
                <CartPrices subtotal={subtotal} shipping={shipping} />
                <CartOptions />
            </div>
        </section>
    );
};

export default Cart;
