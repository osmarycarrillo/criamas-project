import React, { Component } from 'react';
import Bslider from './Bslider';
import Comments from './Comments';

class Home extends Component {

  render() {
    return (
      <div>
        <Bslider></Bslider>
        <Comments></Comments>
      </div>
    );
  }
}

export default Home;