import React from 'react'

class MovieRow extends React.Component {
    viewMovie() {
        // console.log("Trying to view movie")
        // console.log(this.props.movie.title)
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    render() {
        return (

            <div key={this.props.key} className="content-search">
                <div className="film-image">
                    <img src={this.props.movie.poster_src} />
                </div>
                <div className="movie-desc">
                    <h1 className="movie-title">
                        {this.props.movie.title}
                    </h1>
                    <p className="filme-desc">
                        {this.props.movie.overview}
                    </p>
                    <span className="date">
                        Data de lançamento: {this.props.movie.release_date}
                    </span>
                </div>
                <div className="buttons">
                    <button className="link" onClick={this.viewMovie.bind(this)}>
                        View
                    </button>
                </div>
            </div>

        );
    }
}

export default MovieRow