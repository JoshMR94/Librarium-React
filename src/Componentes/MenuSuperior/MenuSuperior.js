import React, { Component } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 62af7b0eeca4927237537cd9c4560d975d4fb60a
import './MenuSuperior.css';

class MenuSuperior extends Component {
  render() {
    return (
      <nav>
        <ul>
<<<<<<< HEAD
            <li><Link to='/MisLibros'>MisLibros</Link></li>
=======
            <li><a title="MisLibros" href="#">Mis Libros</a></li>
>>>>>>> 62af7b0eeca4927237537cd9c4560d975d4fb60a
            <li><a title="MisAutores" href="#">Mis Autores</a></li>
            <li><a title="MisNoticias" href="#">Mis Noticias</a></li>
            <li><a title="MiCuenta" href="#">Mi Cuenta</a></li>
            <li><a title="Opciones" href="#">Opciones</a></li>
<<<<<<< HEAD
            {/*https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf*/}
=======
>>>>>>> 62af7b0eeca4927237537cd9c4560d975d4fb60a
        </ul>
      </nav>
    );
  }
}

export default MenuSuperior;
