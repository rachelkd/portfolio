import { FC } from 'react';
import JobsList from '../JobsList';

const Experience: FC = () => {
    return (
        <div className='experience-page pb-8' id='experience'>
            <h1>/experience</h1>
            <JobsList />
        </div>
    );
};

export default Experience;
