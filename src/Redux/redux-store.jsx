import {combineReducers, legacy_createStore as createStore} from "redux"

import postReducer from "./myPost-reducer";
import dialogReducer from "./dialogPage-reducer";

const reducers = combineReducers({
    MyPost: postReducer,
    dialogPage: dialogReducer,
})

let store = createStore(reducers)
console.log();

export default store;