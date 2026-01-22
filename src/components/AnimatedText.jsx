"use client"

import { motion } from "framer-motion"

const AnimatedText = ({ text, className }) => {
    // 1. Container Variant: This controls the DELAY between children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05, // 0.05s delay between each letter
                delayChildren: 0.2,    // Wait 0.2s before starting the first letter
            }
        }
    };

    const letterVariants = {
        hidden: {
            opacity: 0,
            y: -50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        // 2. We wrap the letters in a motion parent to trigger the stagger
        <motion.span
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" // Animates when it enters the screen
            viewport={{ once: true }}
            className={`inline-block ${className}`}
        >
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    variants={letterVariants}
                    className="inline-block"
                    style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    )
};

export default AnimatedText;