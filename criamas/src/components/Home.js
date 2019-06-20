import React, { Component } from 'react';
import Bslider from './Bslider';
import Oferta from './Oferta';
import '../stylesheet/App.css';
import Comments from './Comments';
import Somos from './Somos';
import ContactHome from './ContactHome';
import Information from './Information';
import JoinUs from './JoinUs';

class Home extends Component {

  render() {
    return (
      <div>
        <Bslider></Bslider>
        <Oferta></Oferta>
        <Somos></Somos>
        <Comments></Comments>
        <ContactHome></ContactHome>
        <JoinUs></JoinUs>
        <Information></Information>
      </div>
    );
  }
}

export default Home;