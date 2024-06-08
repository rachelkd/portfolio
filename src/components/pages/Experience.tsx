import { FC } from 'react';
import JobsList from '../JobsList';
import '../../styles/Experience.css';

const Experience: FC = () => {
    return (
        <div className='experience-page' id='experience'>
            <h1>/experience</h1>
            <JobsList />
        </div>
    );
};

export default Experience;
