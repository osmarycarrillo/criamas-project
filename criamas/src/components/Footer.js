import React, { Component } from 'react';
import img_logo from '../img_svg/logo_criamas-01.svg';
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (<div className="information">
    <div className="footer-div">
      <div className="inf-div">
        <img className="logo-inf" src={img_logo} alt="logo criamas"/>
        <p>Nicaragua 5596</p>
        <p>+54 9 11 4975-2537</p>
        <p>+54 9 11 3589-8532</p>
        <p>lidiasisi@gmail.com</p>
        <hr className="line-inf"></hr>
        <div>
            <button className="sn-but"><i class="fab fa-whatsapp"></i></button>
            <button className="sn-but"><i class="fab fa-facebook-f"></i></button>
            <button className="sn-but"><i class="fab fa-instagram"></i></button>
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
          <img src="rhtd"></img>
          <img src="tdbgfh"></img>
          <img src="thrg"></img>
          <img src="trghg"></img>
          <img src="trhb"></img>
          <img src="trhb"></img>
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