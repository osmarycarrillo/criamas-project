import React, { Component } from 'react';
import Bslider from './Bslider';
import Bstatic from './Bstatic';

class Home extends Component {

  render() {
    return (
      <div>
        COMIENZO DE LA HOME
        <Bslider></Bslider>
        {/* <Bstatic></Bstatic> */}
        FIN DE HOME
      </div>
    );
  }
}

export default Home;