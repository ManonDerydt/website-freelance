import React, {useState} from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import M2 from '../assets/M-2.png';
import Fade from 'react-reveal/Fade';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    state = {
        menuOpen: false
    };

    handleMenuToggle = () => {
        this.setState({ menuOpen: !this.state.menuOpen });
    };

    render() {

        return (
            <aside className="navbar-container">
                <Fade delay={4500}>
                    <nav className="navbar">
                        <button className="menu-btn" onClick={this.handleMenuToggle}>
                            <div className="menu-icon"></div>
                        </button>
                        <img src={M2} className="App-logo" alt={logo} />
                        <div id="content-menu" className="content-menu">
                            <div className="menu-desktop" id="menu">
                                <div className="li">
                                    <a
                                        className="link-menu-desktop"
                                        href="#home"
                                        onClick={() => {
                                            this.handleClick();
                                        }}
                                    >
                                        Accueil
                                    </a>
                                </div>
                                <div className="li">
                                    <a className="link-menu-desktop" href="#about">
                                        À propos
                                    </a>
                                </div>
                                <div className="li">
                                    <a className="link-menu-desktop" href="#portefolios">
                                        Portefolios
                                    </a>
                                </div>
                                <div className="li">
                                    <a className="link-menu-desktop" href="#skills">
                                        Plus-value
                                    </a>
                                </div>
                                <div className="li">
                                    <a className="link-menu-desktop" href="#contact">
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </Fade>
            </aside>
        );
    }
}

export default Navbar;