import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, PenTool, TrendingUp, Layers, Building2 } from 'lucide-react';

const services = [
    {
        title: "Program Management",
        description: "Complete lifecycle management ensuring projects are delivered on time, within budget, and to exacting quality standards. Integration of strategic planning, design, and execution.",
        icon: Layers
    },
    {
        title: "Project Management",
        description: "Professional management of all project phases with rigorous cost control, schedule adherence, and quality assurance protocols. Daily site supervision and reporting.",
        icon: ClipboardList
    },
    {
        title: "Contract Management",
        description: "Expert structuring and administration of construction contracts using FIDIC standards. Claims prevention, dispute resolution, and risk management.",
        icon: PenTool
    },
    {
        title: "Real Estate Advisory",
        description: "Strategic advisory for investors entering Sri Lanka's market. Feasibility analysis, regulatory pathway mapping, financial modeling, and risk assessment.",
        icon: TrendingUp
    },
    {
        title: "End-to-End Development",
        description: "Comprehensive services from land acquisition and concept development to regulatory approvals, construction oversight, and operational handover.",
        icon: Building2
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-4">What We Do</h2>
                        <div className="w-24 h-1.5 bg-navy-900 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            We integrate strategic planning, design coordination, value engineering, and construction oversight into a seamless delivery framework.
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-navy-900 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(10,25,47,0.3)] border border-platinum-200 hover:border-navy-800 relative overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-platinum-200/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="mb-6 inline-block p-4 rounded-full bg-platinum-100 text-navy-900 group-hover:bg-platinum-50 group-hover:text-navy-900 transition-colors duration-300 shadow-sm relative z-10">
                                <service.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-navy-900 group-hover:text-platinum-50 mb-4 transition-colors duration-300 font-heading relative z-10">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 group-hover:text-platinum-200 transition-colors duration-300 leading-relaxed relative z-10">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
