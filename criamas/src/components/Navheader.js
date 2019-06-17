import React from 'react';
import img_logo from '../stylesheet/img_svg/logo_criamas.svg';
import { Link } from "react-router-dom";
import '../stylesheet/App.css';


class Navheader extends React.Component {
  
  render () {
    return (
      <div className="box_nav">
      <nav className='nav_menu'>
        <div className='logo_container'>
          <img className='logo' src={img_logo} alt="logo criamas"/>
        </div>
        <div className='container_buttons'>
          <ul className="menu_row">
            <li>
              <Link to="/" className="link_url">Home</Link>
            </li>
            <li>
              <Link to="" className="link_url">Nosotros</Link>
            </li>
            <li>
              <Link to="/cachorros" className="link_url">Cachorros</Link>
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
              <Link to="" className="link_url">Contacto</Link>
            </li>
                      
          </ul>
          <div className="box_buttons">
              <button id="register_button" className="signin">Registrarse</button>
              <button id="account" className="login">Mi cuenta</button>
          </div>
        </div>       
      </nav>
      </div>
    )
  }
}
export default Navheader;

// Este componente realiza la navegacion de la pagina, es decir sera un componente fijo en todas las vistas
// MV