"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ChevronRight, ArrowLeft, ArrowRight, Menu } from 'lucide-react';
import AnimatedButton from '@/components/AnimatedButton';
import Projects from './Projects';
import AnimatedText from '@/components/AnimatedText';

const Hero = () => {
    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const floatingShape = {
        animate: {
            // y: [-6, -20, -6],
            rotate: [0, 10, -10, 0],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
    };

    return (
        <>

            {/* --- NAVBAR --- */}


            {/* --- HERO SECTION (RED TOP) --- */}
            <section className="relative bg-primary h-[730px] md:h-[650px] pt-20 px-6 md:px-20  overflow-y-visible overflow-x-hidden z-10 ">

                {/* Decorative Shapes */}
                <motion.div variants={floatingShape} animate="animate" className="absolute top-0 left-1/3 ">
                    <img src='/heroStar.png' className='w-40 -translate-y-2' />
                </motion.div>
                <motion.div animate={{ translateY: [0, -4, 4, 0], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } }} className="absolute top-40 left-0 ">
                    <img src='/hero3.png' className='w-20 -translate-y-2' />
                </motion.div>
                <motion.div style={{ transformOrigin: "center" }} animate={{ rotate: [0, -360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute top-10 right-0 overflow-hidden   ">
                    <img src='/heroSemiCircle.png' className='translate-x-1 w-20' />
                </motion.div>

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10" style={{ fontFamily: "var(--font-my)" }}>
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:w-1/2 z-20">
                        <motion.h2 variants={fadeInUp} className="text-white text-4xl md:text-5xl font-black leading-tight ">
                            <AnimatedText text={"ALL"} />  <br />
                            <AnimatedText text={"ANIMATION"} className="text-3xl md:text-6xl xl:text-7xl block" />
                            <AnimatedText text={"PROJECTS ACCEPTED"} className={"max-md:text-3xl lg:text-4xl xl:text-5xl"} />

                        </motion.h2>




                    </motion.div>
                    <div className='w-full lg:w-1/2' >
                        <motion.p variants={fadeInUp} className="text-white/90 text-sm my-6 w-full leading-6 tracking-wide jost ">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley lorem.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </motion.p>

                        <AnimatedButton />
                    </div>

                </div>

            </section>

            {/* --- STUDIO SECTION (DARK BOTTOM) --- */}
        </>
    );
};

export default Hero;