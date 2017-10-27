import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './Cuerpo.css';


import MisLibros from './MisLibros/MisLibros';
import MisAutores from './MisAutores/MisAutores';

class Cuerpo extends Component {
  render() {
    return (
      <div id="cuerpo">
        <Switch>
          <Route exact path='/MisLibros' component={MisLibros}/>
          <Route exact path='/MisAutores' component={MisAutores}/>
        </Switch>
      </div>
    );
  }
}

export default Cuerpo;
