import React from 'react';
import "./Navbar.css";
import logo from "../assets/logo.png";

const handleClick = () => {
    console.log('Button clicked');
};

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                    <img src={logo} className="App-logo" alt={logo} />
                <ul className="menu">
                    <li className="li"><a href="src#">Accueil</a></li>
                    <li className="li"><a href="src#">Moi</a></li>
                    <li className="li"><a href="src#">Portefolios</a></li>
                    <button label="Click me" onClick={handleClick} className="my-button" >
                        Contactez-moi !
                    </button>
                </ul>
            </nav>
        );
    }
}

export default Navbar;