import React, { useState } from 'react';
import { Close } from "@mui/icons-material";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const Modal = ({ isOpen, title, description, categories, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Check if services is defined and not an empty array
    if (!services || services.length === 0) {
        return null; // or handle this case appropriately
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
    };

    const handleClose = () => {
    // Call the onClose function to close the modal
    onClose();
  };

    if (!isOpen) return null;

    return (
        <div className=" z-50 overflow-auto bg-white3 bg-opacity-95 flex 
            items-center justify-center p-24 relative">
            
            <button
                className="mt-6 bg-azure text-white py-2 px-4 rounded hover:bg-blue-400 absolute
                    left-[44.5rem] top-[4.4rem]"
                    onClick={handleClose}
                >
                    <Close />
            </button>
            
            <div className="bg-fairBlue p-8 rounded-lg max-w-2xl shadow-xl shadow-slate-400">
                <h1 className="text-2xl text-azure font-bold mb-4">{title}</h1>
                <p className="text-spaceCadet text-xl mb-6">{description}</p>

                <div className="relative">
                    <button className='absolute top-[5rem] -left-24 transform -translate-y-1/2 text-white bg-azure w-12 h-12 rounded-full z-50' onClick={prevSlide}>
                        <ChevronLeft style={{ fontSize: '3rem' }} />
                    </button>

                    <button className='absolute top-[5rem] -right-24 transform -translate-y-1/2 text-white bg-azure w-12 h-12 rounded-full z-50' onClick={nextSlide}>
                        <ChevronRight style={{ fontSize: '3rem' }} />
                    </button>
                </div>

                <ul className="list-none pl-4 border-2 border-azure p-6 rounded-lg">
                    <li className="mb-2 ">
                        <div className="flex items-start">
                            <img src={categories[currentIndex].icon} alt="Category Icon" className="w-18 h-18 mr-2" />
                            <div>
                                <h4 className="text-lg text-azure font-semibold">{categories[currentIndex].name}</h4>
                                <p className="text-spaceCadet">{categories[currentIndex].description}</p>
                            </div>
                        </div>
                    </li>
                </ul>

                
            </div>
        </div>
    );
};

export default Modal;
