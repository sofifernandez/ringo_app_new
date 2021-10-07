

export const NavBar =() => {
    return(
        <nav id="menuPrincipal" className="mb-4 fixed-top">
            <ul className="row px-0 mx-0 justify-content-center">
                <li className="col-2"><a className='px-1' id="estoyAca" href="index.html">HOME</a></li>
                <li className="col-2"><a className='px-1' href="comprar.html">Comprar</a></li>
                <li className="col-2"><a className='px-1' href="tienda.html">Tienda</a></li>
                <li className="col-2"><a className='px-1' href="contacto.html">Contacto</a></li>
                <li className="col-2"><a className='px-1' href="carrito_tabla.html" id='btnCarritoNav'>
                        <i className="fas fa-shopping-cart"><span className="badge rounded-pill" id="lblCartCount"></span></i>
                    </a></li>
            </ul>
        </nav>
    )
}