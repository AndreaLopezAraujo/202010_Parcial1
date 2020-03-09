import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Formulario from './formulario'
import Ofertas from './ofertas'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


ReactDOM.render(<Formulario />, document.getElementById('root'));
ReactDOM.render(<Ofertas />, document.getElementById('ofertas'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
