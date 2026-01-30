import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, BarChart3, Globe2, Users2, FileCheck } from 'lucide-react';

const advantages = [
    { title: "Full Lifecycle Integration", description: "Seamless delivery from concept to handover.", icon: FileCheck },
    { title: "Regulatory Navigation", description: "Proprietary expertise in local approvals.", icon: ShieldCheck },
    { title: "Investor-Centric", description: "Aligned with investor success, not just construction.", icon: Users2 },
    { title: "Institutional Reporting", description: "Real-time dashboards and transparency.", icon: BarChart3 },
    { title: "Technical + Commercial", description: "Engineering credentials met with business acumen.", icon: BarChart3 },
    { title: "International Standards", description: "FIDIC & global best practices adapted locally.", icon: Globe2 },
];

const Team: React.FC = () => {
    return (
        <section id="team" className="py-24 bg-platinum-100 relative overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Team Intro */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6">World-Class Expertise</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                            Our team combines 35+ years of experience in construction management and real estate development.
                            We retain core technical and commercial capabilities in-house while strategically engaging specialist consultants.
                        </p>
                    </motion.div>
                </div>

                {/* Competitive Advantages */}
                <div className="bg-navy-900 rounded-3xl p-12 relative overflow-hidden text-platinum-50 mb-20">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-platinum-200 opacity-5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-platinum-200 opacity-5 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="text-center mb-12 relative z-10">
                        <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Choose Taproot?</h3>
                        <p className="text-platinum-200/80">Your success is our mandate.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                        {advantages.map((adv, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-navy-800/40 backdrop-blur-md p-6 rounded-xl border border-navy-700/50 hover:bg-navy-800/60 hover:border-platinum-200/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(229,228,226,0.1)] group"
                            >
                                <div className="mb-4 text-platinum-200 group-hover:text-platinum-50 transition-colors">
                                    <adv.icon size={28} />
                                </div>
                                <h4 className="text-xl font-bold mb-2 group-hover:text-platinum-50 transition-colors">{adv.title}</h4>
                                <p className="text-platinum-200/70 text-sm group-hover:text-platinum-200 transition-colors">{adv.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Qualifications - Redesigned as Credentials Strip */}
                <div className="max-w-5xl mx-auto">
                    <h3 className="text-2xl font-bold text-navy-900 text-center mb-10 font-heading">Our Credentials</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "MSc in Construction Law & Dispute Resolution",
                            "FIDIC Certified & CIDA Trained",
                            "PMP (Project Management Professional)",
                            "Civil Engineering (BSc) & Mechanical Engineering (BEng)",
                            "MBA Qualifications",
                            "Deep International Contract Knowledge"
                        ].map((qual, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 p-4 bg-white rounded-lg border-l-4 border-navy-900 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="p-2 bg-platinum-100 rounded-full text-navy-900">
                                    <CheckCircle2 size={18} />
                                </div>
                                <span className="text-navy-900 font-medium text-sm leading-tight">{qual}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
