// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Intro from './components/pages/Intro';
import AboutMe from './components/pages/AboutMe';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';

// CSS
// import './App.css';

function App() {
    return (
        <>
            <div className='w-full px-8 md:px-40'>
                <Intro />
                <AboutMe />
                <Experience />
                <Projects />
                <Navbar />
            </div>
            <div className='flex justify-center items-center w-full pb-8'>
                <Footer />
            </div>
        </>
    );
}

export default App;
