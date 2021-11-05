import "./ItemCount.scss"
import React, { useState } from "react";

export const ItemCount = ({ inicial, stock, ID, onAdd }) => {
  const [counter, setCounter] = useState(inicial);
  
  const increase = (e) => {
    e.preventDefault();
    if (counter < stock) {
      setCounter(counter + 1)
    } else {
      alert('No hay más stock')
    }
  }
  
  const decrease = (e) => {
    e.preventDefault();
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (counter !== 0) {
      onAdd(counter);
    }
  };



  return (
    <div className="col-10 col-sm-9 col-lg-8 row justify-content-center align-content-center justify-self-center mx-0">
      <button className='mx-1 my-0 fs-4 col-3 text-center' id='accionAgregar' onClick={decrease}>-</button>
      <p className="badge rounded-pill mx-1 col-2 text-center" id="lblCartCount">{counter}</p>
      <button className='mx-1 my-0 fs-4 col-3 text-center' id='accionRestar' onClick={increase} >+</button>
      <button className="col-9 col-sm-8 justify-self-center btn-Carrito mt-1" id={ID} onClick={(e) => {handleClick(e)}}>
          Agregar al carrito
      </button>
    </div>
  )
}