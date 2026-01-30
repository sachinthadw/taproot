import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation: React.FC = () => {
    // Generate random lines resembling a blueprint/construction schematic
    const lines = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        x1: Math.random() * 100 + "%",
        y1: Math.random() * 100 + "%",
        x2: Math.random() * 100 + "%",
        y2: Math.random() * 100 + "%",
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5
    }));

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-10">
            <svg className="w-full h-full">
                {lines.map((line) => (
                    <motion.line
                        key={line.id}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="#0A192F"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 0],
                            opacity: [0, 0.5, 0],
                            x1: [line.x1, line.x2], // Moderate movement
                            y1: [line.y1, line.y2]
                        }}
                        transition={{
                            duration: line.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: line.delay
                        }}
                    />
                ))}
            </svg>
            {/* Floating Particles */}
            {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-navy-900 rounded-full w-1 h-1"
                    initial={{
                        x: Math.random() * 100 + "vw",
                        y: Math.random() * 100 + "vh",
                        opacity: 0
                    }}
                    animate={{
                        y: [null, Math.random() * -100 + "vh"],
                        opacity: [0, 0.4, 0]
                    }}
                    transition={{
                        duration: Math.random() * 20 + 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 10
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundAnimation;
