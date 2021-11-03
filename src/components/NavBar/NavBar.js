import "./NavBar.scss"
import { NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget"
import logo from '../../images/logo.svg'


export const NavBar = () => {
    return (
        <header id="headerHOME" className="pb-md-5 container-fluid px-0 mx-0 justify-content-md-center justify-content-between">
            {/* Naegador pantallas de más de 768px */}
            <nav id="menuPrincipal" className="d-none d-md-block mb-4 fixed-top pb-5 px-0">
                <ul className="row px-0 mx-0 justify-content-center">
                    <li className="col-2"><a className='px-1' id="estoyAca" href="/">HOME</a></li>
                    <li className="nav-item dropdown col-2">
                        <a className="nav-link dropdown-toggle px-1" data-bs-toggle="dropdown" href="/#" role="button" aria-expanded="false">Comprar</a>
                        <ul className="dropdown-menu">
                            <li><NavLink className="dropdown-item fs-4" activeClassName="seccion-activa" to={'/tipo/anillos'}>Anillos</NavLink></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><NavLink className="dropdown-item fs-4" activeClassName="seccion-activa" to={'/tipo/aros'}>Aros</NavLink></li>
                        </ul>
                    </li>
                    <li className="col-2"><a className='px-1' href="tienda.html">Tienda</a></li>
                    <li className="col-2"><a className='px-1' href="contacto.html">Contacto</a></li>
                    <li className="col-2"><CartWidget contadorCarrito='?' /> </li>
                </ul>
            </nav>
            <div id="logoHeader" className="mt-md-5 pt-md-5 col-4">
                <NavLink to={'/'}><img className="img-fluid" src={logo} alt="Logo" title="Logo"/></NavLink>
            </div>

            {/* <Naegador pantallas de menos de 768px */}
            <div className="row d-md-none pb-2" id='navegadorMobile'>
                <div className="col-7 fs-4 lala">
                    <CartWidget contadorCarrito='?' /> 
                </div>
                <div className="dropdown d-flex d-md-none col-5">
                    <button className="btn btn-secondary" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i className="fas fa-bars"></i>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                        <li><NavLink className="dropdown-item" activeClassName="seccion-activa" to={'/'}>HOME</NavLink></li>
                        <li><NavLink className="dropdown-item" activeClassName="seccion-activa" to={'/tipo/anillos'}>Anillos</NavLink></li>
                        <li><NavLink className="dropdown-item" activeClassName="seccion-activa" to={'/tipo/aros'}>Aros</NavLink></li>
                        {/* <li><NavLink className="dropdown-item" activeClassName="seccion-activa" to={'/'}>Tienda</NavLink></li>
                        <li><NavLink className="dropdown-item" activeClassName="seccion-activa" to={'/'}>Contacto</NavLink></li> */}
                        {/* <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item col-3" href="carrito_tabla.html">Carrito</a></li> */}
                    </ul>
                </div>
            </div>
        </header>
    )
}