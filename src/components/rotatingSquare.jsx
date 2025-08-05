import React from 'react';
import '../styles/App.css';
import { motion } from "motion/react"

const RotatingSquare = () => {
    return (
        <motion.div className="rotatingSqr" animate={{ rotate: 380 }} transition={{ duration: 1, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}>Loading</motion.div>
    );
}

export default RotatingSquare;
