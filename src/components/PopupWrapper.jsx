import React from 'react'
import { motion } from "framer-motion"
export default function PopupWrapper({ children }) {
    return (
        <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, ease: "linear" }}
        >
            {children}
        </motion.div>
    )
}
