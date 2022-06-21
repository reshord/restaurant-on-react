import store from "./Redux/redux-store"
import React from 'react'

const StoreContext = React.createContext(store)

export default StoreContext;

