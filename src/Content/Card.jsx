import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
              <div className="card-title">{props.el.title}</div>
              <div className="card-image">
                  <img src={props.el.img} alt="" />
              </div>
              <div className="card-footer">
                  <div className="card-weight">{props.el.weight}gr</div>
                  <div className="card-price">{props.el.price}p</div>
              </div>
              <button className="card-btn">Delivery</button>
          </div>
    )
}

export default Card;