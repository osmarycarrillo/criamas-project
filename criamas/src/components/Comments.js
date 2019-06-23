import React, { Component } from 'react';
import Button from './Button';
import Testimony from './comments/Testimony';

class Comments extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments: Testimony.clientes[0]
    }

  }

  nextTestimony = () => {
    const newIndex = this.state.comments.id+1;
    this.setState({
      comments: Testimony.clientes[newIndex]
    })
  }

  prevTestimony = () => {
    const newIndex = this.state.comments.id-1;
    this.setState({
      comments: Testimony.clientes[newIndex]
    })
  }

  render() {
    const {comments} = this.state;
    const {name, occupation, image, testimony} = comments;
    return (
      <div className="comments">
        <div className="box_comments">
          <div className="box_button">
            <button className="button_comments" onClick={() => this.prevTestimony()} disabled={comments.id === 0}>
              <i className="fas fa-chevron-left chevron_style"></i>
            </button>
          </div>         
          <div className="div-com">
            <div className="box_comillas">
              <div className="content_comments">
                <img className="image_cliente" src={image} alt=""></img>
              </div>
            </div>              
              <h3 className="nombre_cliente">{name} <span className="cliente_occupation"> · {occupation}</span></h3>
              <p className="testimony_cliente">"{testimony}"</p>
              <div className="button_container">
               <Button identificator="button_club" name="Unirme al club" styleCss="join-us"/>
              </div>
          </div>
          <div className="box_button">
            <button className="button_comments" onClick={() => this.nextTestimony()} disabled={comments.id === Testimony.clientes.length-1}>
                <i className="fas fa-chevron-right chevron_style"></i>
            </button>
          </div>            
        </div>         
      </div>
    );
  }
}

export default Comments;