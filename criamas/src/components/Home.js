import React, { Component } from 'react';
import Bslider from './Bslider';
import Bstatic from './Bstatic';

class Home extends Component {

  render() {
    return ( 
      <div>
          <Bslider></Bslider>
          <Bstatic></Bstatic>
      </div>   
    );
  }
}

export default Home;