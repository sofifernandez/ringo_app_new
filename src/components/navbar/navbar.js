

export const NavBar =({children})=>{
    return(
        <header id="headerHOME" className="pb-md-5">
        {/* Naegador pantallas de más de 768px */}
        <nav id="menuPrincipal" className="d-none d-md-block mb-4 fixed-top pb-5">
            <ul className="row px-0 mx-0 justify-content-center">
                <li className="col-2"><a className='px-1' id="estoyAca" href="index.html">HOME</a></li>
                <li className="col-2"><a className='px-1' href="comprar.html">Comprar</a></li>
                <li className="col-2"><a className='px-1' href="tienda.html">Tienda</a></li>
                <li className="col-2"><a className='px-1' href="contacto.html">Contacto</a></li>
                <li className="col-2">{children}</li>
            </ul>
        </nav>
        {/* <Naegador pantallas de menos de 768px */}
        <div className="row d-md-none pb-2">
            <div className="col-7 fs-4 lala">
                {children}
            </div>
            <div className="dropdown d-flex d-md-none col-5">
                <button className="btn btn-secondary" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i className="fas fa-bars"></i>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                    <li><a className="dropdown-item seccion-activa" href="index.html">HOME</a></li>
                    <li><a className="dropdown-item" href="comprar.html">Comprar</a></li>
                    <li><a className="dropdown-item" href="tienda.html">Tienda</a></li>
                    <li><a className="dropdown-item" href="contacto.html">Contacto</a></li>
                    <li>
                        <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item col-3" href="carrito_tabla.html">Carrito</a></li>
                </ul>
            </div>
        </div>
    </header>
    )
}