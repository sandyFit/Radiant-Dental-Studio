import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Modal from '../ui/Modal';

const ModalCarousel = ({ isOpen, services }) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    // Check if services is defined and not an empty array
    if (!services || services.length === 0) {
        return null; // or handle this case appropriately
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            return prevIndex === 0 ? services.length - 1 : prevIndex - 1;
        })
    }

    useEffect(() => {
        console.log('isOpen changed:', isOpen);
    }, [isOpen]);


    return (
        <article>
            {isOpen && (
                <div className="flex justify-center items-center">
                    <Modal isOpen={isOpen} {...services[currentIndex]} />
                </div>
            )}



            <div className="relative">
                <button className='absolute top-[25rem] left-[6rem] text-white bg-azure w-12 h-12 rounded-full z-50' 
                    onClick={prevSlide}
                >
                    <ChevronLeft style={{fontSize:'3rem'}}/>
                </button>

                <button className='absolute top-[25rem] right-[-40rem] text-white bg-azure w-12 h-12 rounded-full z-50' 
                    onClick={nextSlide}
                >
                    <ChevronRight style={{fontSize:'3rem'}}/>
                </button>
            </div>
        </article>
    )
}

export default ModalCarousel;
