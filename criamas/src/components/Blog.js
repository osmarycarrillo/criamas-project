import React, { Component } from 'react';
import Bstatictras from './Bstatictras';

class Blog extends Component {
    render() {
        return (
            <div className="transfers">
                <Bstatictras 
                subtitle='Bienvenido a nuestro blog' 
                 title="Aquí en nuestra sección encontrará información útil"
                 bajada='Ante cualquier duda, podemos ayudarte.'
                ></Bstatictras>
        
            </div>
        )
    }
}

export default Blog;