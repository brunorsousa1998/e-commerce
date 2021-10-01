import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch("products.json");
            const data = await response.json();

            data.price = parseFloat(data.price).toFixed(2);

            setProducts(data);
        } catch (err) {
            throw new Error("Failed to fetch products");
        }
    };

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
