import { useContext } from "react";

import { FilterContext } from "../../contexts/filter";
import { ProductContext } from "../../contexts/products";

import GameCard from "../game-card";

import "./style.css";

const GameList = () => {
    const { products } = useContext(ProductContext);
    const { searchString, sortFunction } = useContext(FilterContext);

    return (
        <section className="game-list">
            {sortFunction(
                products.filter((product) =>
                    product.name
                        .toLowerCase()
                        .includes(searchString.toLowerCase())
                )
            ).map((product) => (
                <GameCard game={product} key={product.id} />
            ))}
        </section>
    );
};

export default GameList;
