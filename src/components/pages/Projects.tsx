import { FC } from 'react';
import Cards from '../Cards';
import '../../styles/Projects.css';

const Projects: FC = () => {
    return (
        <div className='projects-page' id='projects'>
            <h1>/projects</h1>
            <Cards />
        </div>
    );
};

export default Projects;
