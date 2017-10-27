import React, { Component } from 'react';
import './Autor.css';

class Autor extends Component {

  constructor(props){
    super(props);

    this.getNombreAutor = this.getNombreAutor.bind(this);
  }

  render() {
    return (
      <view className={this.props.className}>
        <img src={this.getNombreAutor()} alt={this.props.nombre}/>
        <label>{this.props.nombre}</label>
      </view>
    );
  }

  /*Las imagenes se encuentran en public/img */
  getNombreAutor(){
    return "img/" + this.props.nombre + ".png";
  }
}

export default Autor;
