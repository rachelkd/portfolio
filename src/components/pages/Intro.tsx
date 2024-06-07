import { FC, useState, useEffect } from 'react';
import './Intro.css';
import EmailIcon from '@mui/icons-material/Email';
import Icons from '../Icons';

const Intro: FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);
    const email: string = 'rachel05deng@gmail.com';

    const handleEmailClick = () => {
        window.location.href = 'mailto:rachel05deng@gmail.com';
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 960);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='intro' id='intro'>
            <div className='text-and-btn'>
                <h1>nice to meet you,</h1>
                <h1>
                    i'm <span className='highlight'>rachel</span>
                    <span className='cursor-blink'>!</span>
                </h1>
                <p>
                    I am a computer science student at the University of
                    Toronto. I love everything technology &mdash; whether
                    it&rsquo;s to do with healthcare, education, music, or
                    visual media.
                </p>
                <div className='btn'>
                    <button
                        className='btn-email'
                        onClick={handleEmailClick}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {isHovered && !isMobile ? (
                            <span className='email-text'>{email}</span>
                        ) : (
                            <span className='default-text'>
                                <EmailIcon
                                    className='btn-email-icon'
                                    style={{ fontSize: 20 }}
                                />
                                Contact me!
                            </span>
                        )}
                    </button>
                </div>
            </div>

            <div className='social-media-icons'>
                <Icons />
            </div>
        </div>
    );
};

export default Intro;
