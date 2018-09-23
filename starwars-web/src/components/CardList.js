import React, { Component } from 'react';
import Card from './Card';	

class CardList extends Component{
	render(){
		const {movies} = this.props;

		return(
			<div className='flex flex-wrap justify-center'>
				{
					movies.map((movie, i) => {
						return(
							<Card 
								key={movie.episode_id} 
								title={movie.title}
								director={movie.director}
								releaseDate={movie.release_date}  
							/>
						)
					})
				}
			</div>
		)
	}
}

export default CardList;