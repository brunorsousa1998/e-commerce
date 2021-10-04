const compareByName = (firstProduct, secondProduct) => {
    if (firstProduct.name < secondProduct.name) return -1;
    if (firstProduct.name > secondProduct.name) return 1;
    return 0;
};

const compareByPrice = (firstProduct, secondProduct) => {
    if (firstProduct.price < secondProduct.price) return -1;
    if (firstProduct.price > secondProduct.price) return 1;
    return 0;
};

const compareByScore = (firstProduct, secondProduct) => {
    if (firstProduct.score > secondProduct.score) return -1;
    if (firstProduct.score < secondProduct.score) return 1;
    return 0;
};

const sortFunction = (sortMethod) => {
    switch (sortMethod) {
        case "name":
            return (products) => products.sort(compareByName);
        case "price":
            return (products) => products.sort(compareByPrice);
        case "score":
            return (products) => products.sort(compareByScore);
        default:
            return (products) => products;
    }
};

const filterReducer = (state, action) => {
    switch (action.type) {
        case "changeSearchString":
            return {
                searchString: action.payload.searchString,
                sortMethod: state.sortMethod,
                sortFunction: state.sortFunction,
            };
        case "changeSortFunction":
            return {
                searchString: state.searchString,
                sortMethod: action.payload.sortMethod,
                sortFunction: sortFunction(action.payload.sortMethod),
            };
        default:
            return state;
    }
};

export default filterReducer;
