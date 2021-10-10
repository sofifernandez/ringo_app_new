import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import React, { useState } from "react";

export const CartWidget =() => {
    const [counter, setCounter] = useState(0)
    const add = (e) => {
        e.preventDefault();
        setCounter(counter + 1)
    }
    const remove = (e) => {
        e.preventDefault();
        if (counter > 0) setCounter(counter - 1)
    }
    return (
        <li className="col-2">
            <a className='px-1' href="carrito_tabla.html" id='btnCarritoNav'>
                <i className="fas fa-shopping-cart">
                <ItemListContainer valor={counter} onAdd={add} onRemove={remove}/>
                </i>
            </a>
        </li>
    )
}