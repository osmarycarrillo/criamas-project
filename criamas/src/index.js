import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();

// document.getElementById("btnEnviar").addEventListener("click", function () {
//     let strName = document.getElementById("name").value;
//     let strMail = document.getElementById("mail").value;
//     let strAbout = document.getElementById("about").value;
//     let strMsj = document.getElementById("msj").value;

//     if (strName != "" && strMail != "" && strAbout != "" && strMsj != "") {
    
//         let datos = {
//             n: strName,
//             m: strMail,
//             a: strAbout,
//             j: strMsj
//         };
//         axios.post('/contacto', datos)
//             .then(function (response) {
//                 document.getElementById("name").value = "";
//                 document.getElementById("mail").value = "";
//                 document.getElementById("about").value = "";
//                 document.getElementById("msj").value = "";
//                 alert("Gracias por escribirnos, en breve te contactaremos");
//             }).catch(function(error){
//                 console.log(error);
//             });
//     } else {
//         alert("Por Favor complete todos los datos")
//     }


// });