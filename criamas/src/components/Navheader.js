import React from 'react';
import img_logo from '../stylesheet/img_svg/logo_criamas.svg';
import { Link } from "react-router-dom";


class Navheader extends React.Component {
  
  render () {
    return (
      <nav className='nav_menu'>
        <div className='logo_container'>
          <img classname='logo' src={img_logo} alt="logo criamas"/>
        </div>
        <div className='container_buttons'>
          <ul>
            <li>
              <Link to="/">Home</Link>
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