import React from 'react';        
import classNames from 'classnames';

 const Footer = ({isWhite}) => {
     return (
        <footer className={classNames({
            "footer-section mt-4": true,
            "bg-white border-top-0": isWhite,
        })}>
            <div className="container">
                <div className="row">

                    <div className="col-md-4">
                        <h3 className="Footer__Logo withLogo">HAZ COLA A DISTANCIA</h3>
                        <p>Servicio para gestionar el acceso de personas a cualquier establecimiento. Fácil de usar y totalmente customizable.</p>
                    </div>

                    {/* <div className="col-md-3 ml-auto">
                        <h3>MENU</h3>
                        <ul className="list-unstyled footer-MENU">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Qué ofrecemos</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Nuestro equipo</a></li>
                        </ul>
                    </div> */}

                    {/* <div className="col-md-4 offset-md-4">
                        <h3>SUBSCRÍBETE</h3>
                        <p>¿Quieres recibir nuestro boletín de noticias? Introduce tu email en el siguiente formulario para estar en la lista de mailing y enterarte de todas nuestras novedades.</p>
                        <form action="#" className="footer-SUBSCRÍBETE">
                        <div className="d-flex mb-5">
                            <input type="text" className="form-control rounded-0" placeholder="Email" />
                            <input type="submit" className="btn btn-primary rounded-0" value="SUBSCRÍBETE" />
                        </div>
                        </form>
                    </div> */}

                </div>

                <div className="row pt-5 mt-5 text-center">
                    <div className="col-md-12">
                        <div className="border-top pt-5">
                        {/* <p>
                        Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                        Copyright ©<script>document.write(new Date().getFullYear());</script>2020 All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                        </p> */}
                        </div>
                    </div>
                </div>

            </div>
        </footer>
     );
 }

export default Footer;   