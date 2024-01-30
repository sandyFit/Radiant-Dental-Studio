import React, { useState } from 'react';
import { Close } from "@mui/icons-material";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const Modal = ({ isOpen, service = {}, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    console.log('Service object:', service);
    console.log('Categories:', service.categories);

    const isValidIndex = Array.isArray(service.categories) && currentIndex >= 0 && currentIndex < service.categories.length;
    const currentCategory = isValidIndex ? service.categories[currentIndex] : null;

    if (!service) {
    console.log('Service is undefined');
    return null;
}

    const nextSlide = () => {
        if (isValidIndex) {
        console.log(service.categories)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % service.categories.length);
    }
    };

    const prevSlide = () => {
        if (isValidIndex) {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + service.categories.length) % service.categories.length);
        }
    };

    const handleClose = () => {
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="z-50 overflow-auto bg-white3 bg-opacity-95 flex items-center justify-center 
            px-6 lg:px-24 py-24 relative">
            
            <button
                className="mt-6 bg-azure text-white py-2 px-4 rounded hover:bg-blue-400 absolute 
                    left-[18.5rem] md:left-[38rem] lg:left-[42.5rem] top-[2rem] lg:top-[2rem]"
                    onClick={handleClose}
                >
                    <Close />
            </button>
            
            <div className="bg-fairBlue p-8 rounded-lg w-[90%] md:max-w-2xl shadow-xl 
                shadow-slate-400 md:flex md:flex-col md:justify-center md:items-center">
                <h1 className="text-xl lg:text-2xl text-azure font-bold mb-4">{service.title}</h1>
                <p className="text-spaceCadet text-lg lg:text-xl mb-6">{service.description}</p>

                {currentCategory && (
                    <ul className="list-none pl-4 border-2 border-azure p-6 rounded-lg">
                        <li className="mb-2 ">
                            <div className="flex items-start gap-4">
                                <div>
                                    <h4 className="text-lg text-azure font-semibold">{currentCategory.name}</h4>
                                    <p className="text-spaceCadet">{currentCategory.description}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                )}

                {service.categories && service.categories.length > 1 && (
                    <div className="relative">
                        <button className='absolute top-[5rem] lg:-top-[10rem] right-[10rem] lg:right-[20rem] transform 
                            -translate-y-1/2 text-white bg-azure w-12 h-12 rounded-full z-50'
                            onClick={prevSlide}
                        >
                            <ChevronLeft style={{ fontSize: '3rem' }} />
                        </button>

                        <button className='absolute top-[5rem] lg:-top-[10rem] left-[10rem] lg:left-[20rem] transform 
                            -translate-y-1/2 text-white bg-azure w-12 h-12 rounded-full z-50'
                            onClick={nextSlide}
                        >
                            <ChevronRight style={{ fontSize: '3rem' }} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
