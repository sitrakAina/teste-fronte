import React, { Component } from 'react'

export class AjoutProduit extends Component {
	constructor(props) {
    super(props);

    this.state = {
     nom: '',
     prix:'',
     detail:'',
     photo_profil:''

    };
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }




  onChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}





  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('photo_profil', this.uploadInput.files[0]);
    data.append('nom',this.state.nom);
    data.append('prix',this.state.prix);
    data.append('detail',this.state.detail)

    fetch('http://localhost:8080/user/produit', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ photo_profil: `http://localhost:8080/user/produit/${body.photo_profil}` });
        console.log('ity ilay body.fil',body.photo_profil);
        
      });
    });
  }

    render() {
        return (
       		<div className="container">
	      		<form onSubmit={this.handleUploadImage}>
			        <label>Nom:</label>
			        	<input type="text" value={this.state.value} onChange={this.onChange} name="nom" />
			        <label>Prix:</label>
			        	<input type="text" value={this.state.value} onChange={this.onChange} name="prix" />
			        <label>Detail:</label>
			        	<input type="text" value={this.state.value} onChange={this.onChange} name="detail" />      
			        <label id="upl"><img src="images/1.jpg" alt="profile"/>File<input ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo_profil"/></label>
			       	<button>Ajouter</button>
			      </form>
	    	</div>
        );
    }
}
