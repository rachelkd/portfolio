// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
            <div className='w-full p-2 sm:p-4 md:p-6 lg:p-8'>
                <Intro />
                <AboutMe />
                <Experience />
                <Projects />
                <Navbar />
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </>
    );
}

export default App;
