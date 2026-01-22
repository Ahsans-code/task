"use client"

import React from 'react'
import { motion } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'

const Ready = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    }

    const characterVariants = {
        hidden: { opacity: 0, scale: 0.5, y: 50 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
    }

    return (
        <section className="relative z-10 w-full py-20 px-4 flex justify-center items-center overflow-visible">
            {/* 
               Main Container: 
               We use a max-width and relative positioning. 
               The padding-top allows the tall character to bleed out without being cut off. 
            */}
            <motion.div
                className="relative w-full max-w-6xl h-[500px] md:h-[450px] bg-[#007BFF] rounded-2xl shadow-2xl flex flex-col md:flex-row items-center overflow-visible"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >

                {/* 1. LEFT SIDE: Cartoons Poster */}
                <motion.div
                    variants={itemVariants}
                    className="z-10 p-6 md:px-6 py-2 h-full flex items-center justify-center md:justify-start"
                >
                    <img
                        loading='lazy'
                        src="cartoons.png"
                        alt="Cartoons Poster"
                        className="h-[80%] md:h-[90%] w-72 object-cover rounded-3xl shadow-lg"
                    />
                </motion.div>

                {/* 2. CENTER: Are You Ready Starburst */}
                <motion.div
                    className="absolute -top-8 -left-8 lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20"
                    initial={{ scale: 0, rotate: -20 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.5 }}
                >
                    <div className="relative flex items-center justify-center">
                        <motion.img
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 30, ease: "linear", repeat: Infinity, delay: 0 }}
                            loading='lazy' className='w-70 ' src="sun.png" alt="Sun image" />
                        <div className="absolute text-center select-none">
                            <h2 className="text-black font-black text-xl md:text-3xl leading-tight uppercase">
                                <AnimatedText text={"Are"} /><br />
                                <AnimatedText text={"you"} /><br />
                                <AnimatedText text={"Ready!"} />
                            </h2>
                        </div>
                    </div>
                </motion.div>

                {/* 3. RIGHT SIDE: Yellow Cloud & Characters */}
                <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-full pointer-events-none">

                    {/* Yellow Ground/Cloud Layer */}
                    <motion.img
                        loading='lazy'
                        src="yellowCloud.png"
                        alt="Yellow Shape"
                        className="absolute bottom-2 -right-[1px] w-full md:w-[120%] h-auto object-cover translate-y-2"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    />

                    {/* Man Cartoon (The one bleeding out the top) */}
                    <motion.img
                        loading='lazy'
                        src="manCartoon.png"
                        alt="Man Cartoon"
                        variants={characterVariants}
                        className="absolute right-[-4%] md:right-[-5%] md:right-10 top-[-15%] md:top-[-20%] w-64 md:w-80 lg:w-[380px] z-30 object-cover"
                    />

                    {/* Kid Cartoon (In front) */}
                    <motion.img
                        loading='lazy'
                        src="kidCartoon.png"
                        alt="Kid Cartoon"
                        variants={characterVariants}
                        className="absolute right-[25%] md:right-[30%] bottom-[0%] md:-bottom-2 w-32 md:w-44 lg:w-56 z-40"
                    />
                </div>

            </motion.div>
        </section>
    )
}

export default Ready