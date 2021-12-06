import './Footer.scss'
import footer from '../../images/footer.svg'
import { NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget"


export const Footer = () => {
    return (
        <footer className="mb-0 px-0 mx-0 row justify-content-center container-fluid">
            <img className="img-fluid px-0 mx-0" src={footer} alt="logo_pie" />
            {/* <!--Seguinos/Contacto--> */}
            <div className="row mt-4 justify-content-center pb-2 pt-2 px-0 index">
                {/* <!--Seguinos--> */}
                <div className="col-12 col-sm-5">
                    <div className="row">
                        <p className="col-12 fs-3 mb-1">Seguinos</p>
                        <p className="mt-1 col-12 fs-6 mb-1">Enterate de nuestras ofertas</p>
                        <form className="col-12" name='formSusc'>
                            <div className="form-group">
                                <input placeholder="Ingresá tu email" id="emailSusc" className="mt-2" name='suscripciones' />
                            </div>
                        </form>
                        <div>
                            <button className="boton" id='btnSuscription'>SUSCRIBIRSE</button>
                        </div>
                    </div>
                    <div className="links">
                        <a href="contacto.html">
                            <i className="fas fa-envelope mx-1"></i>
                        </a>
                        <a href="https://www.instagram.com/ringo.orfebreria/?hl=es">
                            <i className="fab fa-instagram mx-1"></i>
                        </a>
                        <a href="tienda.html">
                            <i className="fas fa-store-alt mx-1"></i>
                        </a>
                    </div>
                </div>
                {/* <!--Contacto--> */}
                <div className="contacto col-12 col-sm-6 mt-3 mt-sm-0">
                    <p className="mb-3 fs-3">Contacto</p>
                    <form action="#" method="POST" className="row" name='formMensaje' id='formMensaje'>
                        <div className="col-6 mb-2">
                            <div className="form-group">
                                <input type="text" placeholder="Nombre*" id="nombre" required className=" mb-1" name='userName' />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email*" id="emailContacto" required name='userEmail' />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <textarea placeholder="Mensaje*" rows="10" cols="30" id="mensaje" required
                                    name='userMens'></textarea>
                            </div>
                        </div>
                    </form>
                    <div className="form-group">
                        <button type="submit" className="boton" id='enviarMens'>ENVIAR</button>
                    </div>
                </div>
            </div>

            {/* <!--NavegadorFooter--> */}
            <nav className="mt-5 mb-5 row text-center" id="menuPrincipalFooter">
                <ul className="row px-0 mx-0 justify-content-center">
                    <li className="col-11 col-md-3"><NavLink activeClassName="seccion-activa" to="/">HOME</NavLink></li>
                    <li className="col-11 col-md-3"><NavLink activeClassName="seccion-activa" to={'/tipo/anillos'}>Anillos</NavLink></li>
                    <li className="col-11 col-md-3" ><NavLink activeClassName="seccion-activa" to={'/tipo/aros'}>Aros</NavLink></li>
                    <li className="col-11 col-md-3"><CartWidget/></li>
                </ul>
            </nav>



            <div id="copyright" className="container-fluid mt-5 mb-2 d-flex align-content-center justify-content-between">
                <p className="mb-0 text-black-50"> Copyright: RINGO 2021</p>
                <img className="" src="imagenes/taller/Hcreat.png" alt="" />
            </div>
        </footer>
    )
}