import React, { Component } from 'react';
import logo from '../../logo.svg'
import './header.css'
import IconBar from './IconBar';
import SideBar from '../SideBar';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }

        this.openSide = this.openSide.bind(this)
    }

    openSide() {
        this.setState({ open: !this.state.open })
    }

    openLink(){
        window.location.href = 'https://www.themoviedb.org/?language=pt-BR'
    }


    render() {
        console.log(this)
        return (
            <React.Fragment>
                <header className={(this.state.open ? ' fixed ' : ' ') + ' header '}>
                    <IconBar open={this.openSide} change={this.state.open} />
                    <div className="logo" onClick={this.openLink.bind(this)}> 
                        <img src={logo} alt="logo" />
                    </div>
                </header>
                <SideBar open={this.state.open} />
            </React.Fragment>
        );
    }
}

export default Header;