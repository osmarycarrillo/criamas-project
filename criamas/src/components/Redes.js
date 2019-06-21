import React, { Component } from 'react'

class Redes extends Component {

    render() {
        return (
            // Pendiente agregar los link src de cada una de las redes
            <div className="redes">
                <div className="box_redes">  
                <button className="button_redes"><i class="fab fa-facebook-f heart size"></i></button>
                <button className="button_redes"><i class="fab fa-instagram size"></i></button>
                <button className="button_redes"> <i class="fab fa-whatsapp size"></i></button>
                </div>
            </div>

        )
    }
}

export default Redes;