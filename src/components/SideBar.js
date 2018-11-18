import React, { Component } from 'react';

class SideBar extends Component {

    constructor(props) {
        super(props);

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
                    </ul>
                </nav>
            </div>
        );
    }
}

export default SideBar;