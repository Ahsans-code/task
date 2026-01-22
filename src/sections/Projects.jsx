"use client"
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion';
import AnimatedButton from '@/components/AnimatedButton';

export default function Projects() {
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
    return (
        <section className="relative bg-secondary h-[700px] md:h-[900px]  border    px-6 md:px-20  flex items-center max-lg:  z-0 max-md:pb-50  ">

            {/* LARGE VERTICAL TEXT */}
            {/* <div className="absolute left-[-50px] top-40 transform -rotate-90 origin-left select-none">
                <h2 className="text-white/5 text-[120px] font-black tracking-widest whitespace-nowrap uppercase">
                    ANIMATION STUDIO
                </h2>
            </div> */}
            <motion.div whileInView={{ x: 0 }} initial={{ x: 70 }} transition={{ duration: 0.4, ease: "easeInOut" }} className={`lg:h-[500px] top-[4%]  absolute left-[2.3%] w-14  flex flex-col items-center justify-between py-12 z-50 max-lg:hidden `}>
                {/* Vertical Text */}
                <div className="flex-1 flex items-center justify-center">
                    <div className={`transform -rotate-90 text-center text-white/10 text-6xl font-extrabold  tracking-[0.2em]  uppercase decoration-[3px] `}>
                        ANIMATION STUDIO
                    </div>
                </div>

            </motion.div>


            <div className="max-w-7xl mx-auto relative z-40 text-center ">
                <motion.div transition={{ delay: 0.5 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                    <motion.h2 variants={fadeInUp} className="text-white text-4xl md:text-6xl  uppercase mb-5  " style={{ fontFamily: "var(--font-my)" }}>
                        Are You Ready <br /> For Project
                    </motion.h2>
                    <div className="mx-auto w-fit">

                        <AnimatedButton />
                    </div>
                </motion.div>

                {/* Navigation Arrows */}


            </div>

        </section>
    )
}
