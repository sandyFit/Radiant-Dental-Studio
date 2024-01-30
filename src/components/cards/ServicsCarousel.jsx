import React, { useEffect, useState, useRef } from 'react';
import ServiceCard from './ServiceCard'; // Your existing ServiceCard component
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';

const Carousel = ({
    services,
    onClick,
    autoSlide,
    autoSlideInterval,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const getVisibleCards = () => {
        const width = window.innerWidth;
        if (width < 640) return 1; // sm
        if (width < 1024) return 2; // md, lg
        return 3; // xl
    };

    const [visibleCards, setVisibleCards] = useState(getVisibleCards());


    useEffect(() => {
        const handleResize = () => setVisibleCards(getVisibleCards());
        window.addEventListener('resize', handleResize);
        // Ensure the initial setup is correct
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const goNext = () => {
    console.log('Going to next slide');
    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
};

    const goNextRef = useRef(goNext);
    useEffect(() => {
        goNextRef.current = goNext;
    }, [goNext]);

    const goPrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
    };

    useEffect(() => {
        console.log('Setting up auto-slide', autoSlide, autoSlideInterval);
        if (!autoSlide) return;
        const slideInterval = setInterval(() => {
            console.log('Auto-slide interval triggered');
            goNextRef.current();
        }, autoSlideInterval);
    return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval]);
    
    return (
        <div className='flex justify-center items-center space-x-8'>
            <button className='p-3 ml-4' onClick={goPrev}>
                <ChevronLeftRounded style={{fontSize: '6rem'}}/>
            </button>
            <div className='relative overflow-x-hidden w-auto'>
                <div className='flex'>
                    {services.slice(activeIndex, activeIndex + visibleCards).map((card, index) => (
                        <ServiceCard
                            key={index}
                            {...card}
                            onClick={() => onClick(card)} // Use the onClick prop here
                        />
                    ))}
                </div>
            </div>
            <button className='p-3 mr-4' onClick={goNext}>
                <ChevronRightRounded style={{fontSize: '6rem'}}/>
            </button>
        </div>
    );
};

export default Carousel;
