"use client"
import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick"
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react'
import CustomCursor from '@/components/CustomCursor' // Reusing your cursor component

// Slick CSS
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import InfiniteSlider from '@/components/InfiniteSlider'
import AnimatedButton from '@/components/AnimatedButton'
import AnimatedText from '@/components/AnimatedText'

const projects = [
    { name: "PROJECT NAME", img: "gallery2.png" },
    { name: "PROJECT NAME", img: "project2.png" },
    { name: "PROJECT NAME", img: "gallery3.png" },
    { name: "PROJECT NAME", img: "project3.png" },
    { name: "PROJECT NAME", img: "gallery4.png" },
];

export default function GamingProjects() {
    const sliderRef = useRef(null);
    const [mounted, setMounted] = useState(false);
    const [slidesToShow, setSlidesToShow] = useState(4);

    useEffect(() => {
        setMounted(true);
        const handleResize = () => {
            if (window.innerWidth < 640) setSlidesToShow(1);
            else if (window.innerWidth < 1024) setSlidesToShow(2);
            else if (window.innerWidth < 1280) setSlidesToShow(3);
            else setSlidesToShow(4);
        };

        handleResize(); // Run on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    // FIX: Only render the slider after the component has mounted on the client
    useEffect(() => {
        setMounted(true);
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        draggable: true,
        arrows: false,
        swipeToSlide: true,
        mobileFirst: true,
    };
    const titles = [
        { node: <h1 className='text-[#44E197]'>KAMSOFT .</h1>, title: "React", },
        { node: <h1 className='text-[#44E197]'>KAMSOFT .</h1>, title: "Next.js", },
        { node: <h1 className='text-[#44E197]'>KAMSOFT .</h1>, title: "Next.js", },
        { node: <h1 className='text-[#44E197]'>KAMSOFT .</h1>, title: "Next.js", },
    ];
    // If not mounted, show a placeholder or nothing to avoid the "4 slides" glitch
    if (!mounted) return <div className="h-110 w-full bg-transparent" />;
    return (
        <section className="   pt-100 md:pt-130   relative min-h-screen flex flex-col justify-center bg-contain bg-top bg-no-repeat " >
            <img src="cloudTopBg.png" alt="" className='absolute bottom-0 left-0 right-0 top-60' />
            <img src="girlHorse.png" alt="" className='absolute top-27 w-50 md:w-80 right-1/2' />
            <div className='absolute top-20  left-1/2'>
                <div className="relative w-34 h-34 md:w-40 md:h-40 overflow-visible flex justify-center items-center p-4">

                    <p className='z-10 text-white translate-x-1.5 flex text-center justify-center items-center text-sm md:text-base leading-tight' style={{ fontFamily: "var(--font-my)" }}>CAN’T BELIEVE WHAT’S NEXT!</p>
                    <img className='absolute w-full h-full inset-0' src="thinkingCircle.png" alt="" />
                </div>
            </div>
            <InfiniteSlider
                logos={titles}
                speed={50}
                direction="left"
                logoHeight={80}
                gap={60}
                hoverSpeed={50}
                ariaLabel="partners"
            />
            <CustomCursor text="DRAG" />
            <div className="absolute bottom-0 w-full h-70 bg-fourth"></div>
            <div className="max-w-7xl mx-auto w-full  py-20 z-10 px-6 md:px-20 bg-fourth ">

                {/* --- HEADER ROW --- */}
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-white text-3xl md:text-5xl  uppercase tracking-tight " style={{ fontFamily: "var(--font-my)" }}>
                        <AnimatedText text={"Gaming Project"} />

                    </h2>

                    {/* Navigation Arrows */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => sliderRef.current?.slickPrev()}
                            className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
                        >
                            <ArrowLeft size={28} strokeWidth={3} />
                        </button>
                        <button
                            onClick={() => sliderRef.current?.slickNext()}
                            className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
                        >
                            <ArrowRight size={28} strokeWidth={3} />
                        </button>
                    </div>
                </div>

                {/* --- SLIDER SECTION --- */}
                <div className="drag -mx-3 container mx-auto overflow-hidden">
                    <Slider ref={sliderRef} {...settings}>
                        {projects.map((project, idx) => (
                            <div key={idx} className="px-3">
                                <motion.div
                                    className="relative h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl group cursor-grab active:cursor-grabbing "
                                >
                                    {/* Image */}
                                    <img
                                        src={project.img}
                                        alt={project.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Dark Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black  to-transparent opacity-90"></div>

                                    {/* Project Name */}
                                    <div className="absolute bottom-10 left-0 right-0 text-center px-4">
                                        <h3 className="text-white text-3xl font-black leading-tight uppercase" style={{ fontFamily: "var(--font-my)" }}>
                                            {project.name.split(' ')[0]}<br />{project.name.split(' ')[1]}
                                        </h3>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* --- FOOTER CTA --- */}
                <div className="mt-16 flex justify-center">
                    <AnimatedButton />
                </div>

            </div>
            <style jsx global>{`
                .slick-list { overflow: visible !important; }
                .slick-track { display: flex !important; }
                .drag { cursor: none !important; }
            `}</style>
        </section>
    )
}