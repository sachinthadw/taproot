import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import logo from '../assets/taproot-logo.png';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Services', to: 'services' },
        { name: 'Approach', to: 'approach' },
        { name: 'Team', to: 'team' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(
                "fixed z-50 transition-all duration-300 ease-in-out font-heading left-0 right-0 flex justify-center",
                isScrolled ? "top-6" : "top-0 md:top-6"
            )}
        >
            <div
                className={cn(
                    "flex justify-between items-center transition-all duration-300",
                    isScrolled
                        ? "bg-navy-900 border border-platinum-200/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-full px-8 py-3 w-[90%] md:w-auto md:min-w-[700px]"
                        : "bg-transparent w-full px-6 py-6 md:px-12"
                )}
            >
                <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer flex items-center gap-2 group"
                >
                    <img src={logo} alt="Taproot Associates" className={cn("transition-all duration-300 object-contain", isScrolled ? "h-12 md:h-14" : "h-16 md:h-20")} />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className={cn(
                                "cursor-pointer text-sm font-medium tracking-wide uppercase transition-all relative hover:text-platinum-50",
                                isScrolled ? "text-platinum-200" : "text-platinum-100"
                            )}
                        >
                            <span className="relative z-10">{link.name}</span>
                            <motion.span
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-platinum-100 transition-all duration-300 group-hover:w-full"
                                whileHover={{ width: '100%' }}
                            />
                        </Link>
                    ))}

                    <Link
                        to="contact"
                        smooth={true}
                        duration={800}
                        offset={-80}
                        className={cn(
                            "px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer border",
                            isScrolled
                                ? "bg-platinum-100 text-navy-900 border-platinum-100 hover:bg-white"
                                : "bg-transparent text-platinum-100 border-platinum-100 hover:bg-platinum-100 hover:text-navy-900"
                        )}
                    >
                        Get in Touch
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={cn("md:hidden focus:outline-none transition-colors", isScrolled ? "text-platinum-100" : "text-platinum-100")}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-8 h-8" />
                    ) : (
                        <Menu className="w-8 h-8" />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-24 left-4 right-4 bg-navy-900/95 backdrop-blur-xl border border-platinum-200/10 rounded-2xl md:hidden overflow-hidden shadow-2xl"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-platinum-100 text-lg font-medium tracking-wide hover:text-platinum-200 cursor-pointer border-b border-navy-800 pb-2 last:border-0"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="contact"
                                smooth={true}
                                duration={800}
                                offset={-80}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full text-center py-3 bg-platinum-100 text-navy-900 font-bold uppercase tracking-widest rounded-lg mt-4"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
