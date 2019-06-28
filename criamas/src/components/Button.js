import React from 'react';
import '../stylesheet/App.css';

const Button = (props) => {
   return (
       <div>
           <button 
            id={props.identificator} 
            className={props.styleCss} 
            name={props.name}>
           </button>
       </div>
   );
}

export default Button;


