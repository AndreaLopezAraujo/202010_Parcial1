import React, { Component } from "react";
import {usuarios} from './Json/usuarios.json'
import {actuales} from './Json/ofertas.json'
import Oferta from "./oferta";
console.log(actuales)


export default class ofertas extends Component {
  constructor ()
  {
    super();
    this.state={
      actuales: actuales,
      usuarios:usuarios
    }
  }
  renderUsuarios() {
    return this.state.usuarios.length === 0 ?true: false;
  }
  render() {
    return (
      <div>
         {this.state.actuales.map( (e,i) => <Oferta key={i} oferta={e}/>)}
        <button type="submit" class="btn btn-primary" disabled={this.renderUsuarios()}>Ofertar</button>
      </div>
    );
  }
}
