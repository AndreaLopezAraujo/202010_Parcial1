import React, { Component } from "react";

export default class formulario extends Component {
  constructor()
  {
    super();
    this.state={
      NIT:'',
      Razon:'',
      boton:false,
    };
    this.handleImput=this.handleImput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleImput(e)
  {
    const {value,id}=e.target;
    this.setState(
      {
        [id]:value
      }
    )
  };
  handleSubmit(e)
  {
    e.preventDefault();
    this.props.onAddUser(this.state);
    console.log(this.state);
    this.setState(
      {
        boton:true
      })
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
          <label htmlFor="exampleInputEmail1">NIT</label>
          <input  className="form-control" id="NIT"  placeholder="Número de Identificacíon Tributaria" onChange={this.handleImput}></input>
          </div>
          <div className="form-group">
          <label  htmlFor="exampleInputEmail1">Razón Social</label>
          <input  className="form-control" id="Razon"  placeholder="Nombre del participante" onChange={this.handleImput}></input>
          </div>
          <button type="submit" className="btn btn-primary" disabled={this.state.boton}>Registrarse</button>
        </form>
        <hr></hr>
      </div>
    );
  }
}

