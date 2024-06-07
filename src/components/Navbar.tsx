import { FC } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

const Navbar: FC = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <ul className='nav-menu'>
                        <li className='nav-item'>
                            <Link
                                to='intro'
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                /home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='about-me'
                                spy={true}
                                smooth={true}
                                offset={-20}
                                duration={500}
                            >
                                /about-me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='experience'
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                /experience
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='projects'
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                /projects
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
