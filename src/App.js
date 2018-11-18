import React, { Component } from 'react';
import './App.css';
import MovieRow from './components/MovieRow'
import $ from 'jquery'
import Header from './components/header/Header';
import Loader from './components/loader/Loader';
import Footer from './components/footer/Footer';
import EmptySearch from './components/empety/EmptySearch';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      text: ''
    }
    this.performSearch("avengers")
  }

  performSearch(searchTerm) {
    console.log("Perform search using moviedb")
    const urlString = `https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=${searchTerm}`
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        const results = searchResults.results
        console.log(results)
        var movieRows = []

        results.map(movie => {
          movie.poster_src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`
          console.log(movie.poster_path)
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        })

        this.setState({ rows: movieRows })
      },
      error: (xhr, status, err) => {
        console.error("erro!!", err)
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
    this.setState({ text: searchTerm })
  }

  componentDidMount() {
    this.setState({ loading: false })
  }

  render() {
    if (this.state.loading === true) {
      return <Loader />
    }

    console.log(this)
    return (
      <div className="app">
        <Header />
        <input className="input-search" style={{
          fontSize: 24,
          display: 'block',
          paddingTop: 75,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Procurar..." />
        <div className="content-form">
          {this.state.rows}
          {
            this.state.rows == false && <EmptySearch erro={this.state.text} />
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
