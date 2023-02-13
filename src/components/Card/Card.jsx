import React from "react";
import './Card.css';

const Card = ({product}) => {

    return(
        <div className="card-container" >
            <img src={product.img} className="prod-img" alt={product.name} />

            <div className="right-container">
                <h3 className="prod-name">{product.name}</h3>
                <h5 className="prod-id">{product.id}</h5>

                <span className="price-label">Precio: </span>
                <span className="prod-price">${product.price}</span>
            </div>
        </div>
    )
}

export default Card;