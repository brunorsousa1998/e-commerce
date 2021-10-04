import "./style.css";

const CartPrices = ({ subtotal, shipping }) => (
    <div className="cart-prices">
        <div className="subtotal">
            <h2>
                Subtotal:
                <br /> R$ {subtotal.toFixed(2)}
            </h2>
            <h2>
                Frete:
                <br /> R$ {shipping.toFixed(2)}
            </h2>
        </div>
        <div className="total">
            <h2>
                Total:
                <br /> R${(subtotal + shipping).toFixed(2)}
            </h2>
        </div>
    </div>
);

export default CartPrices;
