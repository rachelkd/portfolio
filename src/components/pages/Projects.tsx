import { FC } from 'react';
import Cards from '../Cards';

const Projects: FC = () => {
    return (
        <div className='flex flex-col gap-6 pb-8' id='projects'>
            <h1>/projects</h1>
            <Cards />
        </div>
    );
};

export default Projects;
