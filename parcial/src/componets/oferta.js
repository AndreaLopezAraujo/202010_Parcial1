import React, { Component } from 'react'

export default class oferta extends Component {
    state = {
        "oferta": this.props.oferta
      };
    renderOfert() {
        return this.state.valor == "0" ? <b>"Oferta no aseptada"</b>: this.state.valor;
      }
    render() {
        return (
            <div>
                <p>{this.state.author} [<span>{this.renderOfert()}</span>]</p>
            </div>
        )
    }
}
