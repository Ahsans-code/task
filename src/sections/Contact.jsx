"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    // FIX: State to check if the component has mounted in the browser
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const iconStyle = "p-3 rounded-full absolute shadow-lg z-20 transition-transform hover:scale-110";

    // ANIMATION VARIANTS: One from Left, One from Right
    const leftCircleVariants = {
        hidden: { opacity: 0, x: -150 },
        visible: {
            opacity: 1,
            rotate: [0, -360],
            x: 0,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const rightCircleVariants = {
        hidden: { opacity: 0, x: 150 },
        visible: {
            opacity: 1,
            rotate: [0, 360],
            x: 0,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const floatingVariants = {
        initial: { y: 0 },
        animate: {
            y: [0, -15, 0],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
    };

    const sunVariants = {
        initial: { rotate: 0, scale: 0.8 },
        animate: {
            rotate: 360,
            scale: [0.8, 1, 0.8],
            transition: {
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }
        }
    };

    // Prevent rendering motion components on the server
    if (!mounted) return <div className='bg-white py-20 lg:py-32 min-h-[500px]' />;

    return (
        <div className='bg-white z-0  py-20 lg:pt-20 mt-20 max-w-7xl mx-auto relative overflow-hidden px-4'>
            {/* DECORATIONS */}
            {/* Curved Arrow */}

            <motion.img
                src="curvedArrow.png"
                alt="Decoration Arrow"
                className='absolute left-[-10px] lg:left-0 top-[60%] lg:top-1/2 -translate-y-1/2 w-20 lg:w-32 z-0'
                variants={floatingVariants}
                initial="initial"
                animate="animate"
            />

            {/* Sun */}
            <motion.img
                src="sun.png"
                alt="Decoration Sun"
                className='absolute right-0 lg:-right-14 top-5 lg:top-10 w-24 lg:w-44 z-0'
                variants={sunVariants}
                initial="initial"
                animate="animate"
            />

            {/* MAIN CONTENT SECTION */}
            <div className='flex flex-col lg:flex-row items-center justify-center gap-24 lg:gap-16 relative z-10'>

                {/* Left Section (Pink Circle) - Slides from Left */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={leftCircleVariants}
                    className='relative bg-[#FF8078] w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-2xl flex items-center justify-center'
                >
                    <img loading='lazy' src="girl.png" alt="Girl Cartoon"
                        className='absolute w-[65%] bottom-10 lg:bottom-10 left-1/2 -translate-x-1/2 z-10' />

                    {/* Social Icons */}
                    <div className={`${iconStyle} bg-[#BE08A6] bottom-[15%] left-[4%]`}>
                        <img className='w-5 h-5 lg:w-6 lg:h-6' src="facebook.png" alt="Facebook" />
                    </div>
                    <div className={`${iconStyle} bg-[#BE08A6] -bottom-3 lg:-bottom-4 left-[28%]`}>
                        <img className='w-5 h-5 lg:w-6 lg:h-6' src="insta.png" alt="Instagram" />
                    </div>
                    <div className={`${iconStyle} bg-[#BE08A6] -bottom-3 lg:-bottom-4 right-[28%]`}>
                        <img className='w-5 h-5 lg:w-6 lg:h-6' src="twitter.png" alt="Twitter" />
                    </div>
                    <div className={`${iconStyle} bg-[#BE08A6] bottom-[15%] right-[4%]`}>
                        <img className='w-5 h-5 lg:w-6 lg:h-6' src="youtube.png" alt="YouTube" />
                    </div>
                </motion.div>

                {/* Right Section (Blue Circle) - Slides from Right */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={rightCircleVariants}
                    className='relative bg-[#0066FF] w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-2xl flex items-center justify-center '
                >
                    <img loading='lazy' src="boy.png" alt="Boy Cartoon"
                        className='absolute w-[70%] bottom-8 lg:bottom-20 left-1/2 -translate-x-1/2 z-10' />

                    {/* Social Icons */}
                    <div className={`${iconStyle} bg-[#00D215] bottom-[15%] left-[4%]`}>
                        <img className='w-5 h-5 lg:w-6 lg:h-6' src="facebook.png" alt="Facebook" />
                    </div>
                    <div className={`${iconStyle} bg-[#00D215] -bottom-3 lg:-bottom-4 left-[28%]`}>
                        <img className='w-5 h-5 lg:w-6 lg:h-6' src="insta.png" alt="Instagram" />
                    </div>
                    <div className={`${iconStyle} bg-[#00D215] -bottom-3 lg:-bottom-4 right-[28%]`}>
                        <img className='w-5 h-5 lg:w-6 lg:h-6' src="twitter.png" alt="Twitter" />
                    </div>
                    <div className={`${iconStyle} bg-[#00D215] bottom-[15%] right-[4%]`}>
                        <img className='w-5 h-5 lg:w-6 lg:h-6' src="youtube.png" alt="YouTube" />
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Contact