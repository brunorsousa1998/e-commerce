import { useContext } from "react";
import { useHistory } from "react-router";

import { CartContext } from "../../contexts/cart";

import Button from "../button";

import "./style.css";

const GameCard = ({ game }) => {
    const { name, price, score, image } = game;
    const { addToCart } = useContext(CartContext);
    const navigate = useHistory();

    return (
        <section className="game-card">
            <img className="image" src={`assets/${image}`} alt={name} />
            <div className="info">
                <h2 className="title">{name}</h2>
                <h1 className="price">R$ {price.toFixed(2)}</h1>
                <h4 className="score">Score: {score}</h4>
            </div>
            <Button
                text="Comprar"
                onClick={() => {
                    addToCart(game);
                    navigate.push("/carrinho");
                }}
            />
        </section>
    );
};

export default GameCard;
