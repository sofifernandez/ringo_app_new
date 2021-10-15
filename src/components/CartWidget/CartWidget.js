
export const CartWidget =({contadorCarrito}) => {
    return (
        <li className="col-2">
            <a className='px-1' href="carrito_tabla.html" id='btnCarritoNav'>
                <i className="fas fa-shopping-cart">
                <span>
                    <p className="badge rounded-pill mx-1" id="lblCartCount">{contadorCarrito}</p>
                </span>
                </i>
            </a>
        </li>
    )
}