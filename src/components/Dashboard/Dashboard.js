import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'
import { Link } from 'react-router-dom'
import {Produit} from '../Produits/ListProd';
// import {AjoutProduit} from './components/Produits/AjoutProd';
// import {UpdateProd} from './components/Produits/UpdateProd';
// import {StatProd} from './components/Produits/Statistique'
import API from '../../utils/API';

export class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.disconnect.bind(this);
    }
    disconnect = event => {
        API.logout();
        window.location = "/";
    }
    render() {
        return(
            <div className="body">
                <div className="container" id="Dashboard">
                  <nav class="navbar navbar-light bg-light justify-content-between">
                    <a class="navbar-brand">Dashboard</a>
                    <form class="form-inline">
                      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.disconnect}>Se déconnecter</button>
                    </form>
                  </nav>
              </div>
              <div class="container">
                  <div class="row">
                    <div class="col-sm-3 col-md-2 sidebar">
                        <div id="menu_dynamique">
                          <div class="vertical-menu">
                              <Link to="/produit">Produit</Link>
                              <Link to="/ajout">Ajout Produit</Link>
                              <Link to="/update">Mise à Jour</Link>
                              <Link to="/stat">Statistique</Link>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                        <Produit />
                  </div>
              </div>
            </div>
        )
    }
}