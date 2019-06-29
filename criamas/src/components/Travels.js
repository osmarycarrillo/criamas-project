import React from 'react';
import '../stylesheet/App.css';

class Travels extends React.Component {
  render () {
    return (
      <div className="travels">
        <h3 className="title-trav">Próximos viajes</h3>
        <div className="div-trav"><h4>Abril 03, 2019</h4><p>Europa - Sudamérica</p></div>
        <div className="div-trav"><h4>Abril 03, 2019</h4><p>Europa - Sudamérica</p></div>
        <div className="div-trav"><h4>Abril 03, 2019</h4><p>Europa - Sudamérica</p></div>
        <div className="div-trav"><h4>Abril 03, 2019</h4><p>Europa - Sudamérica</p></div>
      </div>
    )
  }
}
export default Travels;