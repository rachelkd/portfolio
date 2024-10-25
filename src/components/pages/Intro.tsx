import { FC } from 'react';
import '../../styles/Intro.css';
import EmailIcon from '@mui/icons-material/Email';
import Icons from '../Icons';
import { TypingAnimation } from '../ui/typing-animation';
const Intro: FC = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:rachel05deng@gmail.com';
    };

    return (
        <div className='intro' id='intro'>
            <div className='text-and-btn'>
                <TypingAnimation
                    className='h1'
                    duration={85}
                    text={"nice to meet you,\ni'm rachel!"}
                />
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
