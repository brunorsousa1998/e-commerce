import { createContext, useReducer } from "react";

import filterReducer from "./reducer";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, {
        searchString: "",
        sortMethod: "none",
        sortFunction: (products) => products,
    });

    const changeSearchString = (searchString) => {
        dispatch({
            type: "changeSearchString",
            payload: { searchString },
        });
    };

    const changeSortFunction = (sortMethod) => {
        dispatch({
            type: "changeSortFunction",
            payload: { sortMethod },
        });
    };

    return (
        <FilterContext.Provider
            value={{
                searchString: state.searchString,
                sortMethod: state.sortMethod,
                sortFunction: state.sortFunction,
                changeSearchString,
                changeSortFunction,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};

export default FilterProvider;
