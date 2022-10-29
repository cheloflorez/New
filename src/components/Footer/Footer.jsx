import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-principal">
                <div className="about">
                    <h3>BURGer Dev</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                        voluptatem corporis error non,
                    </p>
                    <div className="social">
                        <i className="fa-brands fa-facebook-square" />
                        <i className="fa-brands fa-instagram-square" />
                        <i className="fa-brands fa-whatsapp-square" />
                    </div>
                </div>
                <div className="links">
                    <h3>Navegacion</h3>
                    <ul>
                        <li>
                            <a href="index.html">Inicio</a>
                        </li>
                        <li>
                            <a href="./vistas/menu.html">Menu</a>
                        </li>
                        <li>
                            <a href="./vistas/nosotros.html">Nosotros</a>
                        </li>
                        <li>
                            <a href="./vistas/contacto.html">Contacto</a>
                        </li>
                        <li>
                            <a href="./vistas/login.html">Login</a>
                        </li>
                    </ul>
                </div>
                <div className="subscribe">
                    <h3>Newsletter</h3>
                    <input type="email" placeholder="Ingrese su email" />
                    <button>Subscribirse</button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
