"use client"
import { Mail, Menu, Phone, X, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Scroll Logic: Hide on scroll down, show on scroll up
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="bg-white flex items-center justify-between px-4 md:px-10 h-18 shadow-md sticky top-0 z-[100]"
                style={{ fontFamily: "var(--font-my)" }}
            >
                {/* LOGO - Fixed on the left */}
                <div className="bg-secondary text-white px-8 flex items-center  h-full text-xl absolute left-0 top-0 z-20">
                    LOGO
                </div>

                {/* Desktop & Tablet Layout Wrapper */}
                <div className='flex justify-between items-center w-full max-w-3xl xl:max-w-5xl mx-auto pl-24 lg:pl-0'>

                    {/* CENTER CONTACT INFO: Hidden on Mobile & Tablet, Visible on LG */}
                    <div className="hidden lg:flex items-center gap-8 oswald max-lg:hidden">
                        <div className="flex items-center gap-3">
                            <div className="bg-black p-2 rounded-full text-white shadow-lg">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-primary   uppercase leading-none">Mail Us</p>
                                <p className="text-black text-sm  mt-1 ">info@example.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-black p-2 rounded-full text-white shadow-lg">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-primary   uppercase leading-none">Call Us Now</p>
                                <p className="text-black text-sm mt-1 ">(123)-456-7890</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT ACTION BUTTONS: Partially hidden on Mobile */}
                    <div className="flex items-center gap-3 ml-auto lg:ml-0 oswald text-">
                        <button className="hidden md:block bg-black text-white px-5 py-2.5 rounded-full   hover:bg-gray-800 transition-all active:scale-95">
                            GET A QUOTE!
                        </button>
                        <button className="hidden sm:block bg-black text-white px-5 py-2.5 rounded-full   hover:bg-gray-800 transition-all active:scale-95">
                            LIVE CHAT!
                        </button>

                        {/* Hamburger Button */}
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="bg-primary text-white p-2.5 rounded-full hover:scale-105 active:scale-95 transition-transform shadow-md"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-[#1D1B36] z-[200] flex flex-col p-6 w-full lg:w-[400px] lg:left-auto"
                    >
                        {/* Close Header */}
                        <div className="flex justify-between items-center mb-12">
                            <span className="text-white  text-xl">NAVIGATION</span>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="bg-primary text-white p-2 rounded-full"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Menu Content */}
                        <div className="flex flex-col gap-6">
                            {/* Contact info for mobile inside menu */}
                            <div className="flex flex-col gap-6 border-b border-white/10 pb-8">
                                <div className="flex items-center gap-4">
                                    <div className="bg-white/10 p-3 rounded-full text-primary"><Mail size={20} /></div>
                                    <div className="text-white">
                                        <p className="text-[10px] uppercase text-primary ">Mail Us</p>
                                        <p className="text-lg">info@example.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-white/10 p-3 rounded-full text-primary"><Phone size={20} /></div>
                                    <div className="text-white">
                                        <p className="text-[10px] uppercase text-primary ">Call Us Now</p>
                                        <p className="text-lg">(123)-456-7890</p>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile CTA Buttons */}
                            <div className="flex flex-col gap-4 mt-4">
                                <button className="w-full bg-white text-black py-4 rounded-xl  flex justify-between px-6 items-center group">
                                    GET A QUOTE
                                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="w-full bg-primary text-white py-4 rounded-xl  flex justify-between px-6 items-center group">
                                    LIVE CHAT
                                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop for mobile menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMenuOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150]"
                    />
                )}
            </AnimatePresence>
        </>
    )
}