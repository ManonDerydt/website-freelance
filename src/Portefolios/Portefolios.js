import React from 'react';
import "./Portefolios.scss";
import ImitchefImg from "../assets/portefolios/imitchef.png"
import AndromeImg from "../assets/portefolios/androme.png"
import LibherosImg from "../assets/portefolios/libheros.png"
import ShopispotsImg from "../assets/portefolios/shopispots.png"
import { Helmet } from 'react-helmet';
import Fade from "react-reveal/Fade";

class Portefolios extends React.Component {
    render() {
        const imitchefUrl = 'https://www.imitchef.com';
        const imageUrl = `https://api.unsplash.com/photos/random?client_id=YOUR_ACCESS_KEY&query=${imitchefUrl}`;
        return (
            <div>
                {/*<Helmet>*/}
                {/*    <meta property="og:image" content={imageUrl} />*/}
                {/*    <meta property="og:title" content="My Portfolio" />*/}
                {/*    <meta property="og:description" content="Check out my portfolio" />*/}
                {/*</Helmet>*/}
                <Fade left delay={500} duration={1000}>
                    <h2 className="title-portefolios">Portefolios</h2>
                </Fade>

                <div className="block-portefolios">
                    <div className="block-1-folio">
                        <Fade delay={1000}>
                            <img src={ImitchefImg} alt="Portfolio preview" className="img-portefolios p-1" />
                        </Fade>
                        <Fade delay={1100}>
                            <img src={AndromeImg} alt="Portfolio preview" className="img-portefolios" />
                            {/*<p className="text-img">Ce texte décris mon image</p>*/}
                        </Fade>
                    </div>

                    <div className="block-1-folio">
                        <Fade delay={1200}>
                            <img src={LibherosImg} alt="Portfolio preview" className="img-portefolios p-2" />
                            {/*<p className="text-img">Ce texte décris mon image</p>*/}
                        </Fade>
                        <Fade delay={1300}>
                            <img src={ShopispotsImg} alt="Portfolio preview" className="img-portefolios" />
                            {/*<p className="text-img">Ce texte décris mon image</p>*/}
                        </Fade>
                    </div>

                    <Fade bottom delay={1500}>
                        <div className="buttons">
                            <a href="https://github.com/ManonDerydt" target="_blank">
                                <button className="btn-portefolio"  >Voir plus</button>
                            </a>
                        </div>
                    </Fade>


                </div>
            </div>

        );
    }
}

export default Portefolios;