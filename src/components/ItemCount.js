import quarter from "../images/quarter.png";
import React, { useState } from "react";

export const ItemCount = ({inicial, stock}) => { 
    const [counter, setCounter] = useState(inicial);
    const add = (e) => {
      e.preventDefault();
      if (counter < stock) {
        setCounter(counter + 1)
      } else {
        alert('No hay más stock')
    }
    }
  const remove = (e) => {
      e.preventDefault();
      if (counter > 0) {
        setCounter(counter - 1)
      }
  } 
    return (
        <div className="col-3 row justify-content-center">
            <img className="card-img-top img-fluid" src={quarter} alt=""/>
            <div className ="card-body col-11">
                <p className ="card-text nombreProducto"><b>Anillo Quarter</b></p>
                <p className ="card-text precioProducto"><b>$1500</b></p>
            </div>

            <div className='row col-7 justify-content-center mb-1'>
                <button className='mx-1 fs-4 col-3' id='accionAgregar'onClick={remove}>-</button>
                <p className="badge rounded-pill mx-1 col-3" id="lblCartCount">{counter}</p>
                <button className='mx-1 fs-4 col-3' id='accionRestar'onClick={add} >+</button>
            </div>
            <button className ="col-6 justify-self-center btn-Carrito" id='btn-id'>Agregar al carrito</button>
        </div>
    )
}