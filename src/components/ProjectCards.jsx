"use client"
import { motion } from "framer-motion"
import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CustomCursor from "./CustomCursor"

// Accept the sliderRef prop
export default function ProjectCards() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4);
    const [mounted, setMounted] = useState(false);

    // FIX: Only render the slider after the component has mounted on the client
    useEffect(() => {
        setMounted(true);
    }, []);
    const sliderRef = useRef()
    const cards = [
        { text: '2d animation', img: 'project1.png' },
        { text: '3d animation', img: 'project2.png' },
        { text: 'logo animation', img: 'project3.png' },
        { text: 'gaming trailer', img: 'project4.png' },
        { text: 'vfx studio', img: 'project1.png' },
        { text: 'character design', img: 'project2.png' },
    ];

    useEffect(() => {
        setMounted(true);
        const handleResize = () => {
            if (window.innerWidth < 640) setSlidesToShow(1);
            else if (window.innerWidth < 1024) setSlidesToShow(2);
            else setSlidesToShow(4);
        };

        handleResize(); // Run on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        draggable: true,
        arrows: false, // We use the custom buttons in the parent
        swipeToSlide: true,
        mobileFirst: true,
        beforeChange: (current, next) => setActiveIndex(next),
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } }
        ]
    };
    // If not mounted, show a placeholder or nothing to avoid the "4 slides" glitch
    if (!mounted) return <div className="h-110 w-full bg-transparent" />;
    return (
        <div className="translate-y-1/2 absolute bottom-12 left-0 right-0 z-50">

            <div className="max-w-xl md:max-w-2xl lg:container mx-auto px-4 md:px-0 overflow-x-hidden ">
                {/* <CustomCursor text={"drag"} /> */}
                {/* 4. Attach the ref to the slider and apply 'drag' only to the slider track */}
                <Slider ref={sliderRef} {...settings} className="project-slider -mx-2 drag">
                    {cards.map((card, idx) => (
                        <div key={idx} className="px-2">
                            <motion.div
                                className="relative h-110 rounded-2xl overflow-hidden shadow-lg cursor-grab active:cursor-grabbing"
                            >
                                <div className="absolute bg-gradient-to-t from-black via-transparent to-transparent inset-0 z-10 opacity-80"></div>
                                <img
                                    src={card.img}
                                    alt={card.text}
                                    className="w-full h-full object-cover object-center"
                                />
                                <div className="absolute bottom-0 pb-9 w-full z-20 text-center" style={{ fontFamily: "var(--font-my)" }}>
                                    <p className="text-white uppercase font-bold text-4xl">{card.text}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* PROGRESS BAR */}
            <div className="w-full flex justify-center items-center gap-1.5 py-8">
                <div className={`transition-all duration-300 rounded-full h-1.5 ${activeIndex % 3 === 0 ? 'w-16 bg-[#FF0050]' : 'w-5 bg-gray-600'}`}></div>
                <div className={`transition-all duration-300 rounded-full h-1.5 ${activeIndex % 3 === 1 ? 'w-16 bg-[#FF0050]' : 'w-5 bg-gray-600'}`}></div>
                <div className={`transition-all duration-300 rounded-full h-1.5 ${activeIndex % 3 === 2 ? 'w-16 bg-[#FF0050]' : 'w-5 bg-gray-600'}`}></div>
            </div>

            <style jsx global>{`
                .project-slider .slick-list { overflow: visible; }
                .project-slider .slick-track { display: flex !important; }
                /* Ensure navigation buttons work even if inside a drag area */
                .cursor-pointer { cursor: pointer !important; }
            `}</style>
        </div>
    )
}