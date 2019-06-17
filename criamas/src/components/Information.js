import React, { Component } from 'react';
import img_logo from '../stylesheet/img_svg/logo_criamas.svg';

class Information extends Component {
  render() {
    return (
      <div>
          <div>
            <img className='logo' src={img_logo} alt="logo criamas"/>
            <p>Nicaragua 5596</p>
            <p>+54 9 11 4975-2537</p>
            <p>+54 9 11 3589-8532</p>
            <p>lidiasisi@gmail.com</p>
            <p>Linea</p>
            <i class="fab fa-whatsapp"></i>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
          </div>
          <div>
              <h3>Información</h3>
              {/* <ul>
                <li>
                    <Link to="/us" className="link_url">Nosotros</Link>
                </li>
                <li>
                    <Link to="/puppies" className="link_url">Cachorros</Link>
                </li>
                <li>
                    <Link to="/transfers" className="link_url">Traslados</Link>
                </li>
                <li>
                    <Link to="/petshop" className="link_url">Pet shop</Link>
                </li>
                <li>
                    <Link to="/blog" className="link_url">Blog</Link>
                </li>
                <li>
                    <Link to="/contact" className="link_url">Contacto</Link>
                </li>
              </ul> */}
          </div>
          <div>
              <h3>Mi Cuenta</h3>
              {/* <ul>
                <li>
                    <Link to="/favorites" className="link_url">Favoritos</Link>
                </li>
                <li>
                    <Link to="/puppies" className="link_url">Cachorros</Link>
                </li>
                <li>
                    <Link to="/transfers" className="link_url">Traslados</Link>
                </li>
                <li>
                    <Link to="/petshop" className="link_url">Pet shop</Link>
                </li>
              </ul> */}
          </div>
          <div>
              <h3>Seguinos en Instagram</h3>
              <img>dsafds</img>
              <img>dsafds</img>
              <img>dsafds</img>
              <img>dsafds</img>
              <img>dsafds</img>
          </div>
      </div>
    );
  }
}

export default Information;