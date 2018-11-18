import React, { Component } from 'react';

class IconBar extends Component {

    constructor(props) {
        super(props);
        
    }

    openSideBar(){
        this.props.open();
    }
    

    render() {
        return (
            <div className={(this.props.change ? ' change ' : ' ') + ' container '} onClick={this.openSideBar.bind(this)}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        );
    }
}

export default IconBar;