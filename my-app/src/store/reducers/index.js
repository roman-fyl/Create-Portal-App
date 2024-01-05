import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import customersReducer from "./customersReducer";


const rootReducer = combineReducers({
    posts: postsReducer,
    customers: customersReducer,
   
  });
  
  export default rootReducer;