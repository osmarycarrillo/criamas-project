import React from 'react';
import { Link } from "react-router-dom";
import '../stylesheet/App.css';

const Button = (props) => {
   return (
       <div className='container_box_component'>
         <Link to={props.url}>
           <button 
            onClick={props.onClick}
            id={props.identificator} 
            className={props.styleCss} >
            {props.name}
           </button>
           </Link>
       </div>
   );
}

export default Button;

