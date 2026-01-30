import { Link } from 'react-scroll';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy-950 text-platinum-200 py-12 border-t border-navy-800">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <h2 className="text-2xl font-heading font-bold text-platinum-50 mb-4">TAPROOT</h2>
                    <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                        Strategy Meets Delivery. Full-lifecycle management of infrastructure and real estate development projects across South Asia.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold text-platinum-50 mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        {['About', 'Services', 'Approach', 'Team', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link to={item.toLowerCase()} smooth={true} duration={500} offset={-80} className="text-sm hover:text-platinum-50 cursor-pointer transition-colors block width-full">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-bold text-platinum-50 mb-4">Services</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>Program Management</li>
                        <li>Project Management</li>
                        <li>Contract Management</li>
                        <li>Real Estate Advisory</li>
                        <li>End-to-End Development</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-bold text-platinum-50 mb-4">Contact</h3>
                    <div className="space-y-3 text-sm text-gray-400">
                        <div className="flex items-start gap-3">
                            <MapPin size={18} className="mt-1 flex-shrink-0" />
                            <p>Colombo, Western Province, Sri Lanka</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail size={18} />
                            <a href="mailto:hello@taprootassociates.com" className="hover:text-platinum-50">hello@taprootassociates.com</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone size={18} />
                            <a href="tel:+94776351408" className="hover:text-platinum-50">+94 77 635 1408</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-navy-800 mt-12 pt-8 text-center text-xs text-gray-500">
                <p>&copy; {currentYear} Taproot Associates. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
