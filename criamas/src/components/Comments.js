import React, { Component } from 'react';
import Button from './Button';

class Comments extends Component {

  render() {
    return (
      <div className="comments">
          <i class="fas fa-chevron-left"></i>
          <div className="div-com">
          <img src="regsf"></img>
            <h3>Yamila Rodriguez</h3>
            <p>"fsajchzgsSIDOZCBJNJDWBASCJdbfhjcxascbjkcbz <br/> ehfajsklgaovhcjlgisvhbjalfvhscjfbj"</p>
            <Button name="Unirme al club" style="join-club"></Button>
          </div>
          <i class="fas fa-chevron-right"></i>
      </div>
    );
  }
}

export default Comments;