import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        title: "Strategic Program Planning",
        description: "Feasibility validation, stakeholder mapping, risk assessment, and commercial strategy aligned with investor returns before design finalization.",
        step: "01"
    },
    {
        title: "Integrated Design & Procurement",
        description: "Design coordination across all disciplines, systematic value engineering, competitive procurement strategy, FIDIC or CIDA-aligned contract structuring, and contractor pre-qualification.",
        step: "02"
    },
    {
        title: "Construction Excellence",
        description: "Resident engineering for daily supervision, progress tracking against schedule and budget, proactive cost control, safety and compliance monitoring, change order discipline.",
        step: "03"
    },
    {
        title: "Seamless Handover",
        description: "Defect rectification, commissioning protocols, operator onboarding, comprehensive documentation handover, knowledge transfer, and post-handover support.",
        step: "04"
    }
];

const Approach: React.FC = () => {
    return (
        <section id="approach" className="py-24 bg-navy-900 text-platinum-50 overflow-hidden relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Approach</h2>
                    <div className="w-24 h-1.5 bg-platinum-200 mx-auto rounded-full mb-6"></div>
                    <p className="text-platinum-200/80 max-w-2xl mx-auto text-lg">
                        A systematic, integrated delivery framework ensuring your vision becomes reality.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-navy-700 hidden md:block"></div>

                    <div className="space-y-12 md:space-y-0">
                        {steps.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className="md:w-5/12"></div>

                                {/* Step Number / Icon */}
                                <div className="z-10 bg-navy-800 border-4 border-platinum-200 w-16 h-16 rounded-full flex items-center justify-center shadow-lg mb-6 md:mb-0 transform hover:scale-110 transition-transform duration-300">
                                    <span className="text-xl font-bold font-heading text-platinum-100">{item.step}</span>
                                </div>

                                <div className="md:w-5/12 bg-navy-800/40 backdrop-blur-md p-8 rounded-xl border border-navy-700/50 hover:bg-navy-800/60 hover:border-platinum-200/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(229,228,226,0.1)] group">
                                    <h3 className="text-2xl font-bold mb-4 text-platinum-100 group-hover:text-platinum-50 transition-colors">{item.title}</h3>
                                    <p className="text-platinum-200/70 leading-relaxed text-sm group-hover:text-platinum-200 transition-colors">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
        </section>
    );
};

export default Approach;
