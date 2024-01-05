
const initialState = [];

const CreateCustomerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_CUSTOMER":
            return action.payload;
        default: return state;
    }
}

export default CreateCustomerReducer;