import { useHistory } from "react-router";

import Button from "../button";

import "./style.css";

const CartOptions = () => {
    const navigate = useHistory();

    return (
        <div className="cart-options">
            <Button
                text="Continuar comprando"
                onClick={() => {
                    navigate.goBack();
                }}
            />
            <Button text="Finalizar compra" />
        </div>
    );
};

export default CartOptions;
