import React from "react";
import Card from "../Card/Card.jsx";
import "./Cards.css";

const Cards = ({productos, loading}) => {

    return(
        <>
        {
            loading ?
            <div className="loading"/>
            :
            <>
            {
                productos.length === 0 ?
                <div className="no-products">No se encontraron productos</div>
                :
                <div className="cards-grid">
                    {
                        productos.map((p, key) => {
                            return <Card key={key} product={p} />
                        })
                    }
                </div>
            }
            <div className="prod-amount-cont">
                <span className="prod-amount">{productos.length} resultados</span>
            </div>
            </>
        }          
        </>
    )
}

export default Cards;