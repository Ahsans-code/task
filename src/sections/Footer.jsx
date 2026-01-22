"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Minimal Animation: Smooth Fade and Slide Up
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    }

    if (!mounted) return <div className='bg-[#0066FF] w-full min-h-screen' />;

    return (
        <footer className="relative w-full min-h-screen bg-[#0066FF] overflow-hidden flex items-center justify-center py-10 lg:py-20 px-4">

            {/* BACKGROUND DECORATIONS (PNGS) */}
            <img loading='lazy' src="pinkLeft.png" className="absolute -top-30 left-0 w-40 md:w-64 lg:w-[300px] object-cover pointer-events-none z-0" alt="" />
            <img loading='lazy' src="pinkRight.png" className="absolute -top-32 right-0 w-40 md:w-64 lg:w-[300px] object-cover pointer-events-none z-0" alt="" />
            <img loading='lazy' src="greenCloud.png" className="absolute bottom-0 right-0 w-1/2 md:w-1/2 lg:w-1/3 object-cover pointer-events-none z-0" alt="" />
            <img loading='lazy' src="greenCircle.png" className="absolute bottom-[-10%] left-[-5%] w-52 md:w-96 lg:w-[400px] object-contain pointer-events-none z-0" alt="" />

            {/* MAIN CONTENT CARD */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative z-10 w-full max-w-[76rem] bg-white rounded-4xl shadow-2xl px-6 py-8 lg:px-14 lg:py-8"
            >
                {/* TOP HEADER: LOGO & ACTION BUTTON */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
                    <img src="footerLogo.png" alt="Prolific Studio" className="w-44 md:w-60 lg:w-60 h-auto object-contain" />
                    <button className="hover:scale-105 transition-transform duration-300 active:scale-95">
                        <img loading='lazy' src="startNav.png" alt="Start Your Project Now!" className="w-56 md:w-80 h-auto" />
                    </button>
                </div>

                {/* MIDDLE CONTENT: 3-COLUMN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">

                    {/* Column 1: Services */}
                    <div className="flex flex-col items-start">
                        <h3 className="text-2xl lg:text-3xl font-black text-black mb-6 uppercase tracking-tighter">Services</h3>
                        <ul className="space-y-2">
                            {["2D Animation", "3D Animation", "Gaming Trailer", "Gaming", "Product Animation", "Storyboard Animation", "Logo Animation"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 group cursor-pointer">
                                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                                    <span className="text-fourth text-lg  uppercase group-hover:text-blue-600 transition-colors tracking-tight">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <button className="mt-8 bg-secondary text-white px-14 py-3 rounded-full oswald text-2xl hover:bg-black transition-all shadow-xl tracking-tight uppercase">
                            MUCH MORE
                        </button>
                    </div>

                    {/* Column 2: Contact */}
                    <div>
                        <h3 className="text-2xl lg:text-3xl font-black text-black mb-6 uppercase tracking-tighter">Contact</h3>
                        <ul className="space-y-2">
                            {["(113)-456-7890", "(878)-789-7890", "INFO@EXAMPLE.COM", "INFO@DUMMY.COM"].map((info, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                                    <span className="text-fourth text-lg  tracking-tighter">
                                        {info}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Locations */}
                    <div className="space-y-8">
                        <h3 className="text-2xl lg:text-3xl font-black text-black mb-6 uppercase tracking-tighter">Locations</h3>

                        {[
                            { title: "Karachi Office :", desc: "Business Center, Office #202 2nd, Shahrah-e-Faisal Rd, Block-6 PECHS, Karachi" },
                            { title: "Colorado Office :", desc: "2100 Geng Rd Palo Alto, CA 94303 United States" },
                            { title: "Florida Office :", desc: "336 W BURLEIGH BLVD UNIT 110, Tavares, FL 32778" },
                            { title: "UK Office :", desc: "3rd Floor, Bridge Street News Building, London SE1 9SG, United Kingdom" }
                        ].map((loc, i) => (
                            <div key={i} className="flex gap-3 items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                                <div>
                                    <h4 className="text-fourth font-bold text-lg  uppercase tracking-wide">{loc.title}</h4>
                                    <p className="text-gray-700 text-sm font-medium oswald leading-tight max-w-[280px]">
                                        {loc.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* BOTTOM SECTION: SOCIALS & COPYRIGHT */}
                <div className="pt-2 border-t-2 border-gray-500 flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Social Icons from PNG asset */}
                    <img src="footerIcons.png" alt="Social Media" className="h-10 md:h-12 w-auto object-contain cursor-pointer" />

                    {/* Copyright Text */}
                    <p className="text-gray-700 text-sm md:text-base text-center oswald md:text-right">
                        © 2024 Prolific Studio Best Animation Studio in USA | All Rights Reserved
                    </p>
                </div>

            </motion.div>
        </footer>
    )
}

export default Footer