import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6">Start Your Project</h2>
                    <div className="w-24 h-1.5 bg-navy-900 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Let's discuss how we can transform your project vision into delivered reality.
                    </p>
                </motion.div>

                {/* Centered Contact Info Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-platinum-50 p-10 md:p-16 rounded-3xl border border-platinum-200 shadow-xl relative overflow-hidden group">
                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-navy-100 rounded-bl-full opacity-50 -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110"></div>

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

                            {/* Address */}
                            <div className="flex flex-col items-center group/item">
                                <div className="p-6 bg-white rounded-full text-navy-900 shadow-md mb-6 group-hover/item:scale-110 group-hover/item:bg-navy-900 group-hover/item:text-platinum-50 transition-all duration-300">
                                    <MapPin size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-navy-900 mb-3 font-heading">Head Office</h3>
                                <p className="text-gray-600 leading-relaxed max-w-[200px]">
                                    Colombo, Western Province,<br />Sri Lanka
                                </p>
                            </div>

                            {/* Email */}
                            <div className="flex flex-col items-center group/item">
                                <div className="p-6 bg-white rounded-full text-navy-900 shadow-md mb-6 group-hover/item:scale-110 group-hover/item:bg-navy-900 group-hover/item:text-platinum-50 transition-all duration-300">
                                    <Mail size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-navy-900 mb-3 font-heading">Email Us</h3>
                                <a href="mailto:hello@taprootassociates.com" className="text-gray-600 hover:text-navy-900 font-medium transition-colors text-lg">
                                    hello@taprootassociates.com
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col items-center group/item">
                                <div className="p-6 bg-white rounded-full text-navy-900 shadow-md mb-6 group-hover/item:scale-110 group-hover/item:bg-navy-900 group-hover/item:text-platinum-50 transition-all duration-300">
                                    <Phone size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-navy-900 mb-3 font-heading">Call Us</h3>
                                <a href="tel:+94776351408" className="text-gray-600 hover:text-navy-900 font-medium transition-colors text-lg">
                                    +94 77 635 1408
                                </a>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
