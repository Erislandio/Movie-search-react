import React, { Component } from 'react';

class Modal extends Component {

    constructor(props) {
        super(props);
        
    }

    closeModal(){

        this.props.closeModal();

    }
    

    render() {
        return (
            <div>
                <div id="myModal" className={(this.props.open ? ' db ' : ' dn ' ) + ' modal '}>
                    <span className="close" onClick={this.closeModal.bind(this)}>&times;</span>
                    <img className="modal-content" id="img01" src={this.props.image}/>
                    <div id="caption">
                        {this.props.title}
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;