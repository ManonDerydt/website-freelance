import React, {useState} from 'react';
import "./About.scss";
import Fade from "react-reveal/Fade";
import react from "../assets/icons/react.png"
import node from "../assets/icons/node-js.png"
import sequelize from "../assets/icons/sequelize.png"
import angular from "../assets/icons/angular.png"
import ionic from "../assets/icons/ionic.png"
import bootstrap from "../assets/icons/bootstrap.png"
import mysql from "../assets/icons/mysql.png"
import sass from "../assets/icons/sass.png"
import jquery from "../assets/icons/jquery.png"
import { Document, Page } from 'react-pdf';
import anime from 'animejs';
import cv from "../assets/pdf/cv.pdf"
function About(){
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cv;
        link.download = 'cv-manon-derydt.pdf';
        link.click();
    };

        return (
            <div className="#about">
                    <div className="flex content-about">
                        <div className="content-text-about">
                            <Fade left delay={500} duration={1000}>
                                <h2 className="title-about">À propos</h2>
                            </Fade>
                            <Fade bottom delay={1000}>
                                <p className="text-about">
                                    Hey, je suis Manon et j'adore travailler sur des projets à forte valeur ajoutée qui impactent positivement
                                    la société.
                                </p>
                                <p className="text-about">
                                    Je me suis orientée vers la programmation pour prendre part à la transformation de notre quotidien grâce à l’innovation technologique en cours.
                                </p>
                                <p className="text-about">
                                    Au-delà de ma passion pour le développement, je recherche activement de nouveaux challenges professionnels aux côté d'une entreprise ambitieuse.
                                </p>
                                <div className="left">
                                    <button className="pdf" onClick={handleDownload}><a className="link-cv">Téléchargez mon CV juste ici</a></button>
                                </div>
                            </Fade>
                        </div>

                        <div className="content-block">
                            <Fade bottom delay={500}>
                                <div className="flex flex-mobile">
                                    <div className="block">
                                        <div>
                                            <img src={react} alt="react" className="icon" />
                                            <p className="text-language">ReactJs</p>
                                        </div>
                                    </div>
                                    <div className="block">
                                        <div>
                                            <img src={node} alt="node" className="icon" />
                                            <p className="text-language">NodeJS</p>
                                        </div>
                                    </div>
                                    <div className="block">
                                        <div>
                                            <img src={sequelize} alt="sequelize" className="icon" />
                                            <p className="text-language">Sequelize</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom delay={1000}>
                                <div className="flex flex-mobile">
                                    <div className="block">
                                        <div>
                                            <img src={angular} alt="angular" className="icon" />
                                            <p className="text-language">Angular</p>
                                        </div>
                                    </div>
                                    <div className="block">
                                        <div>
                                            <img src={ionic} alt="ionic" className="icon" />
                                            <p className="text-language">Ionic</p>
                                        </div>
                                    </div>
                                    <div className="block">
                                        <div>
                                            <img src={bootstrap} alt="bootstrap" className="icon" />
                                            <p className="text-language">Bootstrap</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>

                            <Fade bottom delay={1000}>
                                <div className="flex flex-mobile">
                                    <div className="block">
                                        <div>
                                            <img src={mysql} alt="mysql" className="icon" />
                                            <p className="text-language">MySQL</p>
                                        </div>
                                    </div>
                                    <div className="block">
                                        <div>
                                            <img src={sass} alt="sass" className="icon" />
                                            <p className="text-language">SASS</p>
                                        </div>
                                    </div>
                                    <div className="block">
                                        <div>
                                            <img src={jquery} alt="jquery" className="icon" />
                                            <p className="text-language">Jquery</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>

                    </div>


            </div>
        );
}

export default About;