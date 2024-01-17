import React, { useEffect, useState } from 'react';
import ReviewsCard from './ReviewsCard';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';

const Carousel = ({
    reviews,
    autoSlide,
    autoSlideInterval, }) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        if (!autoSlide) return;

        const slideInterval = setInterval(nextSlide, autoSlideInterval);

        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval]);


    return (
        <div>
            <div className='flex justify-center items-center'>
                <ReviewsCard {...reviews[currentIndex]} />
            </div>
            
            <div className='relative text-spanishBlue'>                
                <button className='absolute bottom-[8rem] left-[-8rem] transform -translate-y-1/2' onClick={prevSlide}>
                    <ChevronLeftRounded style={{fontSize: '6rem'}}/>
                </button>
                <button className='absolute bottom-[8rem] right-[-8rem] transform -translate-y-1/2' onClick={nextSlide}>
                    <ChevronRightRounded style={{fontSize: '6rem'}}/>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
