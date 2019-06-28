import React from 'react';
import '../stylesheet/App.css';

const Input = (props) => {
   return (
       <div>
            <input 
                id={props.identificator} 
                className={props.styleCss} 
                name={props.name}
                placeholder={props.placeholder}
            >
           </input>
       </div>
   );
}

export default Input;
