import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard.js';
import { Login } from './components/Login/Login.js';
import { Signup } from './components/Signup/Signup.js';
import { PrivateRoute } from './components/PrivateRoute.js';
import {Produit} from './components/Produits/ListProd';
import {AjoutProduit} from './components/Produits/AjoutProd';
import {UpdateProd} from './components/Produits/UpdateProd';
import {StatProd} from './components/Produits/Statistique';
import {Home} from './components/Page/Home'
import './App.css';

class App extends Component {
        render() {
        return (
        <div className="App">
            <div className="App-content">
                <Switch>  
                    <Route exact path="/produit" component={Produit} />
                    <Route exact path="/Ajout" component={AjoutProduit} />
                    <Route exact path="/Update" component={UpdateProd} />
                    <Route exact path="/stat" component={StatProd} />
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path ="/signup" component={Signup}/>
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                </Switch>
            </div>
        </div>
        );
    }
}
export default App;
