export default (state = [], action) => {
    switch (action.type) {
        case "ADD_ITEM_TO_CART":
            return [
                ...state,
                action.product
            ];
        case "UPDATE_QUANTITY":
            return state.map((product) => {
                if (product.id === action.id) {
                    return {
                        ...product,
                        quantity: action.quantity,
                        totalCost: (parseInt(action.quantity) * parseInt(product.cost)).toString()
                    };
                } else {
                    return product;
                };
            });
        case "REMOVE_ITEM":
            return state.filter(({ id }) => id !== action.id);
        default: return state;
    }
}