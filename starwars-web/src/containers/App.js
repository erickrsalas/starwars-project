import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: []
    }
  }

  onSearchMovies = (event) => {
    let searchField = document.getElementById('searchInput').value;

    let url = `https://swapi.co/api/films/${searchField}`;

    fetch(url).then(response => {
      return response.json();
    })
    .then(movies => {
      let moviesArray = [];
      
      if(!movies.results){
        moviesArray.push(movies)
      }else{
        moviesArray = movies.results;
      }

      this.setState({movies: moviesArray});
    })
  };

  render() {
    return (
      <div>
        <header className='main-header flex'>
            <div className="w-70 pl5 mr2">
              <img src={logo} alt='logo' className="App-logo grow"></img>
              <span className="App-title">STAR WARS</span>
            </div>
            <nav className="w-30 pa3 mr2 flex items-end">
              <a href='#' className="w-25 pa3 mr2">HOME</a>
              <a href='#' className="w-25 pa3 mr2">ABOUT</a>
            </nav>
        </header>
        <div className='container'>
          <header className='tc'>
            <h1 className='pt6'>FAN WIKI</h1>
            <p className='pa3'>Made by fans to fans</p>

            <SearchBox onSearchMovies={this.onSearchMovies} />
          </header>

          <CardList movies={this.state.movies} />
        </div>
        <footer>
          <p>2018 Erick Rodríguez Derechos Reservados</p>
        </footer>
      </div>
    );
  }
}

export default App;