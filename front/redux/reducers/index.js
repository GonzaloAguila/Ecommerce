import { combineReducers } from "redux";
import registerReducer from "../reducers/registerReducer";
import userReducer from "../reducers/userReducer";
import productReducer from "../reducers/productReducer";
import carReducer from "../reducers/carReducer"
import categoryReducer from "../reducers/categoryReducer";

export default combineReducers({
  register: registerReducer,
  login: userReducer,
  products: productReducer,
  car:carReducer,
  categories: categoryReducer,
});
