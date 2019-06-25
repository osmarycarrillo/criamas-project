import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import '../stylesheet/App.css';
import Home from './Home';
import Navheader from './Navheader';
import Transfers from './Transfers';
import Redes from './Redes'


class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navheader></Navheader>
            <Redes></Redes>
        
            <Route exact path="/" component={Home} />
            <Route exact path="/transfers" component={Transfers} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
