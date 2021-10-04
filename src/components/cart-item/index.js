import { useContext } from "react";

import { CartContext } from "../../contexts/cart";

import "./style.css";

const CartInfo = ({ product }) => {
    const {
        info: { name, price },
        quantity,
    } = product;

    return (
        <div className="info">
            <h1 className="name">{name}</h1>
            <h2 className="price">
                R$ {price.toFixed(2)} x {quantity}
            </h2>
        </div>
    );
};

const CartQuantity = ({ product, addToCart, removeFromCart }) => {
    const { info: game, quantity } = product;
    const { id } = game;

    return (
        <div className="quantity">
            <button
                className="decrease"
                onClick={() => {
                    removeFromCart(id);
                }}
            >
                -
            </button>
            <span className="value">{quantity}</span>
            <button
                className="increase"
                onClick={() => {
                    addToCart(game);
                }}
            >
                +
            </button>
        </div>
    );
};

const CartItem = ({ product }) => {
    const { info: game, quantity } = product;
    const { name, price, image } = game;
    const { addToCart, removeFromCart } = useContext(CartContext);

    return (
        <div className="cart-item">
            <div className="image">
                <img src={`assets/${image}`} alt={name} />
            </div>
            <CartInfo product={product} />
            <CartQuantity
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
            />
            <div className="total">
                <h1 className="price">
                    R$
                    {(quantity * price).toFixed(2)}
                </h1>
            </div>
        </div>
    );
};

export default CartItem;
