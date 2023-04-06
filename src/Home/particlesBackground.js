import React, { Component } from 'react';
import Particles from 'particles.js';

class ParticlesComponent extends Component {
    componentDidMount() {
        this.particles = Particles.init({
            // Options de configuration
        });
    }

    componentWillUnmount() {
        this.particles.destroy();
    }

    render() {
        return (
            <div id="particles-js"></div>
        );
    }
}

export default ParticlesComponent;