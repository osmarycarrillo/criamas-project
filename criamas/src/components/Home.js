import React, { Component } from 'react';
import Bslider from './Bslider';
<<<<<<< HEAD
import '../stylesheet/App.css';

=======
import Comments from './Comments';
import ContactHome from './ContactHome';
<<<<<<< HEAD
import Information from './Information';
=======
>>>>>>> 75ca9db98964cb73a2007d7ac22d933445d5a937
>>>>>>> e4855c1366d4adcd9007cb4014779d0675ce5952

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