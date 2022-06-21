import {combineReducers, legacy_createStore as createStore} from "redux"

import postReducer from "./myPost-reducer";
import dialogReducer from "./dialogPage-reducer";
import ContactsReducer from "./contacts-reducer";
import usersReducer from "./users-reducer";

const reducers = combineReducers({
    MyPost: postReducer,
    dialogPage: dialogReducer,
    Contacts: ContactsReducer,
    Users: usersReducer
})

let store = createStore(reducers)
window.store = store

export default store;