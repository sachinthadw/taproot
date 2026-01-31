import React from 'react';
import { motion } from 'framer-motion';
import teamMeetingImg from '../assets/team_meeting.png';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-platinum-50 overflow-hidden relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="md:w-1/2 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
                            <img src={teamMeetingImg} alt="Taproot Team" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-navy-900/10 mix-blend-overlay"></div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-navy-900 rounded-lg -z-0"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-navy-900 rounded-full -z-0 bg-transparent opacity-50"></div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-8 relative inline-block">
                            Who We Are
                            <span className="absolute -bottom-2 left-0 w-2/3 h-1.5 bg-navy-900 rounded-full"></span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                            <p className="font-medium text-navy-800 text-xl border-l-4 border-platinum-200 pl-4">
                                Taproot Associates is a specialized program management firm delivering full-lifecycle management of infrastructure and real estate development projects across South Asia.
                            </p>
                            <p>
                                We distinguish ourselves through complete end-to-end accountability—from concept and feasibility through design, procurement, construction, and operational handover. Unlike conventional project managers who work within discrete contractual packages, we assume integrated responsibility for timely delivery, cost control, quality assurance, regulatory compliance, and stakeholder alignment.
                            </p>
                        </div>

                        <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-platinum-200 transform hover:-translate-y-1 transition-transform duration-300">
                            <p className="text-navy-900 font-bold text-xl text-center font-heading">
                                "Your Vision. Our Expertise. Delivered."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-platinum-200/20 to-transparent -z-10 pointer-events-none" />
        </section>
    );
};

export default About;
