import { FC } from 'react';

import './AboutMe.css';

const AboutMe: FC = () => {
    return (
        <div className='about-me' id='about-me'>
            <h1>/about-me</h1>
            <div className='text-section'>
                <p className='about-me-text'>
                    Hi, my name is{' '}
                    <span className='bold highlight-2'>Rachel Deng</span>. I am
                    pursuing my Honours Bachelor of Science in{' '}
                    <span className='bold'>computer science</span> and a minor
                    in{' '}
                    <span className='bold'>
                        history and philosophy of science
                    </span>{' '}
                    at the{' '}
                    <span className='bold highlight-2'>
                        University of Toronto
                    </span>
                    . I enjoy developments in technology intersected with health
                    and society.
                </p>
            </div>
            <div className='text-section'>
                <p className='about-me-text'>
                    Recently, I have been working with:
                </p>
                <div className='technologies'>
                    <ul className='row'>
                        <ul className='technology-column'>
                            <li className='technology-item'>Python</li>
                            <li className='technology-item'>React.js</li>
                            <li className='technology-item'>JavaScript ES6+</li>
                        </ul>
                        <ul className='technology-column'>
                            <li className='technology-item'>Java</li>
                            <li className='technology-item'>Svelte</li>
                            <li className='technology-item'>SQLite</li>
                        </ul>
                        <ul className='technology-column'>
                            <li className='technology-item'>C</li>
                            <li className='technology-item'>Ruby</li>
                            <li className='technology-item'>Processing</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='text-section'>
                <p className='about-me-text'>
                    Peak Diamond 2 in Valorant. Thinks <em>folklore</em> is
                    Taylor Swift&rsquo;s best album. Misses taking her dog on
                    hikes with a roll of Gold 200 back home in Vancouver,
                    British Columbia.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
