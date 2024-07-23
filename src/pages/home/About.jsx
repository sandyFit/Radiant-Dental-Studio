import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Element, animateScroll as scroll, scroller } from 'react-scroll';
import { ArrowUpward } from '@mui/icons-material';

const About = () => {
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Adjust the scroll threshold based on your layout
    const scrollThreshold = 100;

    if (scrollPosition > scrollThreshold) {
      setShowFloatingBtn(true);
    } else {
      setShowFloatingBtn(false);
    }
  };

  const handleClick = () => {
    navigate('book');
    
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Element name="about" className="relative h-screen py-24 bg-custom-gradient-bg-inverse flex justify-center">
      <div className="relative lg:bg-[url('/images/dental-office-large.jpg')] w-[80%] h-full 
         bg-auto bg-no-repeat bg-center rounded-3xl">       
      {/* Opacity Layer */}
      <div className="absolute inset-0 bg-spaceCadet bg-opacity-[.70] rounded-3xl"></div>
    </div>


      <div className="absolute left-0 top-0 z-10 flex items-center justify-center h-full 
          text-white3">
        
        
        
        {/* Fixed Book Online Button */}
      <div className={`fixed right-40 bottom-[90px] z-50 ${showFloatingBtn ? '' : 'invisible'}`}>
        <button
          type='button'
          className='btn-filled px-10 py-3.5'
          onClick={handleClick}>
          Book online
        </button>
      </div>

      {/* Fixed ArrowTop Button */}
        <button onClick={scrollToTop}
          className={`fixed left-[110rem] bottom-[90px] group inline-flex h-12 w-12 items-center justify-center overflow-hidden 
            rounded-full bg-spaceCadet border-2 border-spanishBlue ${showFloatingBtn ? '' : 'invisible'}`}>
            <div className="transition duration-300 group-hover:rotate-[360deg] text-spanishBlue">
                <ArrowUpward style={{fontSize: '2rem'}}/>
            </div>
        </button>


        <div className="flex flex-col justify-center items-center">
          <h2 className='text-center text-white3 text-3xl md:text-5xl xl:text-6xl font-bold
            w-2/3 lg:w-2/4 xl:w-2/4 2xl:w-3/5'>
            Welcome to
            <span className='text-spanishBlue text-shadow' style={{ margin: ' 0 1rem' }}>
              Radiant 
            </span>         
            Dental Studio
          </h2>
          <p className='text-lg md:text-xl xl:text-2xl text-white3 font-medium mt-8 w-3/4 lg:w-2/4 xl:w-2/4 2xl:w-3/5'>
            At Radiant Dental Studio, your well-being is our top priority. We cultivate robust dentist-patient
            relationships by prioritizing your needs.
            <br/><br/>
            With cutting-edge equipment, we deliver exceptional dental care, ensuring your interests come first
            for a healthier, brighter smile.
            <br/><br/>
            Serving all ages in Northern New Jersey, our state-of-the-art facility in Jersey City offers a
            welcoming environment. Trust us for comprehensive dental care with a commitment to excellence.
          </p>
          
        </div>
      </div>

      {/* Scroll spy element for the 'about' section */}
      <Element name="about-scroll-spy" className="scroll-spy" />

      {/* Scroll event listener */}
      {typeof window !== 'undefined' && (
        window.addEventListener('scroll', handleScroll)
      )}
    </Element>
  );
};

export default About;
