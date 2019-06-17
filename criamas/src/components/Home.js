import React, { Component } from 'react';
import Bslider from './Bslider';
import '../stylesheet/App.css';

import Comments from './Comments';
import Somos from './Somos';
import ContactHome from './ContactHome';
<<<<<<< HEAD
import JoinUs from './JoinUs';
=======
<<<<<<< HEAD
import Information from './Information';
=======
>>>>>>> 75ca9db98964cb73a2007d7ac22d933445d5a937
>>>>>>> e4855c1366d4adcd9007cb4014779d0675ce5952
>>>>>>> f275143e6ead7eb14c1b65f3570e8b31a45a4c23

class Home extends Component {

  render() {
    return (
      <div>
        <Bslider></Bslider>
        <Somos></Somos>
        <Comments></Comments>
        <ContactHome></ContactHome>
<<<<<<< HEAD
        <JoinUs></JoinUs>
=======
        <Information></Information>
>>>>>>> f275143e6ead7eb14c1b65f3570e8b31a45a4c23
      </div>
    );
  }
}

export default Home;