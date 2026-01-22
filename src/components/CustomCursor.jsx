"use client"
import React, { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor({ text }) {
    const [isVisible, setIsVisible] = useState(false);

    // Mouse coordinates
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring physics for a "premium" feel
    const springConfig = { damping: 20, stiffness: 250 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            // Check if the element under the mouse (or its parents) has the 'drag' class
            const target = e.target;
            if (target && target.closest('.drag')) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            style={{
                translateX: cursorX,
                translateY: cursorY,
                left: -40, // Half of the width (80/2)
                top: -40,  // Half of the height (80/2)
                pointerEvents: 'none',
                position: 'fixed',
                zIndex: 9999,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                scale: isVisible ? 1 : 0,
                opacity: isVisible ? 1 : 0
            }}
            className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl"
        >
            <span className="text-black font-bold  uppercase tracking-widest" style={{ fontFamily: "var(--font-my" }}>
                {text}
            </span>
        </motion.div>
    )
}