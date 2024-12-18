import { FC } from 'react';
import { Star } from 'lucide-react';

const AboutMe: FC = () => {
    return (
        <div className='about-me pb-8 flex flex-col gap-6' id='about-me'>
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
                    <ul className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full'>
                        <li className='flex items-center gap-4'>
                            <Star size={16} />
                            Java
                        </li>
                        <li className='flex items-center gap-4'>
                            <Star size={16} />
                            Python
                        </li>
                        <li className='flex items-center gap-4'>
                            <Star size={16} />C
                        </li>
                        <li className='flex items-center gap-4'>
                            <Star size={16} />
                            Next.js
                        </li>
                        <li className='flex items-center gap-4'>
                            <Star size={16} />
                            PostgreSQL
                        </li>
                        <li className='flex items-center gap-4'>
                            <Star size={16} />
                            Spring Boot
                        </li>
                        <li className='flex items-center gap-4'>
                            <Star size={16} />
                            JavaScript ES6+
                        </li>
                        <li className='flex items-center gap-4'>
                            <Star size={16} />
                            Svelte
                        </li>
                        <li className='flex items-center gap-4'>
                            <Star size={16} />
                            Ruby
                        </li>
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
