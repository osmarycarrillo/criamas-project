import React, { Component } from 'react';
import Bslider from './Bslider';
<<<<<<< HEAD
import '../stylesheet/App.css';

=======
import Comments from './Comments';
import ContactHome from './ContactHome';
>>>>>>> 75ca9db98964cb73a2007d7ac22d933445d5a937

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