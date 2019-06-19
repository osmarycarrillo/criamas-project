import React, { Component } from 'react';
import Bslider from './Bslider';
import Comments from './Comments';
import ContactHome from './ContactHome';
import Somos from './Somos';
import '../stylesheet/App.css';

class Home extends Component {

  render() {
    return (
      <div>
        <Bslider></Bslider>
        <Somos></Somos>
        <Comments></Comments>
        <ContactHome></ContactHome>
      </div>
    );
  }
}

export default Home;