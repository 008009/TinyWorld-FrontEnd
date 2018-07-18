import React from 'react';
import './UrlLink.css';

const UrlLink = ({onInputChange, onSubmitButton}) => {
	return (
		<div className = 'urlLink-gf'>
			<p className = 'f4'>
				{"This app can transfer your long URL to short URL. Give a try!"}
			</p>
			<div className = 'center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' placeholder='Enter your long URL HERE!' name='longUrl' type='text' onChange = {onInputChange}/>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-blue' onClick = {onSubmitButton} > Transfer</button>
				</div>
			</div>
		</div>
	)
};

export default UrlLink;
// 