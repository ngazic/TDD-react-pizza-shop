import { combineReducers } from "redux";
import page from "./pageReducer";
import cart from "./cartReducer";

export default combineReducers({
  page,
  cart,
});
