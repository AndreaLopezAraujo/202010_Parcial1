import React, { Component } from "react";
import Formulario from "./formulario";
import {usuarios} from './Json/usuarios.json'

export default class formularioP extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: usuarios
    };
    this.handleAddUsuarios=this.handleAddUsuarios.bind(this);
  }
  handleAddUsuarios(usuario) {
      usuarios.push(usuario);
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <Formulario onAddUsuario={this.handleAddUsuarios}/>
      </div>
    );
  }
}
