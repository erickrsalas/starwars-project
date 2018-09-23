import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component{
	render(){
		const {onSearchMovies} = this.props;

		return (
			<div className='searchBox tc pa5 flex'>
				<input id="searchInput" type='text' className='input-reset w-80 pa3 br2 br--left ba b--white'></input>
				<input 
					type='button' 
					value='Search' 
					className='input-reset br4 w-20 pa3 br2 br--right ba b--white'
					onClick={onSearchMovies}>
				</input>
			</div>
		)
	}
}

export default SearchBox;