import React, { Component } from 'react';
import './MisLibros.css';

import Libro from './Libro/Libro';

class MisLibros extends Component {
  render() {
    return (
      <div>
        <Libro nombre="HarryPotter" className="HarryPotter"/>
        <Libro nombre="SherlockHolmes" className="SherlockHolmes"/>
        <Libro nombre="Eragon" className="Eragon"/>
      </div>
    );
  }
}

export default MisLibros;
