import React from 'react'
import Card from './Card';


const Content = (props) => {

    return (
       <div className="wrapper-block__content">
           
           {props.card.map(el => <Card el={el} />)}
           
       </div>

    )
}

export default Content;