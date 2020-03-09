import React, { Component } from "react";
import {usuarios} from './Json/usuarios.json'
console.log(usuarios)

export default class formulario extends Component {
  render() {
    return (
      <div>
        <form>
          <div class="form-group">
          <label for="exampleInputEmail1">NIT</label>
          <input  class="form-control" id="exampleInputEmail1"  placeholder="Número de Identificacíon Tributaria"></input>
          </div>
          <div class="form-group">
          <label for="exampleInputEmail1">Razón Social</label>
          <input  class="form-control" id="exampleInputEmail1"  placeholder="Nombre del participante"></input>
          </div>
          <button type="submit" class="btn btn-primary">Registrarse</button>
        </form>
      </div>
    );
  }
}

