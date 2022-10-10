import { combineReducers, createStore } from "redux";
import option_reducer from "./option_reducer";
import score_reducer from "./score_reducer";
const reducer = combineReducers({score:score_reducer,option:option_reducer});
const Store = createStore(reducer);
export default Store;

