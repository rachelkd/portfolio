import { FC } from 'react';

const AboutMe: FC = () => {
    return (
        <div
            className='about-me max-w-screen-lg flex flex-col gap-6'
            id='about-me'
        >
            <h1>/about-me</h1>
            <div className='text-section'>
                <p>
                    Hi, my name is{' '}
                    <span className='font-bold'>Rachel Deng</span>. I am
                    pursuing my Honours Bachelor of Science in{' '}
                    <span className='font-bold'>computer science</span> with a{' '}
                    <span className='font-bold'>Focus in AI</span>, and a minor
                    in{' '}
                    <span className='font-bold'>
                        history and philosophy of science
                    </span>{' '}
                    and <span className='font-bold'>statistics</span> at the{' '}
                    <span className='font-bold'>University of Toronto</span>. I
                    enjoy developments in technology intersected with health and
                    society.
                </p>
            </div>
            <div className='text-section flex flex-col gap-6'>
                <p className='about-me-text'>
                    Recently, I have been working with:
                </p>
                <div>
                    <ul className='grid grid-cols-1 md:grid-cols-3 justify-between w-full'>
                        <ul className='list-none space-y-2'>
                            <li className='flex items-center gap-4 before:content-["☆"]'>
                                Java
                            </li>
                            <li className='flex items-center gap-4 before:content-["☆"]'>
                                Python
                            </li>
                            <li className='flex items-center gap-4 before:content-["☆"]'>
                                C
                            </li>
                        </ul>
                        <ul className='list-none space-y-2'>
                            <li className='flex items-center gap-4 before:content-["☆"]'>
                                Next.js
                            </li>
                            <li className='flex items-center gap-4 before:content-["☆"]'>
                                PostgreSQL
                            </li>
                            <li className='flex items-center gap-4 before:content-["☆"]'>
                                Spring Boot
                            </li>
                        </ul>
                        <ul className='list-none space-y-2'>
                            <li className='flex items-center gap-4 before:content-["☆"]'>
                                JavaScript ES6+
                            </li>
                            <li className='flex items-center gap-4 before:content-["☆"]'>
                                Svelte
                            </li>
                            <li className='flex items-center gap-4 before:content-["☆"]'>
                                Ruby
                            </li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='text-section mb-6'>
                <p className='about-me-text'>
                    Peak Diamond 2 in Valorant. Thinks <em>folklore</em> is
                    Taylor Swift&rsquo;s best album. Misses taking her dog on
                    hikes with a roll of Kodak Gold 200 back home in Vancouver,
                    British Columbia.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
