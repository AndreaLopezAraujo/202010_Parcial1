import React, { Component } from "react";
import { usuarios } from "./Json/usuarios.json";
import { actuales } from "./Json/ofertas.json";
import Formulario from "./formulario";
import Oferta from "./oferta";
console.log(actuales);
var us = "";
var max = 0;
var PB = 0;
var PO = 0;

export default class ofertas extends Component {
  constructor() {
    super();
    this.state = {
      actuales: actuales,
      usuarios: usuarios,
      boton: true
    };
    this.handleAddUsuarios = this.handleAddUsuarios.bind(this);
    this.handleOnClik = this.handleOnClik.bind(this);
  }
  handleAddUsuarios(usuario) {
    usuarios.push(usuario);
    console.log(usuarios);
    this.setState({
      boton: false
    });
    us = usuario["Razon"];
  }
  handleOnClik = () => {
    this.valortotal();
    var r = us;
    var v = 150000000;
    if (max > 0) {
      v = max + Math.floor(Math.random() * (10000000 - 5000000)) + 5000000;
    }
    this.probabilidad()
    var val = false;
    if(PO>PB){
      val=true;
      this.setState({
        boton: true
      });
      alert("La oferta de "+r+" de $"+v+" fue aseptada")
    }
    else{ alert("La oferta de "+r+" de $"+v+" no fue aseptada")}
    var oferta = {
      valor: v,
      razon: r,
      valida: val
    };
    console.log(oferta);
    actuales.push(oferta);
    this.setState({
      actuales: [...this.state.actuales, oferta]
    });
  };
  valortotal() {
    var event = actuales;
    for (let i in event) {
      if (max < event[i].valor) max = event[i].valor;
    }
  }
  probabilidad()
  {
    PB=Math.random() * (0.8 - 0.3)+0.3
    PO=Math.random() * (0.8 - 0.3)+0.3
  }
  render() {
    return (
      <div>
        <h1>Formulario de inscripción</h1>
        <Formulario onAddUser={this.handleAddUsuarios} />
        <h1>Listado de ofertas</h1>
        {this.state.actuales.map((e, i) => (
          <Oferta key={i} oferta={e} />
        ))}
        <button
          type="submit"
          class="btn btn-primary"
          disabled={this.state.boton}
          onClick={this.handleOnClik}
        >
          Ofertar
        </button>
      </div>
    );
  }
}
