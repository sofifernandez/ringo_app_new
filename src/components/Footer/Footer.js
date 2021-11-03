import './Footer.scss'
import footer from '../../images/footer.svg'
export const Footer = () => {
    return (
        <footer class="mb-0 px-0 mx-0 row justify-content-center container-fluid">
        <img class="img-fluid px-0 mx-0" src={footer} alt="logo_pie"/>
        {/* <!--Seguinos/Contacto--> */}
        <div class="row mt-4 justify-content-center pb-2 pt-2 px-0 index">
            {/* <!--Seguinos--> */}
            <div class="col-12 col-sm-5">
                <div class="row">
                    <p class="col-12 fs-3 mb-1">Seguinos</p>
                    <p class="mt-1 col-12 fs-6 mb-1">Enterate de nuestras ofertas</p>
                    <form class="col-12" name='formSusc'>
                        <div class="form-group">
                            <input placeholder="Ingresá tu email" id="emailSusc" class="mt-2" name='suscripciones'/>
                        </div>
                    </form>
                    <div>
                        <button class="boton" id='btnSuscription'>SUSCRIBIRSE</button>
                    </div>
                </div>
                <div class="links">
                    <a href="contacto.html">
                        <i class="fas fa-envelope mx-1"></i>
                    </a>
                    <a href="https://www.instagram.com/ringo.orfebreria/?hl=es">
                        <i class="fab fa-instagram mx-1"></i>
                    </a>
                    <a href="tienda.html">
                        <i class="fas fa-store-alt mx-1"></i>
                    </a>
                </div>
            </div>
            {/* <!--Contacto--> */}
            <div class="contacto col-12 col-sm-6 mt-3 mt-sm-0">
                <p class="mb-3 fs-3">Contacto</p>
                <form action="#" method="POST" class="row" name='formMensaje' id='formMensaje'>
                    <div class="col-6 mb-2">
                        <div class="form-group">
                            <input type="text" placeholder="Nombre*" id="nombre" required class=" mb-1" name='userName'/>
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="Email*" id="emailContacto" required name='userEmail'/>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <textarea placeholder="Mensaje*" rows="10" cols="35" id="mensaje" required
                                name='userMens'></textarea>
                        </div>
                    </div>
                </form>
                <div class="form-group">
                    <button type="submit" class="boton" id='enviarMens'>ENVIAR</button>
                </div>
            </div>
        </div>

        {/* <!--NavegadorFooter--> */}
        <nav class="mt-5 mb-5" id="menuPrincipalFooter">
            <ul class="row px-0 mx-0 justify-content-center">
                <li class="col-2"><a class='px-1' href="index.html">HOME</a></li>
                <li class="col-2"><a class='px-1' href="comprar.html">Comprar</a></li>
                <li class="col-2"><a class='px-1' href="tienda.html">Tienda</a></li>
                <li class="col-2"><a class='px-1' href="contacto.html">Contacto</a></li>
                <li class="col-2"><a class='px-1' href="carrito_tabla.html" id='btnCarritoNav'>
                        <i class="fas fa-shopping-cart"><span class="badge rounded-pill" id="lblCartCount"></span></i>
                    </a></li>
            </ul>
        </nav>



        <div id="copyright" class="container-fluid mt-5 mb-2 d-flex align-content-center justify-content-between">
            <p class="mb-0 text-black-50"> Copyright: RINGO 2021</p>
            <img class="" src="imagenes/taller/Hcreat.png" alt=""/>
        </div>
    </footer>
    )
}