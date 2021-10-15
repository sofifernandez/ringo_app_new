

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
                {children}
            </ul>
        </nav>
    </header>
    )
}