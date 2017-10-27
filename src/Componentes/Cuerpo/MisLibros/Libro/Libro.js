import React, { Component } from 'react';
import './Libro.css';

class Libro extends Component {

  constructor(props){
    super(props);

    this.getNombreImagen = this.getNombreImagen.bind(this);
  }

  render() {
    return (
      <view className={this.props.className}>
        <img src={this.getNombreImagen()} alt={this.props.nombre}/>
        {/*<label>{this.props.nombre}</label>*/}
      </view>
    );
  }

  /*Las imagenes se encuentran en public/img */
  getNombreImagen(){
    return "img/" + this.props.nombre + ".png";
  }
}

export default Libro;
