import React, { Component, Fragment } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Home extends Component {
	constructor(props) {
        super(props);
        this.state = { produit: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8080/user/produit')
            .then(response => {
                console.log('i am a response', response)
                this.setState({ produit: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })        

    }

     render(){
	    return(
	    	<div className="container">
		        <div className="card-group row">
			        {
			         	(this.state.produit.length > 0) ? (this.state.produit.map((obj) => {

			          	return(<div key = {obj.id} className="col-md-3">
			            	<Fragment>
			                	<div className="card" id="produit">
			                    	<img width="50px" height="150px" src={'http://localhost:8080/user/produit/'+obj.photo_profil} alt="pdp" class="card-img-top"/>
			                            <div className="card-body">
			                                <h5 className="card-title">{obj.nom}</h5>
			                                <p className="card-text" id="point">{obj.detail}</p>
			                                <p className="card-text" id="number">{obj.prix}Ar</p>
			                            </div>   
			                             <div className="card-footer">
			                             	<span class="float-left">{obj.prix}Ar</span>
			                                <span class="float-right">
										        <a data-toggle="tooltip" data-placement="top" title="Add to Cart"><i class="fas fa-shopping-cart mr-3"></i></a>
										        <a data-toggle="tooltip" data-placement="top" title="Share"><i class="fas fa-share-alt mr-3"></i></a>
										        <a class="active" data-toggle="tooltip" data-placement="top" title="Added to Wishlist"><i class="fas fa-heart"></i></a>
										     </span>
			                             </div>
			                    </div>
			              	</Fragment>
			            </div>)

			            })
			          	) : ('')
			        }
	           
		      	</div>
	     	</div>
	    )
	  }
}
