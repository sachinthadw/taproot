import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
    const [formStatus, setFormStatus] = React.useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');
        setTimeout(() => {
            setFormStatus('sent');
            alert("Message sent successfully! (This is a demo)");
        }, 1500);
    };

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

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 space-y-8"
                    >
                        <div className="bg-platinum-50 p-8 rounded-2xl border border-platinum-200">
                            <h3 className="text-2xl font-bold text-navy-900 mb-8 font-heading">Contact Information</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-navy-100 rounded-full text-navy-900 group-hover:bg-navy-900 group-hover:text-platinum-50 transition-colors duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-navy-900 mb-1">Head Office</p>
                                        <p className="text-gray-600 text-sm leading-relaxed">Colombo, Western Province, Sri Lanka</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-navy-100 rounded-full text-navy-900 group-hover:bg-navy-900 group-hover:text-platinum-50 transition-colors duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-navy-900 mb-1">Email Us</p>
                                        <a href="mailto:hello@taprootassociates.com" className="text-gray-600 text-sm hover:text-navy-900 transition-colors">hello@taprootassociates.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-navy-100 rounded-full text-navy-900 group-hover:bg-navy-900 group-hover:text-platinum-50 transition-colors duration-300">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-navy-900 mb-1">Call Us</p>
                                        <a href="tel:+94776351408" className="text-gray-600 text-sm hover:text-navy-900 transition-colors">+94 77 635 1408</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3"
                    >
                        <form onSubmit={handleSubmit} className="bg-platinum-50 p-8 md:p-10 rounded-2xl shadow-xl border border-platinum-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-bold text-navy-900 mb-2">First Name</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-platinum-200 bg-white focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-navy-900 mb-2">Last Name</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-platinum-200 bg-white focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-bold text-navy-900 mb-2">Email Address</label>
                                <input required type="email" className="w-full px-4 py-3 rounded-lg border border-platinum-200 bg-white focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all" placeholder="john@example.com" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-bold text-navy-900 mb-2">Project Type</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-platinum-200 bg-white focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all text-gray-600">
                                    <option>Select a project type...</option>
                                    <option>Residential Development</option>
                                    <option>Hospitality / Resort</option>
                                    <option>Commercial / Office</option>
                                    <option>Infrastructure</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="mb-8">
                                <label className="block text-sm font-bold text-navy-900 mb-2">Message</label>
                                <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-platinum-200 bg-white focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={formStatus === 'sending' || formStatus === 'sent'}
                                className="w-full py-4 bg-navy-900 text-platinum-50 font-bold uppercase tracking-widest rounded-lg hover:bg-navy-800 transition-all shadow-lg transform hover:-translate-y-1 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {formStatus === 'sending' ? 'Sending...' : formStatus === 'sent' ? 'Message Sent' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
