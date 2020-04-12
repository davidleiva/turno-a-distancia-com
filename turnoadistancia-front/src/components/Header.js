import React from 'react';
import { useHistory } from "react-router-dom";

import classNames from 'classnames';

const Header = ({isTransparent, hasLogin, hasRegister}) => {
    // const [canShowLogin, setCanShowLogin] = useState(false); // TODO: usa esto
    const history = useHistory();

    return (
        <div
            id="sticky-wrapper"
            className={classNames({
                "Header": true,
                "sticky-wrapper": true,
                "bg-transparent": isTransparent
            })}
            style={{height: '87px'}}
        >
            <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">

                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <div className="site-logo mr-auto w-25">
                            <a
                                className="Header__Logo withLogo"
                                href="/">HAZ COLA A DISTANCIA</a>
                            </div>

                        <div className="mx-auto text-center">
                            <nav className="site-navigation position-relative text-right" role="navigation">
                            {/* <ul className="site-menu main-menu js-clone-nav mx-auto d-none d-lg-block  m-0 p-0">
                                <li><a className="nav-link active">Inicio</a></li>
                                <li><a className="nav-link">Qué ofrecemos</a></li>
                                <li><a className="nav-link">Contacto</a></li>
                                <li><a className="nav-link">Nuestro equipo</a></li>
                            </ul> */}
                            </nav>
                        </div>

                        <div className="ml-auto w-25" style={{position: 'relative',}}>
                            <nav className="site-navigation position-relative text-right" role="navigation">
                                {/* <ul className="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-lg-block m-0 p-0">
                                    { hasLogin &&
                                        <li className="cta">
                                        <button
                                            className="btn btn-primary btn-pill"
                                            onClick={ () => history.push('/login') }
                                        >
                                            <span>Iniciar sesión</span>
                                        </button>
                                    </li>
                                    }
                                    { hasRegister &&
                                        <li className="cta">
                                        <button
                                            className="btn btn-primary btn-pill"
                                            onClick={ () => history.push('/') }
                                        >
                                            <span>Registro</span>
                                        </button>
                                    </li>
                                    }
                                    { !hasRegister && !hasLogin &&
                                        <li className="cta">
                                        <button
                                            className="btn btn-primary btn-pill"
                                            onClick={ () => history.push('/') }
                                        >
                                            <span>Cerrar sesión</span>
                                        </button>
                                    </li>
                                    }
                                    
                                </ul> */}
                            </nav>
                        </div>

                    </div>
                </div>

            </header>
        </div>
    );
}

export default Header;


