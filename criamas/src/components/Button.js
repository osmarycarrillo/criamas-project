import React from 'react';
import { Link } from "react-router-dom";
import '../stylesheet/App.css';

const Button = (props) => {
<<<<<<< HEAD
    
    return (
        <div className='container_box_component'>
            <Link to={props.url}>
                <button id={props.identificator} className={props.styleCss}>
                    {props.name}
                </button>
            </Link>
        </div>
    );
=======
   return (
       <div className='container_box_component'>
         <Link to={props.url}>
           <button 
            id={props.identificator} 
            className={props.styleCss} >
            {props.name}
           </button>
           </Link>
       </div>
   );
>>>>>>> b9d619d24e9617ec977cec517528ed9e69427988
}

export default Button;

