"use client"

import { motion } from "framer-motion"

const AnimatedText = ({ text, className }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2,
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

    // 1. Split the text into words first
    const words = text.split(" ");

    return (
        <motion.span
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`inline-block ${className}`}
        >
            {words.map((word, wordIndex) => (
                // 2. Wrap each word in a span that prevents line breaks inside the word
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            variants={letterVariants}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                    {/* 3. Add a space after each word except the last one */}
                    {wordIndex !== words.length - 1 && (
                        <span className="inline-block">&nbsp;</span>
                    )}
                </span>
            ))}
        </motion.span>
    )
};

export default AnimatedText;