import React from 'react';
import "./skills.scss"
import bolt from "../assets/icons/bolt.svg"
import soft from "../assets/icons/soft.svg"
import solution from "../assets/icons/solution.svg"
import flag from "../assets/icons/flag.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from "react-reveal/Fade";

class Skills extends React.Component {
    render() {
        return (
            <div>
                <h2 className="title-skills">Pourquoi collaborer avec moi ?</h2>
                <div className="flex content-icons-skills">
                    <Fade delay={1000}>
                        <div className="block-skills">
                            <img src={solution} alt={solution}/>
                            <h3 className="title-solution">Hard</h3>
                            <p className="p-skills">
                               Je peux déployer un code propre et des tests de qualité tout en respectant les meilleures pratiques.
                            </p>
                        </div>
                    </Fade>

                    <Fade delay={1200}>
                        <div className="block-skills" >
                            <img src={bolt} alt={bolt}/>
                            <h3 className="title-solution">Soft</h3>
                            <p className="p-skills">Je reste à jour et continue à développer mes connaissances afin d’apporter la meilleure expertise possible.</p>
                        </div>
                    </Fade>

                    <Fade delay={1400}>
                        <div className="block-skills">
                            <img src={soft} alt={soft}/>
                            <h3 className="title-solution">Team</h3>
                            <p className="p-skills">
                                Sociable, je peux m'intégrer rapidement à un groupe et mettre mes compétences au service du collectif.
                            </p>
                        </div>
                    </Fade>

                    <Fade delay={1600}>
                        <div className="block-skills">
                            <img src={flag} alt={flag}/>
                            <h3 className="title-solution">Solution</h3>
                            <p className="p-skills">
                                Orientée solutions, je peux prendre du recul et des initiatives qui me permettent de faire face aux difficultés.
                            </p>
                        </div>
                    </Fade>


                </div>

            </div>
        )
    }
}

export default Skills;