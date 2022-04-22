import { createStore,combineReducers } from "redux";
import globalReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({
    user: globalReducer
});

const userStore = () => createStore(rootReducer);

export default userStore;


