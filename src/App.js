import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import 'font-awesome/css/font-awesome.min.css'

class App extends Component {

  constructor(props) {
    super(props);

    const movies = [
      {
        id: 0,
        title: 'Filme teste',
        overview: 'Teste teste teste'
      },
      {
        id: 1,
        title: 'Filme teste 2',
        overview: 'Teste2 teste2 teste'
      }
    ]

    let movieRows = []

    movies.map(movie => {
      console.log(movie.id)
      const movieRow = <table key={movie.id}>
        <tr>
          <td>
            <img width="125px" src="https://filmspot.com.pt/images/filmes/posters/big/446354_pt.jpg" alt="poster" />
          </td>
          <td>
            {movie.title}
          </td>
        </tr>
      </table>
      movieRows.push(movieRow)
    })

    this.state = {
      rows: movieRows
    }

  }


  render() {
    return (
      <div className="App">
        <Header />
        <span className="input-content">
          <input placeholder="Procurar..." />
          <button type="button">
            <i className="fa fa-search"></i>
          </button>
        </span>
        <main className="main">
          {this.state.rows}
        </main>
      </div>
    );
  }
}

export default App;
