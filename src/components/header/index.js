import { Link } from "react-router-dom";

import "./style.css";

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo">Game Store</h1>
            <div className="cart">
                <Link to="/carrinho">
                    <img
                        className="cart-icon"
                        src={"assets/cart-icon.svg"}
                        alt="cart"
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;
