import React, { useState, useEffect } from "react";
import './SearchBar.css';

const SearchBar = ({productos, setShowProducts, setLoading}) => {

    const [input, setInput] = useState("");
    
    useEffect(() => {
        if(input === "") setShowProducts(productos)
    }, [input, productos, setShowProducts]);

    const handleInputChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(function(){
            var foundProducts = productos.filter( p => p.name.toUpperCase().includes( input.toUpperCase() ) || p.id.toUpperCase().includes( input.toUpperCase() ) )
            setShowProducts(foundProducts)
            setLoading(false)
        }, 3000)
    }

    return(
        <form className="search-input-container" onSubmit={handleSubmit}>
            <input type="text" name="search" className="search-input search" onChange={handleInputChange} ></input>
            <button type="submit" className="search search-btn"><i className="fa fa-search fa-fw icon"><span className="btn-text">Buscar</span></i></button>
        </form>
    )
}

export default SearchBar;