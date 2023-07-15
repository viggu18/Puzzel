import { legacy_createStore as createStore,combineReducers, applyMiddleware} from "redux";
import {AppReducer} from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    AppReducer,
});

const userStore = () => createStore(rootReducer,applyMiddleware(thunk));

export default userStore;


