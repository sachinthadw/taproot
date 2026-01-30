import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
    const { scrollY } = useScroll();
    const yBackground = useTransform(scrollY, [0, 1000], [0, 400]);
    const yText = useTransform(scrollY, [0, 500], [0, 200]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y: yBackground }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="/assets/hero_background.png"
                    alt="Hero Background"
                    className="w-full h-[120%] object-cover -top-[10%]"
                />
                <div className="absolute inset-0 bg-navy-900/60 mix-blend-multiply" /> {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-navy-900/30" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    style={{ y: yText, opacity: opacityText }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-platinum-50 mb-6 drop-shadow-2xl tracking-tight leading-tight">
                        Strategy Meets <br /> <span className="text-platinum-200/90 italic">Delivery</span>
                    </h1>
                </motion.div>

                <motion.div
                    style={{ y: yText, opacity: opacityText }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                    <p className="text-xl md:text-2xl text-platinum-100 mb-10 max-w-2xl mx-auto font-light tracking-wide">
                        Your Vision. Our Expertise. Delivered.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    className="flex flex-col md:flex-row gap-6 justify-center"
                >
                    <Link
                        to="about"
                        smooth={true}
                        duration={800}
                        offset={-80}
                        className="px-8 py-3 bg-platinum-100 text-navy-900 font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(229,228,226,0.3)] cursor-pointer"
                    >
                        Discover More
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={800}
                        offset={-80}
                        className="px-8 py-3 border border-platinum-100 text-platinum-100 font-bold uppercase tracking-widest hover:bg-platinum-100 hover:text-navy-900 hover:scale-105 transition-all duration-300 rounded-full cursor-pointer backdrop-blur-sm"
                    >
                        Contact Us
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <Link to="about" smooth={true} duration={800} offset={-80} className="cursor-pointer">
                    <div className="w-6 h-10 border-2 border-platinum-200/50 rounded-full flex justify-center p-1">
                        <motion.div
                            animate={{ height: ["20%", "50%", "20%"], y: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 bg-platinum-200 rounded-full"
                        />
                    </div>
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
