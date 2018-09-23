import React, { Component } from 'react';
import './Card.css';

class Card extends Component{
	render(){
		const {title, director, releaseDate} = this.props;

		return(
			<div className='card-container tc w-25 pa3 mr2'>
				<div className='card-img-container'></div>
				<div className='pv2 mv2 card-slider'>
					<h3>{title}</h3>
					<div className='detailedContent'>
						<p>Director: {director}</p>
						<p>Release Date: {releaseDate}</p>
						<a href='#'>Planets</a>
					</div>
				</div>
			</div>	
		)
	}
}

export default Card;