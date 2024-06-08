import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className='footer-page'>
            <p className='footer-text'>
                Coded by <span className='footer-highlight'>Rachel Deng</span>.
                Designed in <span className='footer-highlight'>Figma</span>.
                Built with <span className='footer-highlight'>Vite</span> and
                deployed with <span className='footer-highlight'>Netlify</span>.
                Inspired by{' '}
                <a
                    className='footer-highlight'
                    href='https://gazijarin.com/'
                    target='_blank'
                >
                    Gazi Jarin
                </a>
                &rsquo;s website.
            </p>
        </div>
    );
};

export default Footer;
