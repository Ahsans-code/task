"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import { ArrowUp, ArrowDown, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import AnimatedButton from "@/components/AnimatedButton";

const services2D = [
    { title: "2D", subtitle: "ANIMATION", color: "#9B30EF", char: "char1.png" },
    { title: "2D", subtitle: "CHARACTER", color: "#9B30EF", char: "char2.png" },
    { title: "2D", subtitle: "ANIMATION", color: "#9B30EF", char: "char1.png" },
    { title: "2D", subtitle: "CHARACTER", color: "#9B30EF", char: "char2.png" },
];

const services3D = [
    { title: "3D", subtitle: "ANIMATION", color: "#00AFDC", char: "char2.png" },
    { title: "3D", subtitle: "MODELING", color: "#00AFDC", char: "char1.png" },
    { title: "3D", subtitle: "ANIMATION", color: "#00AFDC", char: "char2.png" },
    { title: "3D", subtitle: "MODELING", color: "#00AFDC", char: "char1.png" },
];

export default function ServiceSliders() {
    const swiper2D = useRef(null);
    const swiper3D = useRef(null);

    const SlideContent = ({ item, isReverse = false }) => (
        <div className={`bg-[${item.color}] flex flex-col max-md:justify-center items-center h-full w-full  px-8 gap-2  relative overflow-hidden ${isReverse ? "md:flex-row-reverse" : "md:flex-row"}`}>

            {/* Decorative Green Circle */}
            <div className={`absolute top-[-40px] ${isReverse ? "right-[-40px]" : "left-[-40px]"} w-40 h-40 border-[20px] border-[#4ADE80] rounded-full opacity-80 z-0`}></div>

            {/* Text Content */}
            <div className={`relative max-md:order-2 z-10 w-full md:w-1/2 flex flex-col ${isReverse ? "items-start text-left " : "items-start text-left"}`}>
                <h2 className="text-white text-5xl  font-black leading-tight italic uppercase drop-shadow-lg">
                    {item.title} <br />
                    <span className="text-4xl  block">{item.subtitle}</span>
                </h2>
                <div className="mt-4">

                    <AnimatedButton />
                </div>
            </div>

            {/* Character Image */}
            <div className={`flex md:w-1/2 ${isReverse ? "md:justify-start " : "md:justify-end"} items-center  max-md:h-1/2  `}>
                <img src={item.char} alt="" className="h-full md:h-[70%]  md:w-40 object-contain drop-shadow-2xl" />
            </div>
        </div >
    );

    return (
        <section className="bg-white w-full overflow-hidden relative ">
            <img src="animationBanner.png" className="absolute inset-0 w-full h-full -rotate-2 animate-pulse" />
            <div className="py-20 px-4 md:px-10 flex flex-col gap-10 max-w-7xl mx-auto">


                {/* --- TOP SLIDER (2D) --- */}
                <div className="relative w-full md:w-2xl lg:w-3xl mx-auto h-[400px] md:h-[340px]  rounded-[30px] flex overflow-hidden shadow-2xl bg-[#9B30EF]">
                    <div className="flex-1">
                        <Swiper
                            direction={"vertical"}
                            onSwiper={(s) => (swiper2D.current = s)}
                            modules={[Mousewheel]}
                            mousewheel={true}
                            className="h-full w-full"
                        >
                            {services2D.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <SlideContent item={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Yellow Navigation Sidebar (Right) */}
                    <div className="w-16 md:w-24 bg-[#FFF000] h-full flex flex-col items-center justify-center gap-4 border-l-4 border-black/5">
                        <button onClick={() => swiper2D.current?.slidePrev()} className="w-12 h-12 bg-[#1D1B36] text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
                            <ArrowUp size={24} strokeWidth={3} />
                        </button>
                        <button onClick={() => swiper2D.current?.slideNext()} className="w-12 h-12 bg-[#0070FF] text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
                            <ArrowDown size={24} strokeWidth={3} />
                        </button>
                    </div>
                </div>

                {/* --- BOTTOM SLIDER (3D) --- */}
                <div className="relative w-full md:w-2xl lg:w-3xl mx-auto h-[400px] md:h-[340px]  rounded-[30px] flex overflow-hidden shadow-2xl flex-row-reverse bg-[#00AFDC]">
                    <div className="flex-1">
                        <Swiper
                            direction={"vertical"}
                            onSwiper={(s) => (swiper3D.current = s)}
                            modules={[Mousewheel]}
                            mousewheel={true}
                            className="h-full w-full"
                        >
                            {services3D.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <SlideContent item={item} isReverse={true} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Yellow Navigation Sidebar (Left) */}
                    <div className="w-16 md:w-24 bg-[#FFF000] h-full flex flex-col items-center justify-center gap-4 border-r-4 border-black/5">
                        <button onClick={() => swiper3D.current?.slidePrev()} className="w-12 h-12 bg-[#1D1B36] text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
                            <ArrowUp size={24} strokeWidth={3} />
                        </button>
                        <button onClick={() => swiper3D.current?.slideNext()} className="w-12 h-12 bg-[#0070FF] text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
                            <ArrowDown size={24} strokeWidth={3} />
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
}