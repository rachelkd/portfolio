import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/CustomCard.css';

type Props = {
    projectTitle: string;
    githubLink: string;
    desc: string;
    technologiesUsed: string[];
};

const CustomCard = (props: Props) => {
    return (
        <div className='card'>
            <Box>
                <Card
                    variant='elevation'
                    sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        boxShadow: 'none',
                        height: '100%', // Ensure card takes full height
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <CardContent
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <div className='card-header'>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography variant='h5' color='primary.light'>
                                    {props.projectTitle}
                                </Typography>
                                <a
                                    className='projects-github-icon'
                                    href={props.githubLink}
                                    target='_blank'
                                >
                                    <GitHubIcon color='secondary' />
                                </a>
                            </Box>
                        </div>

                        <div className='card-body' style={{ flex: 1 }}>
                            <Typography
                                sx={{ fontSize: 14, padding: '1em 0 0 0' }}
                            >
                                {props.desc}
                            </Typography>
                        </div>

                        <div className='card-footer'>
                            <Typography
                                sx={{
                                    fontSize: 12,
                                    textTransform: 'uppercase',
                                    padding: '1em 0 0 0',
                                }}
                            >
                                {props.technologiesUsed.join(', ')}
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
};

export default CustomCard;
