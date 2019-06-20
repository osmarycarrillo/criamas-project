import React, {Component} from 'react';
import Card from './slider/Card';
import Data from './slider/data/Data';
import '../stylesheet/App.css';

//class component
class Bslider extends Component {
  constructor(props){
    super(props);
    this.state = {
      property: Data.banners[0]
    }

  }

  nextProperty = () => {
    const newIndex = this.state.property.id+1;
    this.setState({
      property: Data.banners[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.id-1;
    this.setState({
      property: Data.banners[newIndex]
    })
  }


  render() {
    const {property} = this.state;
    return (
      <div className="box_slide">
        <Card property={property}/>
        <div className="counter">
          <button className={property.id === 0 ? "button-disable" : "button_slide"} onClick={() => this.prevProperty()} disabled={property.id === 0}>
            <i className="fas fa-angle-left"></i>
          </button>
          <button className={property.id === Data.banners.length-1 ? "button-disable" : "button_slide"} onClick={() => this.nextProperty()} disabled={property.id === Data.banners.length-1} >
            <i className="fas fa-angle-right"></i> 
          </button>
        </div>
      </div>
    )
  }
}
export default Bslider;