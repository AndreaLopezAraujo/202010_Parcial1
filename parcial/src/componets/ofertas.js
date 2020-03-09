import React, { Component } from "react";
import {usuarios} from './Json/usuarios.json'
import {actuales} from './Json/ofertas.json'
import Formulario from './formulario';
import Oferta from "./oferta";
console.log(actuales)
var booton=false

export default class ofertas extends Component {
  constructor ()
  {
    super();
    this.state={
      actuales: actuales,
      usuarios:usuarios,
      boton:true
    }
    this.handleAddUsuarios=this.handleAddUsuarios.bind(this);
  }
  handleAddUsuarios(usuario)
  {
    usuarios.push(usuario);
    console.log(usuarios);
    this.setState(
      {
        boton:false
      }
    )
    
    console.log(this.state.boton)
  };
  render() {
    return (
      <div>
        <h1>Formulario de inscripción</h1>
        <Formulario onAddUser={this.handleAddUsuarios}/>
        <h1>Listado de ofertas</h1>
         {this.state.actuales.map( (e,i) => <Oferta key={i} oferta={e}/>)}
        <button type="submit" class="btn btn-primary" disabled={this.state.boton}>Ofertar</button>
      </div>
    );
  }
}
