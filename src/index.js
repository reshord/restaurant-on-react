import store from './Redux/redux-store'

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import StoreContext from './store-context';
const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderComponent = () => {

    root.render(
      <React.StrictMode>
        <BrowserRouter>
        <StoreContext.Provider value={store}/>
            <App />        
        </BrowserRouter>
      </React.StrictMode>
    );

}

rerenderComponent(store.getState())

store.subscribe(rerenderComponent)