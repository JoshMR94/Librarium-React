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
            <li><Link to='/MisNoticias'>Mis Noticias</Link></li>
            <li><Link to='/MiCuenta'>Mi Cuenta</Link></li>
            {/*<li><a title="Opciones" href="#">Opciones</a></li>*/}
            {/*https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf*/}
            {/*Corregido*/}
        </ul>
      </nav>
    );
  }
}

export default MenuSuperior;
