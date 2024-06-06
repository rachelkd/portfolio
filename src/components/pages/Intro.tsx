import { FC } from 'react';
import './Intro.css';

const Intro: FC = () => {
    return (
        <div className='intro' id='intro'>
            <h1>nice to meet you,</h1>
            <h1>
                i'm <span className='highlight'>rachel</span>!
            </h1>
            <p>
                I am a computer science student at the University of Toronto. I
                love everything technology -- whether it’s to do with
                healthcare, education, music, or visual media.
            </p>
            <div className='btn'>contact me</div>
        </div>
    );
};

export default Intro;
