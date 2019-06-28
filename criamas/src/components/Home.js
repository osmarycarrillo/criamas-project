import React, { Component } from 'react';
import '../stylesheet/App.css';
import Bslider from './Bslider';
import Oferta from './Oferta';
import Somos from './Somos';
import Comments from './Comments';
import ContactHome from './ContactHome';
import JoinUs from './JoinUs';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Bslider></Bslider>
        <Oferta></Oferta>
        <Somos></Somos>
        <Comments></Comments>
        <ContactHome/>
        <JoinUs></JoinUs>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;