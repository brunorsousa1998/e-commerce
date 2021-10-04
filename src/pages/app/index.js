import { BrowserRouter as Router, Route } from "react-router-dom";

import ProductProvider from "../../contexts/products";
import CartProvider from "../../contexts/cart";

import Header from "../../components/header";
import Games from "../games";
import Cart from "../cart";

import "./style.css";

const App = () => (
    <div className="app">
        <Router>
            <Header />
            <ProductProvider>
                <CartProvider>
                    <section className="body">
                        <section className="content">
                            <Route path="/" exact>
                                <Games />
                            </Route>
                            <Route path="/carrinho">
                                <Cart />
                            </Route>
                        </section>
                    </section>
                </CartProvider>
            </ProductProvider>
        </Router>
    </div>
);

export default App;
