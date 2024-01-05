
const initialState = [];

const editCustomerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EDIT_CUSTOMER":
            return action.payload;
        default: return state;
    }
}

export default editCustomerReducer;