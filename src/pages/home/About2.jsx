import FloatingBtn from '../../components/ui/FloatingBtn';

const About = () => {

  const handleScroll = () => {
    // Logic to handle the scroll event and update the visibility of the FloatingBtn
    // For example, you can check the scroll position and set a state variable
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="fixed inset-0 z-[-1]">
        <img
          src="/images/dental-office.jpg"
          alt="Background"
          className="w-full h-full object-cover filter brightness-75"
        />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full bg-spaceCadet 
        bg-opacity-[.55] text-white3">
        
        <div className="fixed right-36 bottom-12 z-[2000] invisible ">
          <FloatingBtn>
            Book online
          </FloatingBtn>
        </div>

        <div className="w-3/5">
          <h2 className='text-center text-white3 text-6xl font-bold'>
          Welcome to
          <span className='text-azure' style={{ margin: ' 0 1rem' }}>
            Radiant 
          </span>         
          Dental Studio
        </h2>
          <p className='text-2xl text-white3 font-medium mt-8'>
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
    </div>
  );
};

export default About;

