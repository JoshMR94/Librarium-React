import React, { Component } from 'react';
import './MenuSuperior.css';

class MenuSuperior extends Component {
  render() {
    return (
      <nav>
        <ul>
            <li><a title="MisLibros" href="#">Mis Libros</a></li>
            <li><a title="MisAutores" href="#">Mis Autores</a></li>
            <li><a title="MisNoticias" href="#">Mis Noticias</a></li>
            <li><a title="MiCuenta" href="#">Mi Cuenta</a></li>
            <li><a title="Opciones" href="#">Opciones</a></li>
        </ul>
      </nav>
    );
  }
}

export default MenuSuperior;
