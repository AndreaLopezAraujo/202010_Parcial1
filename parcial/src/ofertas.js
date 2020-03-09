import React, { Component } from "react";
import Oferta from "./oferta";

export default class ofertas extends Component {
  state = {
    ofertas: [
      {
        author: "autor1",
        valor: "$192.982.838"
      },
      {
        author: "autor2",
        valor: "$192.982.838"
      },
      {
        author: "autor3",
        valor: "0"
      }
    ]
  };
  render() {
    return (
      <div>
        {this.state.ofertas.map(t => (
          <Oferta oferta={t} id={t.id} />
        ))}
        <button type="submit" class="btn btn-primary">Ofertar</button>
      </div>
    );
  }
}
