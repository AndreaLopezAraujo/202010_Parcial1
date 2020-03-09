import React, { Component } from 'react'

export default class oferta extends Component {
    state = {
        "oferta": this.props.oferta
      };
    renderOfert() {
        return this.state.oferta.valida === false ?"Oferta no aseptada": <b>Oferta aceptada. valor:${this.state.oferta.valor}</b>;
      }
    render() {
        return (
            <div>
                <p>{this.state.oferta.razon} [<span>{this.renderOfert()}</span>]</p>
            </div>
        )
    }
}
