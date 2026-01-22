"use client"
import AnimatedButton from '@/components/AnimatedButton'
import CustomCursor from '@/components/CustomCursor'
import { ArrowLeft, ArrowRight, Play } from 'lucide-react'
import React, { useRef } from 'react'
import Slider from 'react-slick'
import { motion } from "framer-motion"
export default function Products() {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        arrows: false,
        swipeToSlide: true,
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 3 } },
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } }
        ]
    };
    const projects = [
        { name: "PROJECT NAME", img: "product1.gif" },
        { name: "PROJECT NAME", img: "product2.gif" },
        { name: "PROJECT NAME", img: "product3.gif" },
        { name: "PROJECT NAME", img: "product1.gif" },
        { name: "PROJECT NAME", img: "product2.gif" },
        { name: "PROJECT NAME", img: "product3.gif" },
    ];
    return (
        <section className='bg-primary'>
            <CustomCursor text="DRAG" />
            <div className="max-w-7xl mx-auto w-full  py-20 z-10 px-6 md:px-20 bg-primary">

                {/* --- HEADER ROW --- */}
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-white text-3xl md:text-5xl  uppercase tracking-tight " style={{ fontFamily: "var(--font-my)" }}>
                        Product Animation
                    </h2>

                    {/* Navigation Arrows */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => sliderRef.current?.slickPrev()}
                            className="w-14 h-14 bg-fourth text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
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
                                    className="relative h-[260px] w-full rounded-xl overflow-hidden shadow-2xl group cursor-grab active:cursor-grabbing "
                                >
                                    {/* Image */}
                                    <img
                                        src={project.img}
                                        alt={project.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute top-2 left-2 rounded-full bg-white  h-10 w-10 flex justify-center items-center ">
                                        <img src='playButton.png' className='grayscale w-3' />
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
