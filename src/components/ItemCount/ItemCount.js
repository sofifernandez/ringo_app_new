import React, { useState } from "react";

export const ItemCount = ({ inicial, stock }) => {
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
    <div className="col-8 col-sm-11 col-lg-8 row justify-content-center">
      <button className='mx-1 fs-4 col-3 text-center' id='accionAgregar' onClick={remove}>-</button>
      <p className="badge rounded-pill mx-1 col-4 text-center" id="lblCartCount">{counter}</p>
      <button className='mx-1 fs-4 col-3 text-center' id='accionRestar' onClick={add} >+</button>
    </div>
  )
}