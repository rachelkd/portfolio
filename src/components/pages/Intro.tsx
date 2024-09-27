import { FC } from 'react';
import '../../styles/Intro.css';
import EmailIcon from '@mui/icons-material/Email';
import Icons from '../Icons';

const Intro: FC = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:rachel05deng@gmail.com';
    };

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
                    <button className='btn-email' onClick={handleEmailClick}>
                        <EmailIcon
                            className='btn-email-icon'
                            style={{ fontSize: 20 }}
                        />
                        Contact me!
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
