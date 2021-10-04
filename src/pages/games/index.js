import FilterProvider from "../../contexts/filter";
import GameList from "../../components/game-list";
import Search from "../../components/search";

import "./style.css";

const Games = () => (
    <FilterProvider>
        <section className="games">
            <Search />
            <GameList />
        </section>
    </FilterProvider>
);

export default Games;
