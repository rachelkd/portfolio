import { FC } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import Icons from '../Icons';
import { TypingAnimation } from '../ui/typing-animation';
import { Button } from '../ui/button';

const Intro: FC = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:rachel05deng@gmail.com';
    };

    return (
        <div
            className='min-h-screen flex flex-col justify-center items-left w-full p-8'
            id='intro'
        >
            <div className='flex flex-col space-y-6 w-full'>
                <TypingAnimation
                    className='text-3xl md:text-4xl text-left'
                    duration={85}
                    text={"nice to meet you,\ni'm |rachel|!"}
                />
                <p className='text-primary'>
                    I am a computer science student at the University of
                    Toronto. I love everything technology &mdash; whether
                    it&rsquo;s to do with healthcare, education, music, or
                    visual media.
                </p>
                <div>
                    <Button
                        variant='outline'
                        className='inline-flex items-center space-x-2 text-sm whitespace-nowrap border-primary hover:border-accent-2 hover:text-accent-2 hover:bg-transparent font-bold'
                        onClick={handleEmailClick}
                    >
                        <EmailIcon className='text-xl hidden md:block mr-2' />
                        Contact me!
                    </Button>
                </div>
            </div>

            <div className='mt-8 lg:fixed lg:bottom-8 lg:right-8'>
                <Icons />
            </div>
        </div>
    );
};

export default Intro;
