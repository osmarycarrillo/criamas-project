import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import '../stylesheet/App.css';
import Home from './Home';
import Navheader from './Navheader';
import Transfers from './Transfers';
import Redes from './Redes';
import Somos from './Somos';
import Blog from './Blog';
// import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navheader></Navheader>
            <Redes></Redes>
            <Route exact path="/" component={Home} />
            <Route exact path="/nosotros" component={Somos} />
            <Route exact path="/transfers" component={Transfers} />
            <Route exact path="/blog" component={Blog} />  
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
