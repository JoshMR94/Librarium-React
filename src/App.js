import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MenuSuperior from './Componentes/MenuSuperior/MenuSuperior';
import Cuerpo from './Componentes/Cuerpo/Cuerpo';
import Pie from './Componentes/Pie/Pie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuSuperior/>
        <Cuerpo/>
        <Pie/>
      </div>
    );
  }
}

export default App;
