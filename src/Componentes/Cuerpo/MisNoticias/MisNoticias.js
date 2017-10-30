import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './MisNoticias.css';

class MisNoticias extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div id="Noticias">
        {/*<label htmlFor="buscarNoticias">Buscar noticias: </label>
        <input type="text" value="" /> */}
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum urna ut vestibulum interdum. Proin tellus dui, dapibus id porta et, pretium vel neque. Vestibulum quis neque tortor. Aliquam pellentesque, libero id sollicitudin posuere, urna lorem porttitor lectus, id ultricies nisl tortor at tortor. Vestibulum at posuere elit. Donec semper interdum ex, vel pulvinar mauris volutpat vel. Cras faucibus neque eget elit maximus, et auctor justo vehicula. Integer nec sapien tellus. Praesent semper vitae quam varius posuere. Aenean commodo scelerisque magna, volutpat tincidunt libero. Nulla feugiat leo ac neque pellentesque, maximus tincidunt diam lobortis. Quisque non fermentum magna. Donec lacinia porttitor justo nec porttitor. Pellentesque accumsan cursus arcu eget tempus.

Donec non erat id purus luctus ullamcorper. Vivamus imperdiet mauris ut tellus hendrerit commodo. Duis viverra consectetur purus sed tempor. Ut vitae vestibulum nisi. Nulla facilisi. Fusce non nunc a massa congue pharetra. Ut vel malesuada augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ullamcorper volutpat enim, mattis lacinia tellus facilisis ut. Donec id pellentesque diam, eget ultricies enim. Sed felis odio, dapibus ut quam at, imperdiet accumsan nibh. Pellentesque et luctus erat, et placerat lectus.
        </p>
      </div>
    );
  }


}

export default MisNoticias;
