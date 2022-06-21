import React from 'react'
import StoreContext from '../store-context';
import Card from './Card';
import store from '../Redux/redux-store';

const Content = (props) => {
    return (
        
      
        <div className="wrapper-block__content">
           
           {store.getState().MyPost.MyPost.card.map(el => <Card el={el} />)}
           
       </div>

    )
}

export default Content;