import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/Linkedin';
import TwitterIcon from '@mui/icons-material/Twitter';

const BookingFooter = () => {
    return (
        <article className='w-full flex flex-col items-center'>          
            
            <ul className="flex justify-center items-center gap-24 text-lg text-spaceCadet font-semibold">
                <li>Terms of Use</li>
                <li>Privacy Policy</li>                
            </ul>

            <div className="bg-spanishBlue w-full h-3 mt-6"></div>

            <div className="bg-spaceCadet flex flex-col items-center w-full h-auto py-6 px-24">
in main
                <div className='flex justify-evenly w-1/2 text-slate-200 m-6'>
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
                
                <div className="flex justify-center items-center">
                    <p className="text-lg font-light text-white3">
                        © 2024 Design & Development by Trish Ramos. All rights reserved. 
                    </p>
                </div>           
            </div>
        </article>
    )
}

export default BookingFooter;
