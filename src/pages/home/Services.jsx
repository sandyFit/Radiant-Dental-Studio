import React, { useState } from 'react';
import serviceCardData from '../../components/data/servicesCardData.json';
import ModalCarousel from '../../components/cards/ModalCarousel';
import ServicesCarousel from '../../components/cards/ServicesCarousel';

const Services = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
      
    console.log('Opening modal with service:', service); 
    if (service) {
        setSelectedService(service);
        setIsModalOpen(true);
    };
      
  };


  return (
    <div className='bg-white flex flex-col justify-center items-center min-h-screen space-y-12 relative'>
      <div className='flex flex-col justify-center items-center space-y-8'>
        <h2 className='text-center text-spaceCadet text-3xl md:text-5xl font-bold w-2/3 
          lg:w-2/4 xl:w-2/4 2xl:w-3/5 pt-20 lg:pt-4'>
          Discover Our Exceptional  
          <span className='text-azure' style={{ margin: ' 0 1rem' }}>
            Dental Services
          </span>         
        </h2>

        <p className='text-lightBlue text-lg md:text-xl xl:text-2xl font-semibold w-3/4 lg:w-2/4 xl:w-2/4 2xl:w-3/5'>
          We provide a wide range of treatments, including cosmetic dentistry. Our commitment is rooted in
          assisting patients in preserving lifelong healthy teeth. Trust us for diverse services aimed at
          enhancing both the aesthetics and longevity of your smile.
        </p>
      </div>


      {/* Cards Render Dynamically acording to Responsive Size */}
      <div className="flex justify-center items-center space-x-4">
        <ServicesCarousel
          services={serviceCardData}
          onClick={openModal}
          autoSlide={true}
          autoSlideInterval={6000}
        />

      </div>


      <div className="absolute top-2 md:top-[22rem] lg:top-24 left-0 md:left-[6.6rem] xl:left-[18rem] 2xl:left-[32.5rem]">
        {/* Modal rendering condition */}
        {isModalOpen && (
            <ModalCarousel
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                services={[selectedService]} // Ensure this data is structured correctly for your modal
            />
        )}
      </div>
    </div>
  )
}

export default Services;
