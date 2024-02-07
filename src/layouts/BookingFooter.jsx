import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/Linkedin';
import TwitterIcon from '@mui/icons-material/Twitter';

const BookingFooter = () => {
    return (
        <article className='w-full flex flex-col items-center'>
            <div className="flex gap-48">
                <ul className="flex gap-24 mb-4 text-lg text-spaceCadet font-semibold">
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>                
                </ul>

                <div className='flex justify-between space-x-16 text-spaceCadet'>
                    <InstagramIcon 
                        style={{ fontSize: '2rem',  cursor: 'pointer', transition: 'opacity 0.3s' }}
                        onMouseOver={(e) => e.target.style.opacity = 0.75}
                        onMouseOut={(e) => e.target.style.opacity = 2}
                    />
                    <LinkedinIcon 
                        style={{ fontSize: '2rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                        onMouseOver={(e) => e.target.style.opacity = 0.75}
                        onMouseOut={(e) => e.target.style.opacity = 1}
                    />
                    <TwitterIcon 
                        style={{ fontSize: '2rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                        onMouseOver={(e) => e.target.style.opacity = 0.75}
                        onMouseOut={(e) => e.target.style.opacity = 1}
                    />            
                </div>
            </div>
            <div className="bg-spanishBlue w-full h-3"></div>
            <div className="bg-spaceCadet block w-full h-8"></div>
        </article>
    )
}

export default BookingFooter;
