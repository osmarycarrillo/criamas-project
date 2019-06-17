import React, { Component } from 'react';
import Bslider from './Bslider';
import Comments from './Comments';
import ContactHome from './ContactHome';

class Home extends Component {

  render() {
    return (
      <div>
        <Bslider></Bslider>
        <Comments></Comments>
        <ContactHome></ContactHome>
      </div>
    );
  }
}

export default Home;