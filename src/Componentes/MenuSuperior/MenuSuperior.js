import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MenuSuperior.css';

class MenuSuperior extends Component {
  render() {
    return (
      <nav>
        <ul>
            <li><Link to='/MisLibros'>Mis Libros</Link></li>
            <li><Link to='/MisAutores'>Mis Autores</Link></li>
            <li><a title="MisNoticias" href="#">Mis Noticias</a></li>
            <li><a title="MiCuenta" href="#">Mi Cuenta</a></li>
            <li><a title="Opciones" href="#">Opciones</a></li>
            {/*https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf*/}
            {/*Corregido*/}
        </ul>
      </nav>
    );
  }
}

export default MenuSuperior;
