import { CartWidget } from "../CartWidget/CartWidget"
import logoRingo from "../../images/logo.svg";

export const NavBar =() => {
    return(
        <nav id="menuPrincipal" className="mb-4 fixed-top">
            <ul className="row px-0 mx-0 justify-content-center align-content-center">
                <li className="col-2"><img className='img-fluid' src={logoRingo} alt="logo" /></li>
                <li className="col-2"><a className='px-1' id="estoyAca" href="index.html">HOME</a></li>
                <li className="col-2"><a className='px-1' href="comprar.html">Comprar</a></li>
                <li className="col-2"><a className='px-1' href="tienda.html">Tienda</a></li>
                <li className="col-2"><a className='px-1' href="contacto.html">Contacto</a></li>
                <CartWidget/>
            </ul>
        </nav>
    )
}