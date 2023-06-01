'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollAnimation = () => {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollX;
            const viewportWidth = window.innerWidth;

            // Calculate the threshold value based on the width of the viewport
            const threshold = viewportWidth * 0.7;

            // Check if the scroll position is greater than the threshold
            if (scrollPosition > threshold) {
                controls.start({ opacity: 1, x: 0 }); // Animate the divs
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

    return (
        <div style={{ width: '200vw', height: '100vh', overflowX: 'scroll' }}>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={controls}
                transition={{ duration: 0.5 }}
                style={{ width: '100%', height: '100%', background: 'red' }}
            />
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ width: '100%', height: '100%', background: 'blue' }}
            />
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{ width: '100%', height: '100%', background: 'green' }}
            />
        </div>
    );
};

export default ScrollAnimation;