import React from 'react';
import img_logo from './img_svg/logo_criamas.svg';
import { Link } from "react-router-dom";


class Navheader extends React.Component {
  
  render () {
    return (
      <nav>
        <div><img src={img_logo} alt="logo criamas"/></div>
        <div>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>Nosotros</li>
            <li>Cachorros</li>
            <li>Traslados</li>
            <li>Pet shop</li>
            <li>Blog</li>
            <li>Contacto</li>
            <li>
              <button>Registrarse</button>
              <button>Mi cuenta</button>
            </li>
          </ul>
        </div>       
      </nav>
    )
  }
}
export default Navheader;