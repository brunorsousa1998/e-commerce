import { useContext } from "react";

import { FilterContext } from "../../contexts/filter";

import DropDown from "../drop-down";

import "./style.css";

const Search = () => {
    const { searchString, changeSearchString } = useContext(FilterContext);

    return (
        <section className="search-bar">
            <input
                className="search"
                type="text"
                value={searchString}
                onChange={(event) => {
                    changeSearchString(event.target.value);
                }}
                placeholder="Procurar por nome..."
            ></input>
            <DropDown />
        </section>
    );
};
export default Search;
