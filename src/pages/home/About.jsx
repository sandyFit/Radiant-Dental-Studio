import { useState, useEffect } from 'react';
import { Element, animateScroll as scroll, scroller } from 'react-scroll';

const About = () => {
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);

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

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Element name="about" className="relative h-screen overflow-hidden">
      <div className="fixed inset-0 z-[-1] lg:bg-[url('/images/dental-office-large.jpg')] w-full h-full 
        bg-fixed bg-cover bg-no-repeat bg-center">
        {/* Empty div for background image */}
      </div>


      <div className="relative z-10 flex items-center justify-center h-full bg-spaceCadet bg-opacity-[.55] 
          text-white3">
        
        <div className={`hidden lg:block fixed right-12 lg:right-36 bottom-12 z-50 
            ${showFloatingBtn ? '' : 'invisible'}`}>
          <button
            type='button'
            className='filled-btn px-10 py-4 '
            onClick={scrollToTop}>
            Book online
          </button>
        </div>


        <div className="flex flex-col justify-center items-center">
          <h2 className='text-center text-white3 text-3xl md:text-5xl xl:text-6xl font-bold
            w-2/3 lg:w-2/4 xl:w-2/4 2xl:w-3/5'>
            Welcome to
            <span className='text-azure' style={{ margin: ' 0 1rem' }}>
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
