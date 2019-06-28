import React, { Component } from 'react'

class Redes extends Component {

    render() {
        return (
            // Pendiente agregar los link src de cada una de las redes
            <div className="redes">
                <div className="box_redes">
                    <a href="https://www.facebook.com/Criamasamor/">
                        <button className="button_redes fb">
                            <i class="fab fa-facebook-f size"></i>
                        </button>
                    </a>
                    <a href='https://instagram.com/criamasamor' target="_blank">
                    <button className="button_redes">
                    <i class="fab fa-instagram size"></i> 
                    </button>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=541149752537&text=Quiero%20mas%20informacion%20Sobre%20las%20Razas%20de%20Perros%20Disponibles">
                    <button className="button_redes">
                     <i class="fab fa-whatsapp size"></i>
                     </button>
                     </a>
                </div>
            </div>

        )
    }
}

export default Redes;