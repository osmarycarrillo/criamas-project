import React from 'react';
import Myslide from './slider/Myslide'
import '../stylesheet/App.css';

class Bslider extends React.Component {


  render() {
    return (
      <div className="box_slide">
         <Myslide></Myslide>
      </div>
    )
  }
}
export default Bslider;