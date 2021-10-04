import { useContext, useState } from "react";

import { FilterContext } from "../../contexts/filter";

import "./style.css";

const DropDownItem = ({ text, sortBy }) => {
    const { sortMethod, changeSortFunction } = useContext(FilterContext);

    return (
        <li
            className={`menu-item ${sortMethod === sortBy && "active"}`}
            onClick={() => {
                sortMethod === sortBy
                    ? changeSortFunction("none")
                    : changeSortFunction(sortBy);
            }}
        >
            {text}
        </li>
    );
};

const DropDown = () => {
    const [dropDown, setDropDown] = useState(false);

    return (
        <div className="drop-down">
            <button
                className="menu-item opener"
                type="button"
                onClick={() => {
                    setDropDown(!dropDown);
                }}
            >
                Ordenar por
                <img
                    className="arrow"
                    src="/assets/arrow-down-icon.svg"
                    alt="open"
                    style={{
                        transform: `${dropDown ? "rotate(180deg)" : ""}`,
                    }}
                />
            </button>
            {dropDown && (
                <ul className="menu-items">
                    <DropDownItem text="Nome" sortBy="name" />
                    <DropDownItem text="Preço" sortBy="price" />
                    <DropDownItem text="Avaliação" sortBy="score" />
                </ul>
            )}
        </div>
    );
};

export default DropDown;
