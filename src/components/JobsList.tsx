import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled, useTheme } from '@mui/material/styles';

interface ExperienceItem {
    jobTitle: string;
    duration: string;
    desc: string[];
}

const experienceItems: { [key: string]: ExperienceItem } = {
    'Fable Social': {
        jobTitle: 'Software Engineer @',
        duration: 'Nov. 2024 - Present',
        desc: [
            'Designed and implemented 8+ RESTful API backend using Firebase Cloud Functions and Flask for authentication and CRUD operations',
            'Led development of view tracking features to provide engagement metrics for 50+ club users',
            'Integrated contextual toast notifications across 20 frontend components, improving user experience for 1,000 users',
            'Developed docker containers to reduce onboarding time by 70% for 8 engineers on the team',
        ],
    },
    'University of Toronto Engineering Student Consulting Association': {
        jobTitle: 'UI/UX Designer and Front-End Dev @',
        duration: 'Aug. 2024 - Present',
        desc: [
            'Designed 6 responsive web designs in Figma, improving cross-device compatibility and user experience',
            'Built and styled 2 web pages and a component library of 10+ components with Next.js, React, TypeScript, and Shadcn, appealing to 5+ clients for consulting engineering projects',
            'Led monthly design reviews with web and executive teams, result in 50% fewer design revisions',
        ],
    },
    'UBC Geering Up Engineering Outreach': {
        jobTitle: 'Elementary Camps Instructor @',
        duration: 'Jun. 2024 - Aug. 2024',
        desc: [
            'Programmed interactive coding curriculum in Python aimed at elementary and middle school students to facilitate STEM outreach in British Columbia',
            'Instructed 30+ dynamic STEM lessons with an emphasis on coding and physics, instilling confidence in STEM for underrepresented groups',
            'Trained and collaborated with 30+ co-instructors and campers to teach over 300 students per week',
        ],
    },
    'Crofton House School': {
        jobTitle: 'Graduation Committee Captain @',
        duration: 'Sept. 2022 - Jun. 2023',
        desc: [
            'Created a Google Apps script to facilitate the printing of 700 labels based on Google Form responses',
            'Fundraised over $1,730 and conducted a formal wear drive for the Cinderella Project organization',
        ],
    },
};

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            className='w-full'
            {...other}
        >
            {value === index && <div className='w-full p-8'>{children}</div>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => {
    const theme = useTheme();
    return (
        <Tabs
            {...props}
            orientation='vertical'
            variant='scrollable'
            scrollButtons='auto'
            TabIndicatorProps={{
                children: <span className='MuiTabs-indicatorSpan' />,
            }}
            className='border-r border-[#FF7A91]'
            sx={{
                '& .MuiTabs-indicator': {
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'transparent',
                    height: '100%',
                    right: 0,
                    left: 'auto',
                },
                '& .MuiTabs-indicatorSpan': {
                    maxWidth: 4,
                    width: '100%',
                    height: '100%',
                    backgroundColor: theme.palette.primary.contrastText,
                },
            }}
        />
    );
})({});

interface StyledTabProps {
    label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    minWidth: '200px',
    textAlign: 'left',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(1),
    color: theme.palette.text.disabled,
    transition: 'color 0.3s ease-in-out',
    '&.Mui-selected': {
        color: theme.palette.primary.contrastText,
    },
    '&.Mui-focusVisible': {
        backgroundColor: theme.palette.primary.contrastText,
    },
}));

export default function JobsList() {
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className='flex flex-col md:flex-row bg-transparent'>
            <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label='jobs list'
            >
                {Object.keys(experienceItems).map((key, i) => (
                    <StyledTab key={i} label={key} {...a11yProps(i)} />
                ))}
            </StyledTabs>
            <div className='flex-1'>
                {Object.keys(experienceItems).map((key, i) => (
                    <TabPanel key={i} value={value} index={i}>
                        <div className='w-full space-y-4'>
                            <div className='w-full space-y-4'>
                                <div className='w-full flex flex-wrap'>
                                    <span className='font-bold text-accent'>
                                        {experienceItems[key]['jobTitle']}&nbsp;
                                    </span>
                                    <span className='font-bold text-accent'>
                                        {key}
                                    </span>
                                </div>
                                <div className='w-full text-sm font-bold uppercase'>
                                    {experienceItems[key]['duration']}
                                </div>
                            </div>

                            <ul className='w-full list-disc ml-4 space-y-2'>
                                {experienceItems[key]['desc'].map(
                                    (descItem, i) => (
                                        <li key={i} className='w-full'>
                                            {descItem}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </TabPanel>
                ))}
            </div>
        </div>
    );
}
