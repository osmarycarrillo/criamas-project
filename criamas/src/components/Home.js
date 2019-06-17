import React, { Component } from 'react';
import Bslider from './Bslider';
import Comments from './Comments';
import ContactHome from './ContactHome';
import Information from './Information';

class Home extends Component {

  render() {
    return (
      <div>
        <Bslider></Bslider>
        <Comments></Comments>
        <ContactHome></ContactHome>
        <Information></Information>
      </div>
    );
  }
}

export default Home;