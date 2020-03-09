import React from 'react';
import ReactDOM from 'react-dom';
import Formulario from './formulario'
import Ofertas from './ofertas'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


ReactDOM.render(<Formulario />, document.getElementById('root'));
ReactDOM.render(<Ofertas />, document.getElementById('ofertas'));

