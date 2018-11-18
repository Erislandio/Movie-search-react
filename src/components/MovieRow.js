import React from 'react'
import Modal from './Modal';
import Loader from './loader/Loader';

class MovieRow extends React.Component {
    viewMovie() {
        // console.log("Trying to view movie")
        // console.log(this.props.movie.title)
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            loading: true
        }

        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ open: !this.state.open })
    }

    componentDidMount() {
        this.setState({ loading: false })
    }

    render() {

        if(this.state.loading === true){
            return (
                <Loader />
            );
        }

        return (
            
            (<div key={this.props.key} className="content-search">
                <div className="film-image" onClick={this.openModal.bind(this)}>
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
                <Modal image={this.props.movie.poster_src} title={this.props.movie.title} open={this.state.open} closeModal={this.openModal} />
            </div>)

        );
    }
}

export default MovieRow