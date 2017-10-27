import React, { Component } from 'react';
import './MisAutores.css';

import Autor from './Autor/Autor';

class MisAutores extends Component {
  render() {
    return (
      <div>
        <Autor nombre="JKRowling" className="JKRowling"/>
        <Autor nombre="ArthurConanDoyle" className="ArthurConanDoyle"/>
        <Autor nombre="ChristopherPaolini" className="ChristopherPaolini"/>
      </div>
    );
  }
}

export default MisAutores;

