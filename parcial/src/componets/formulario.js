import React, { Component } from "react";
import {usuarios} from './Json/usuarios.json'
console.log(usuarios)

export default class formulario extends Component {
  constructor()
  {
    super();
    this.state={
      NIT:'',
      Razon:''
    };
    this.handleImput=this.handleImput.bind(this);

  }
  handleImput(e)
  {
    const {value,id}=e.target;
    this.setState(
      {
        [id]:value
      }
    )
    console.log("aqui");
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form>
          <div class="form-group">
          <label for="exampleInputEmail1">NIT</label>
          <input  class="form-control" id="NIT"  placeholder="Número de Identificacíon Tributaria" onChange={this.handleImput}></input>
          </div>
          <div class="form-group">
          <label for="exampleInputEmail1">Razón Social</label>
          <input  class="form-control" id="Razon"  placeholder="Nombre del participante" onChange={this.handleImput}></input>
          </div>
          <button type="submit" class="btn btn-primary">Registrarse</button>
        </form>
      </div>
    );
  }
}

