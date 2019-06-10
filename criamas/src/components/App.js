import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import '../stylesheet/App.css';
import Home from './Home';
import Navheader from './Navheader';
import Footer from './Footer';

class App extends Component {

  render() {
      return(
        <div className="App">
          <BrowserRouter>
                <div>
                  <Navheader></Navheader>
                  <Route exact path="/" component={Home}/>
                  <Footer></Footer>
                </div>
          </BrowserRouter>
        </div>
      );
  }
}

export default App;
