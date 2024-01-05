import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import customersReducer from "./customersReducer";
import editCustomerReducer from "./editCustomerReducer";


const rootReducer = combineReducers({
    posts: postsReducer,
    customers: customersReducer,
    editCustomer: editCustomerReducer,
   
  });
  
  export default rootReducer;