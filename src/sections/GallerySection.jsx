"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

// Import Swiper core styles
import "swiper/css";

// const images = Array(5).fill(0).map((_, i) => (`gallery${i + 1}.png`));
const images = [
    "gallery1.png",
    "gallery2.png",
    "gallery3.png",
    "gallery4.png",
    "gallery5.png",
    "gallery1.png",
    "gallery2.png",
    "gallery3.png",
    "gallery4.png",
    "gallery5.png",
]
console.log(images)
export default function GallerySection() {
    const containerRef = useRef(null);
    const swiperRef = useRef(null);

    // Sticky Scroll Logic
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (swiperRef.current) {
            const totalSlides = images.length - 1;
            swiperRef.current.slideTo(Math.round(latest * totalSlides));
        }
    });

    // CUSTOM 2D CIRCULAR ANIMATION LOGIC
    const handleProgress = (swiper) => {
        swiper.slides.forEach((slide) => {
            const progress = slide.progress; // Distance from center (-1 to 1)
            const absProgress = Math.abs(progress);

            // 1. Rotation: Slide tilts away from center
            const rotate = progress * -18;

            // 2. Vertical Offset: Creates the "smile" arc/circle
            const translateY = absProgress * 80;

            // 3. Scale: Slight reduction for depth feeling
            const scale = 1 - absProgress * 0.1;

            // Apply the 2D transform exactly as in image 1
            slide.style.transform = `translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`;
            slide.style.zIndex = 100 - Math.floor(absProgress * 10);
            slide.style.transition = 'transform 600ms cubic-bezier(0.2, 0, 0, 1)';
        });
    };

    return (
        <div ref={containerRef} className="relative h-[400vh] flex flex-col items-center bg-white pt-60 ">
            {/* Sticky Section */}
            {/* Curly Yellow Arrow */}


            <h2 className="text-[#2B234F] text-center text-6xl md:text-8xl font-black uppercase mb-3 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Our Gallery
            </h2>

            <button className="bg-[#1D1B36] text-white px-8 py-3 rounded-full flex items-center gap-3 text-xs font-black uppercase mb-16 tracking-widest shadow-xl">
                Start Your Project Now!
                <ChevronRight size={16} className="bg-white text-black rounded-full" />
            </button>

            <div className="sticky  top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
                <img src="curvedArrow.png" alt="" className="absolute top-10 left-10 w-28 h-28 o" />
                <img src="sun.png" alt="" className=" absolute -bottom-14 left-0 md:left-20 w-48 h-48 " />

                <img src="ellipse.png" className="absolute -bottom-20 md:bottom-[-150px] right-[-80px] w-70 md:w-95 rotate-19 "

                />



                {/* --- CONTENT --- */}
                <div className="relative z-10 w-full flex flex-col items-center text-center">


                    {/* CIRCULAR SLIDER TRACK */}
                    <div className="w-full relative max-w-[1200px]">
                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onProgress={handleProgress}
                            onSetTransition={(s, t) => s.slides.forEach(slide => slide.style.transition = `${t}ms`)}
                            watchSlidesProgress={true}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={1.5}
                            // spaceBetween={10}
                            breakpoints={{
                                640: { slidesPerView: 2.2 },
                                1024: { slidesPerView: 3.5 },
                                1440: { slidesPerView: 4.5 }
                            }}
                            className="!overflow-visible"
                        >
                            {images.map((src, index) => (
                                <SwiperSlide key={index} className="flex  justify-center">
                                    <div className="w-[300px] md:w-65 h-90 rounded-2xl overflow-hidden  shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-gray-200   transition-all">
                                        <img src={src} alt="Art" className="w-full h-full object-cover" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* NAVIGATION (RED & BLUE) */}
                        <div className="flex justify-center gap-5 mt-20 relative z-50">
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-90 transition-transform cursor-pointer"
                            >
                                <ArrowLeft size={32} strokeWidth={3} />
                            </button>
                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-90 transition-transform cursor-pointer"
                            >
                                <ArrowRight size={32} strokeWidth={3} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}