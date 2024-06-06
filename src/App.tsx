// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages
import Intro from './components/pages/Intro';
import AboutMe from './components/pages/AboutMe';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';

// CSS
import './App.css';

function App() {
    return (
        <>
            <Intro />
            <AboutMe />
            <Experience />
            <Projects />
            <Navbar />
        </>
    );
}

export default App;
