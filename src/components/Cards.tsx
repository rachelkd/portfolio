import CustomCard from './CustomCard';
import '../styles/Cards.css';

interface ProjectItems {
    githubLink: string;
    desc: string;
    technologiesUsed: string[];
}

const projectItems: { [key: string]: ProjectItems } = {
    Spotiscover: {
        githubLink: 'https://github.com/rachelkd/spotiscover',
        desc: 'A web application that recommends songs to users based on their liked songs',
        technologiesUsed: ['Python', 'Flask'],
    },
    'Escaping UofT': {
        githubLink: 'https://github.com/rachelkd/escaping-uoft',
        desc: 'A text adventure game played in the command line interface',
        technologiesUsed: ['Python'],
    },
    Loqui: {
        githubLink: 'https://github.com/DanielTong50/loqui',
        desc: 'An application that assists with communication for people with speech disorders',
        technologiesUsed: ['Svelte'],
    },
    Pomo: {
        githubLink: 'https://github.com/rachelkd/pomo',
        desc: 'A minimalistic pomodoro timer with adjustable work and break settings',
        technologiesUsed: ['Svelte'],
    },
    Bookmarklet: {
        githubLink: 'https://github.com/rachelkd/bookmarklet',
        desc: 'An application that creates browser bookmarks that copy user-specified text to their device’s clipboard',
        technologiesUsed: ['Python'],
    },
};

const Cards = () => {
    return (
        <div className='cards-container'>
            {Object.keys(projectItems).map((key) => (
                <div className='card'>
                    <CustomCard
                        key={key}
                        projectTitle={key}
                        githubLink={projectItems[key].githubLink}
                        desc={projectItems[key].desc}
                        technologiesUsed={projectItems[key].technologiesUsed}
                    />
                </div>
            ))}
        </div>
    );
};

export default Cards;
