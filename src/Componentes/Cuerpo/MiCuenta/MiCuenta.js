import React, { Component } from 'react';
import './MiCuenta.css';

import { FormErrors } from './FormErrors';

class MiCuenta extends Component {

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValido: false,
      passwordValido: false,
      formValid: false
    }
  }

  /* Handler para el evento de escritura. Al cambiar los elementos del formulario, valida */
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValido = this.state.emailValido;
    let passwordValido = this.state.passwordValido;

    switch(fieldName) {
      case 'email':
        emailValido = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValido ? '' : ' no valido.';
        break;
      case 'password':
        passwordValido = value.length >= 6;
        fieldValidationErrors.password = passwordValido ? '': ' muy corta.';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValido: emailValido,
                    passwordValido: passwordValido
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValido && this.state.passwordValido});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <div id ="formularioLogin">
        <form className="formulario">
          <h2>Conectarse a su cuenta</h2>
          <div className="validacion">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
            {/*<label htmlFor="email">Email address</label>*/}
            <input type="email" required name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleUserInput}  />
          </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
            {/*<label htmlFor="password">Password</label>*/}
            <input type="password" name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleUserInput}  />
          </div>
          <button type="submit" disabled={!this.state.formValid}>Conectarse</button>
        </form>
      </div>
    )
  }
}

export default MiCuenta;

