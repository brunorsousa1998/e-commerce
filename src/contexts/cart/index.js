import { createContext, useReducer } from "react";

import cartReducer from "./reducer";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        cart: [],
        subtotal: 0.0,
        shipping: 0.0,
    });

    const addToCart = (game) => {
        dispatch({ type: "ADD", payload: { game } });
    };

    const removeFromCart = (id) => {
        dispatch({ type: "REMOVE", payload: { id } });
    };

    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                subtotal: state.subtotal,
                shipping: state.shipping,
                addToCart,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
