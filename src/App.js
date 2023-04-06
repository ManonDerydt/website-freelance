import logo from './logo.svg';
import './App.scss';
import React, {useState, useEffect} from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Portefolios from "./Portefolios/Portefolios";
import Skills from "./Skills/skills";
import About from "./About/About";
import Contact from "./Contact/Contact";
import ParticleBackground from "./Home/particlesBackground";
import Canvas from "./Canvas";

function App() {
    const [activeSection, setActiveSection] = useState(null);

    const handleSectionMouseEnter = (id) => {
        setActiveSection(id);
    };

    const handleSectionMouseLeave = () => {
        setActiveSection(null);
    };

    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPos = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', updateCursorPos);

        return () => {
            document.removeEventListener('mousemove', updateCursorPos);
        };
    }, []);
  return (
    <div className="App">
        <div>
            <div className="cursor" style={{ left: cursorPos.x, top: cursorPos.y }} />
        </div>

      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>
        <div>
            <section>
                <Navbar />
            </section>

            <section id="home">
                <Home />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="portefolios">
                <Portefolios />
            </section>

            <section id="skills">
                <Skills />
            </section>

            <section id="contact">
                <Contact />
            </section>
            <Canvas />
        </div>

    </div>

  );


}

export default App;
