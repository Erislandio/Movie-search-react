import React, { Component } from 'react';

class SideBar extends Component {

    constructor(props) {
        super(props);

    }

    openLink(){
        window.location.href = 'https://github.com/Erislandio/Movie-search-react'
    }

    render() {
        return (
            <div className={(this.props.open ? ' open ' : ' ') + ' sidebar '}>
                <nav>
                    <ul>
                        <li>
                            MovieDb Search
                            <p>Procure por filmes, series, animes ...</p>
                        </li>
                        <li>
                            <a className="link-to-code " onClick={this.openLink.bind(this)}>
                                veja o codigo completo aqui...
                                <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="code" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default SideBar;