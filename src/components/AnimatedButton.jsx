import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AnimatedButton = ({ text = "START YOUR PROJECT NOW!", onClick }) => {
    return (
        <motion.button
            onClick={onClick}
            // Button Entrance Animation
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // Interaction Animations
            whileHover="hover"
            whileTap={{ scale: 0.96 }}
            className="group relative flex items-center gap-4 bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 select-none cursor-pointer"
        >
            {/* Button Text */}
            <span className="text-black  text-xs  tracking-tight uppercase leading-none" style={{ fontFamily: "var(--font-my)" }}>
                {text}
            </span>

            {/* Dark Circle with Arrow */}
            <motion.div
                variants={{
                    hover: { x: 5, scale: 1.05 }
                }}
                className="relative flex items-center justify-center w-7 h-7 bg-[#1a0b0b] rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
            >
                <motion.div
                    variants={{
                        hover: { x: 5 }
                    }}
                >
                    <ArrowRight className="text-white w-4 h-4 " strokeWidth={3} />
                </motion.div>

                {/* Subtle Outer Glow on Hover */}
                <motion.div
                    variants={{
                        hover: { opacity: 1, scale: 1.2 }
                    }}
                    initial={{ opacity: 0, scale: 1 }}
                    className="absolute inset-0 bg-black/10 rounded-full -z-10 blur-md"
                />
            </motion.div>

            {/* Subtle Button Background Animation */}
            <motion.div
                variants={{
                    hover: { opacity: 0.05 }
                }}
                initial={{ opacity: 0 }}
                className="absolute inset-0 bg-black rounded-full pointer-events-none"
            />
        </motion.button>
    );
};

export default AnimatedButton;