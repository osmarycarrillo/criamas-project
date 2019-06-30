import React, { Component } from 'react';
import img_logo from '../img_svg/logo_criamas-02.svg';
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (<div className="information">
            <div className="footer-div">
                <div className="inf-div">
                    <img className="logo-inf" src={img_logo} alt="logo criamas" />
                    <p>Nicaragua 5596</p>
                    <p>+54 9 11 4975-2537</p>
                    <p>+54 9 11 3589-8532</p>
                    <p>lidiasisi@gmail.com</p>
                    <hr className="line-inf"></hr>
                    <div>
                        <a href="https://api.whatsapp.com/send?phone=541149752537&text=Quiero%20mas%20informacion%20Sobre%20las%20Razas%20de%20Perros%20Disponibles">
                        <button className="sn-but">
                        <i class="fab fa-whatsapp"></i>
                        </button>
                        </a>
                        <a href="https://www.facebook.com/Criamasamor/">
                        <button className="sn-but">
                        <i class="fab fa-facebook-f"></i>
                        </button>
                        </a>
                        <a href='https://instagram.com/criamasamor' target="_blank">
                        <button className="sn-but">
                        <i class="fab fa-instagram"></i>
                        </button>
                        </a>
                    </div>
                </div>
                <div className="inf-nav">
                    <h5>Información</h5>
                    <ul>
                        <li className="link-inf">
                            <Link to="/us" className="link_url">Nosotros</Link>
                        </li>
                        <li className="link-inf">
                            <Link to="/puppies" className="link_url">Cachorros</Link>
                        </li>
                        <li className="link-inf">
                            <Link to="/transfers" className="link_url">Traslados</Link>
                        </li>
                        <li className="link-inf">
                            <Link to="/petshop" className="link_url">Pet shop</Link>
                        </li>
                        <li className="link-inf">
                            <Link to="/blog" className="link_url">Blog</Link>
                        </li>
                        <li className="link-inf">
                            <Link to="/contact" className="link_url">Contacto</Link>
                        </li>
                    </ul>
                </div>
                <div className="inf-nav">
                    <h5>Mi Cuenta</h5>
                    <ul>
                        <li className="link-inf">
                            <Link to="/favorites" className="link_url">Favoritos</Link>
                        </li>
                        <li className="link-inf">
                            <Link to="/puppies" className="link_url">Cachorros</Link>
                        </li>
                        <li className="link-inf">
                            <Link to="/transfers" className="link_url">Traslados</Link>
                        </li>
                        <li className="link-inf">
                            <Link to="/petshop" className="link_url">Pet shop</Link>
                        </li>
                    </ul>
                </div>
                <div className="inf-nav">
                    <h5>Seguinos en Instagram</h5>
                    <a href='https://instagram.com/criamasamor' target="_blank">
                        <img class='labnol' src='https://scontent-iad3-1.cdninstagram.com/vp/0e1557aa3953f370320c7e7c38943a2f/5DC54D24/t51.2885-15/fr/e15/s1080x1080/61692756_2899087156984157_62827376981736368_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com' />
                    </a>
                    <a href='https://instagram.com/criamasamor' target="_blank">
                        <img class='labnol' src='https://scontent-iad3-1.cdninstagram.com/vp/65cd368f327bb241e7145fd9e8889f4b/5DC53390/t51.2885-15/fr/e15/s1080x1080/62638498_2381781701902090_6491097398430221057_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com' />
                    </a>
                    <a href='https://instagram.com/criamasamor' target="_blank">
                        <img class='labnol' src='https://scontent-iad3-1.cdninstagram.com/vp/7c3b787344d2f2596bf46db93fc59f19/5DBF16A3/t51.2885-15/fr/e15/s1080x1080/61160788_2371274363118906_2951131890010056232_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com' />
                    </a>
                    <a href='https://instagram.com/criamasamor' target="_blank">
                        <img class='labnol' src='https://scontent-iad3-1.cdninstagram.com/vp/7c3b787344d2f2596bf46db93fc59f19/5DBF16A3/t51.2885-15/fr/e15/s1080x1080/61160788_2371274363118906_2951131890010056232_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com' />
                    </a>
                    <a href='https://instagram.com/criamasamor' target="_blank">
                        <img class='labnol' src='https://scontent-iad3-1.cdninstagram.com/vp/7c3b787344d2f2596bf46db93fc59f19/5DBF16A3/t51.2885-15/fr/e15/s1080x1080/61160788_2371274363118906_2951131890010056232_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com' />
                    </a>
                    <a href='https://instagram.com/criamasamor' target="_blank">
                        <img class='labnol' src='https://scontent-iad3-1.cdninstagram.com/vp/7c3b787344d2f2596bf46db93fc59f19/5DBF16A3/t51.2885-15/fr/e15/s1080x1080/61160788_2371274363118906_2951131890010056232_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com' />
                    </a>
                </div>
            </div>
            <hr className="line-foot"></hr>
            <div className="footer">
                <div className="footer-cri">
                    <p>2019 <span className="foot-logo">Criamás</span> Todos los derechos reservados</p>
                </div>
                <div className="footer-data">
                    <a>Terms and condition</a>
                    <a>Privacy Legacy</a>
                    <a>Security</a>
                    <a>Cookies</a>
                </div>
            </div>
            <div className="footer-sky">
                <p>Desarrollado por <b>SkyCode</b></p>
            </div>
        </div>
        );
    }
}


export default Footer;