import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './Cuerpo.css';


import MisLibros from './MisLibros/MisLibros';
import MisAutores from './MisAutores/MisAutores';
import MisNoticias from './MisNoticias/MisNoticias';
import MiCuenta from './MiCuenta/MiCuenta';

class Cuerpo extends Component {
  render() {
    return (
      <div id="cuerpo">
        <Switch>
          <Route exact path='/MisLibros' component={MisLibros}/>
          <Route exact path='/MisAutores' component={MisAutores}/>
          <Route exact path='/MisNoticias' component={MisNoticias}/>
          <Route exact path='/MiCuenta' component={MiCuenta}/>
        </Switch>
      </div>
    );
  }
}

export default Cuerpo;
