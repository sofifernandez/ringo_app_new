export const ItemListContainer =({ valor, onAdd, onRemove })=>{
    return(
        <span>
            <p className="badge rounded-pill mx-1" id="lblCartCount">{valor}</p>
            <button className='mx-1 fs-6' id='accionAgregar' onClick={(e)=>onRemove(e)}> - </button>
            <button className='mx-1 fs-6' id='accionRestar' onClick={(e)=>onAdd(e)}> + </button>
        </span>
        
    )
}