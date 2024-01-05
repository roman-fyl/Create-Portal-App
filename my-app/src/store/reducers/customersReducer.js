
const initialState = [];

const customersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CUSTOMER":
            return action.payload;
        default: return state;
    }
}

export default customersReducer;