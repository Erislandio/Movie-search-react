import React, { Component } from 'react';

import lupa from '../../icons/Lupa.svg'

class EmptySearch extends Component {
    render() {
        return (
            <div className="empty">
                <img src={lupa} />
                <h2>Ops!! Não encontramos nada com o nome de:</h2>
                <p>{this.props.erro}</p>
            </div>
        );
    }
}

export default EmptySearch;