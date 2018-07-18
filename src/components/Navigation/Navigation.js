import React from 'react';
import Tilt from 'react-tilt';
import './Navigation.css';

const Navigation = () =>  {
	return (
		<nav style={{display:'flex', justifyContent:'center'}} className ="pa3 pa4-ns ma">
  			<div >
  				<Tilt className="Tilt ba2 shadow" options={{ max : 25, speed: 50}} style={{ height: 150, width: 550 }}>
  					<a className =" Tilt-inner gf dim black f1" title="Home">Tiny World</a>
				  </Tilt>
    			{/*<a class="link dim gray f6 f5-ns dib mr3" title="Home">Home</a>
    			<a class="link dim gray f6 f5-ns dib mr3" title="About">About</a>
    			<a class="link dim gray f6 f5-ns dib" title="Contact">Contact</a>*/}
  			</div>
		</nav>
	)
}

export default Navigation;