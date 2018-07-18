import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import UrlLink from './components/UrlLink/UrlLink';
import Particles from 'react-particles-js';
import ShortUrl from './components/ShortUrl/ShortUrl';
import Footer from './components/Footer/Footer';
import Helmet from "react-helmet";

const particlesOptions = {
  "particles": {
    "number": {
      "value": 19,
      "density": {
        "enable": false,
        "value_area": 800
      }
    },
    "color": {
      "value": "#FFFF66"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": "#000"
      },
      "polygon": {
        "nb_sides": 6
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 60,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 10,
        "size_min": 40,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 200,
      "color": "#ffffff",
      "opacity": 1,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 7,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

class App extends Component {
    constructor(){
  		super();
  		this.state = {
  			input: '',
  			route: '',
  			copyVerision: '',
  			box: {},
  			copy: ''
  		}
  	}

  	onInputChange = (event) => {
  		this.setState({input: event.target.value});
  	}

  	showURL = (data) => {
  		const shortUrl = data.shortUrl;
  		const longUrl = data.longUrl;
  		return {
  			shortUrl: shortUrl,
  			longUrl: longUrl
  		}
  	}

  	displayUrl = (box) =>{
  		this.setState({box: box});
  		this.setState({copyVerision: `08twd.com/${box.shortUrl}`});
  	}

  	onCopy =()=>{
  		this.setState({copy: true});
  	}

  	onSubmitButton = () => {
  		this.setState({route: 'showURL'});
  		fetch('https://greve-vin-83976.herokuapp.com/api/urls',
  		{ method:'post', 
  		headers: {'Content-Type' : 'application/json'}, 
  		body: JSON.stringify({ longUrl: this.state.input})})
  		.then(response => response.json())
		.then(data => this.displayUrl(this.showURL(data)))
  	}

  	//done click
  	onButtonClick = () =>{
  		this.setState({route: 'root'});
  	}
  	render() {
	    return (
		      <div className="App">
		            <Helmet>  
          				<title>Tiny World</title>
        			</Helmet>
			      	<Particles className ='particles'params= {particlesOptions}/>
			        <Navigation />
			        <UrlLink onInputChange = {this.onInputChange} onSubmitButton = {this.onSubmitButton}/>
			        {this.state.route === 'showURL'
			        	?<ShortUrl copyVersion={this.state.copyVersion} box = {this.state.box} onSubmitButton = {this.onButtonClick} onCopy = {this.onCopy} />
			        	:null}
			        <Footer />
		      </div>
	    );
  	}
}

export default App;
