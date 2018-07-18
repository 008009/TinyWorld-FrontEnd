import React from 'react';
import './ShortUrl.css';
import CopyToClipboard from 'react-copy-to-clipboard';
import CopyIcon from './CopyIcon.png';
import Done from './done.png';

class ShortUrl extends React.Component {
	constructor(){
		super();
		this.state = {
			copied:'',
		}
	}
	onCopy =()=> {
		this.setState({copied: true});
	}
	render() {
		const { box, onSubmitButton } = this.props;
		return(
			<div className = 'modal shortern-result'>
		    	<div className = 'container mdl-shadow--24dp'>
			    	<div className = 'left title'>{'Your short URL'}</div>
			    	<div className>
			    		<span className = 'left short-url'> 
			    			{`www.08twd.com/${box.shortUrl}`}
			    			<div>
				    			<CopyToClipboard  text={`www.08twd.com/${box.shortUrl}`} onCopy={this.onCopy}>
				    				{this.state.copied 
				    					? <img className='copyImage' title='Copied' alt='copyied' src ={Done}/> 
				    					: <img className='iconImage grow' title='Copy short URL' alt='copy' src={CopyIcon} />}
		        				</CopyToClipboard>
		        			</div>
			    		</span>
			    		<div className = 'preview'>
			    			<img alt = 'api-call' src = {`https://api.thumbnail.ws/api/abb9944b5c7c2b1e42bdd506926b652160efa392fa0a/thumbnail/get?url=${box.longUrl}&width=500`}/>	 
			    		</div>
			    		<span className> 
			    			<a className ='longUrl' href ={`${box.longUrl}`}> 
			    				{box.longUrl}
			    			</a>
			    		</span>
			    	</div> 
			    	<div className = 'right'>
			    		<button className ='done f6 link dim br2 ph3 pv2 mb2 dib white' onClick = {onSubmitButton}> 
			    			DONE
			    		</button></div>
			    </div>
	    	</div>
		)
	}
}
export default ShortUrl;