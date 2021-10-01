const addProductToCart = (cart, game) => {
    const { id } = game;

    let updatedCart = [];

    const productIndex = cart.findIndex((product) => product.info.id === id);

    if (productIndex !== -1) {
        updatedCart = [
            ...cart.slice(0, productIndex),
            {
                info: cart[productIndex].info,
                quantity: cart[productIndex].quantity + 1,
            },
            ...cart.slice(productIndex + 1),
        ];
    } else {
        updatedCart = [...cart, { info: game, quantity: 1 }];
    }

    const subtotal = updatedCart.reduce(
        (total, product) => total + product.info.price * product.quantity,
        0
    );
    const shipping =
        subtotal >= 250.0
            ? 0.0
            : updatedCart.reduce(
                  (total, product) => total + product.quantity * 10.0,
                  0
              );

    return {
        cart: updatedCart,
        subtotal,
        shipping,
    };
};

const removeProcuctFromCart = (cart, id) => {
    let updatedCart = [];

    const productIndex = cart.findIndex((product) => product.info.id === id);

    if (cart[productIndex].quantity > 1) {
        updatedCart = [
            ...cart.slice(0, productIndex),
            {
                info: cart[productIndex].info,
                quantity: cart[productIndex].quantity - 1,
            },
            ...cart.slice(productIndex + 1),
        ];
    } else {
        updatedCart = [
            ...cart.slice(0, productIndex),
            ...cart.slice(productIndex + 1),
        ];
    }

    const subtotal = updatedCart.reduce(
        (total, product) => total + product.info.price * product.quantity,
        0
    );
    const shipping =
        subtotal >= 250.0
            ? 0.0
            : updatedCart.reduce(
                  (total, product) => total + product.quantity * 10.0,
                  0
              );

    return {
        cart: updatedCart,
        subtotal,
        shipping,
    };
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return addProductToCart(state.cart, action.payload.game);
        case "REMOVE":
            return removeProcuctFromCart(state.cart, action.payload.id);
        default:
            return state;
    }
};

export default cartReducer;
