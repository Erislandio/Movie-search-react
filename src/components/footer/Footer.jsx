import React, { Component } from 'react';
import logo from '../../logo.svg'
import face from '../../icons/face.svg'
import git from '../../icons/git.svg'
import tube from '../../icons/tube.svg'



class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="social">
                    <ul>
                        <li>
                            <a href="#">
                                <img src={face} alt="facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Erislandio/">
                                <img src={git} alt="facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={tube} alt="facebook" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="footer-title">
                        <img src={logo} />
                    </h1>
                    <p className="copy">
                        Erislandio soares
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;