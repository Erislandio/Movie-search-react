import React, { Component } from 'react';
import logo from '../../logo.svg'
import './header.css'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <h1 className="header-text">MovieDb Search</h1>
            </header>
        );
    }
}

export default Header;