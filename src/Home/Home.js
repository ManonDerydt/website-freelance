import React, {useEffect, useState, useRef} from 'react';
import "./Home.scss";
import TypingEffect from './TypingEffect';
import Fade from 'react-reveal/Fade';
import menu from "../assets/icons/menu.png"
import cross from "../assets/icons/cross.png"
import { CSSTransition } from 'react-transition-group';

let handleClick = () => {
    // Effectuer la redirection vers la section "About"
    window.location.href = '#about';
    '#about'.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

class Home extends React.Component {

    state = { show: false };
    constructor(props) {
        super(props);

        this.state = {
            showButton: false,
            words: [],
            currentIndex: 0,
            apparaitre: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.addWord = this.addWord.bind(this);

    }

    handleClick() {
        this.setState({ show: !this.state.show });
        this.setState(prevState => ({
            apparaitre: !prevState.apparaitre
        }));
    }

    componentDidMount() {
        this.addWord("Hello,\nJe suis Manon\nDéveloppeuse Web");
    }

    scrollToSection = (id) => {
        const section = document.getElementById(id);
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        });
    };

    addWord(word) {
        const { words } = this.state;

        this.setState({
            words: [...words, word],
            currentIndex: this.state.currentIndex + 1,
        });

        if (this.state.currentIndex === words.length) {
            this.setState({
                showButton: true
            });
        }
    }

    render() {

        const { words, currentIndex, showButton } = this.state;

        function scrollToSection(id) {
            const section = document.getElementById(id);
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        }

        return (

            <div>
                <Fade>
                    <div className="background" >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Fade>

                <div className="content-header">
                    <div>
                        {this.state.apparaitre ? (
                            <Fade right duration={500}>
                            <div className="content-mobile-menu">
                                <ul className="ul-mobile">
                                        <li className="li-mobile">
                                            <a className="link-menu" href="#home" onClick={() => this.setState({ apparaitre: false })}>
                                                Accueil
                                            </a>
                                        </li>
                                        <li className="li-mobile">
                                            <a className="link-menu" href="#about" onClick={() => this.setState({ apparaitre: false })}>
                                                A propos
                                            </a>
                                        </li>
                                        <li className="li-mobile">
                                            <a className="link-menu" href="#portefolios" onClick={() => this.setState({ apparaitre: false })}>
                                                Portefolios
                                            </a>
                                        </li>
                                        <li className="li-mobile">
                                            <a className="link-menu" href="#skills" onClick={() => this.setState({ apparaitre: false })}>
                                                Plus-value
                                            </a>

                                        </li>
                                        <li className="li-mobile">
                                            <a className="link-menu" href="#contact" onClick={() => this.setState({ apparaitre: false })}>
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                            </div>
                            </Fade>
                        ) : null}
                        <img src={this.state.apparaitre ? cross : menu} className="menu" onClick={this.handleClick} />
                    </div>


                    <div className="flex">
                        <div className="title">
                            {words.slice(0, currentIndex).map((word, index) => (
                                <React.Fragment key={index}>
                                    <TypingEffect text={word} delay={100} />
                                    <br />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className="flex">
                        <div className="block-subtitle">
                            <Fade left delay={3000} duration={2000}>
                                <p className="balise">&lt;p&gt;</p>

                                <p className="subtitle">
                                    Développeuse fullstack web et mobile
                                </p>
                                <p className="balise">&lt;/p&gt;</p>
                            </Fade>
                            <Fade bottom delay={3000}>
                            <div className="content-back-header">
                                {showButton &&

                                        <div className="buttons">
                                            <button className="raise-home link-contact" href="#contact"><a href="#" className="link-contact" onClick={() => scrollToSection("contact")}>Contactez-moi !</a></button>
                                        </div>
                                }
                                <div>
                                    <a href="#" className="link-scroll" onClick={() => scrollToSection("about")}>
                                        <div className="spinner">
                                            <div className="spinner1">
                                                <p className="p-down">Scroll</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            </Fade>
                        </div>

                        {/*<Fade right delay={3000}>*/}
                        {/*    <img className="scroll" src={scroll} onClick={handleClick} />*/}
                        {/*</Fade>*/}

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;