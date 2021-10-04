import CartItem from "../cart-item";

const CartList = ({ cart }) => (
    <div className="cart-list">
        {cart.map((product) => (
            <CartItem product={product} key={product.id} />
        ))}
    </div>
);

export default CartList;
