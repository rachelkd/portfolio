import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FC } from 'react';
import './Icons.css';

const Icons: FC = () => {
    const handleEmail = () => {
        window.location.href = 'mailto:rachel05deng@gmail.com';
    };
    const handleGithub = () => {
        window.open('https://github.com/rachelkd', '_blank');
    };
    const handleLinkedin = () => {
        window.open('https://www.linkedin.com/in/rachelden', '_blank');
    };

    return (
        <div className='social-media-icons'>
            <button className='btn-email-2' onClick={handleEmail}>
                <EmailIcon />
            </button>
            <button className='btn-github' onClick={handleGithub}>
                <GitHubIcon />
            </button>
            <button className='btn-linkedin' onClick={handleLinkedin}>
                <LinkedInIcon />
            </button>
        </div>
    );
};

export default Icons;
