import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import '../styles/JobsList.css';

interface ExperienceItem {
    jobTitle: string;
    duration: string;
    desc: string[];
}

const experienceItems: { [key: string]: ExperienceItem } = {
    'University of Toronto Engineering Student Consulting Association': {
        jobTitle: 'UI/UX Designer and Front-End Dev @',
        duration: 'Aug. 2024 - Present',
        desc: [
            'Design 6 responsive web designs in Figma, improving cross-device compatibility and user experience',
            "Build and style 2 web pages and a component library with Next.js, React, TypeScript, and Shadcn, appealing to potential clients for the organization's consulting engineering projects",
            "Collaborate with web and executive teams to ensure clarity and intuition in the design while adhering to project deadlines and the team's vision",
            'Plan a CRUD-based approach for managing form submissions on the website, connecting with new clients and members',
        ],
    },
    'UBC Geering Up Engineering Outreach': {
        jobTitle: 'Elementary Camps Instructor @',
        duration: 'Jun. 2024 - Aug. 2024',
        desc: [
            'Programmed interactive coding curriculum in Python aimed at elementary and middle school students to facilitate STEM outreach in British Columbia',
            'Instructed over 30 dynamic STEM lessons with an emphasis on coding and physics, instilling confidence in STEM for underrepresented groups',
            'Fostered effective collaboration and communication among co-instructors and campers to teach over 300 students per week',
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
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
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
            orientation='horizontal'
            variant='scrollable'
            scrollButtons='auto'
            {...props}
            TabIndicatorProps={{
                children: <span className='MuiTabs-indicatorSpan' />,
            }}
            sx={{
                '& .MuiTabs-indicator': {
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'transparent',
                },
                '& .MuiTabs-indicatorSpan': {
                    maxWidth: 80,
                    width: '100%',
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
    marginRight: theme.spacing(1),
    maxWidth: 300,
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
        <Box sx={{ bgcolor: 'transparent' }}>
            <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label='jobs list'
            >
                {Object.keys(experienceItems).map((key, i) => (
                    <StyledTab label={key} {...a11yProps(i)} />
                ))}
            </StyledTabs>
            {Object.keys(experienceItems).map((key, i) => (
                <TabPanel value={value} index={i}>
                    <div className='joblist-headline'>
                        <span className='joblist-job-title'>
                            {experienceItems[key]['jobTitle'] + ' '}
                        </span>
                        <span className='joblist-job-company'>{key}</span>
                    </div>
                    <div className='joblist-duration'>
                        {experienceItems[key]['duration']}
                    </div>
                    <ul className='job-description'>
                        {experienceItems[key]['desc'].map(function (
                            descItem,
                            i
                        ) {
                            return <li key={i}>{descItem}</li>;
                        })}
                    </ul>
                </TabPanel>
            ))}
        </Box>
    );
}
