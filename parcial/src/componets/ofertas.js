import React, { Component } from "react";
import Oferta from "./oferta";

export default class ofertas extends Component {
  componentDidMount() {
    const url = "/ofertas";
    fetch(url)
      .then(res => {
        return res.json();
      }).then(ofertas => {
        this.setState({ ofertas })
      })
  }
  state = {
    "ofertas": [
    ]
  };
  render() {
    return (
      <div>
        {this.state.ofertas.map((e, i) => <Oferta key={i} oferta={e} />)}
        <button type="submit" class="btn btn-primary" disabled="true">Ofertar</button>
      </div>
    );
  }
}
