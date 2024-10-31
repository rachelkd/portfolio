import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FC } from 'react';

const Icons: FC = () => {
    return (
        <div className='flex flex-row items-center gap-3'>
            <a
                className='hidden md:block hover:text-accent-2 transition-colors'
                href='mailto:rachel05deng@gmail.com'
                aria-label='Email'
            >
                <EmailIcon />
            </a>
            <a
                className='hover:text-accent-2 transition-colors'
                href='https://github.com/rachelkd'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'
            >
                <GitHubIcon />
            </a>
            <a
                className='hover:text-accent-2 transition-colors'
                href='https://www.linkedin.com/in/rachelden'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
            >
                <LinkedInIcon />
            </a>
        </div>
    );
};

export default Icons;
