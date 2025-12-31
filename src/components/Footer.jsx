import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="gradient-spiritual text-white">
            {/* Main Footer Content */}
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gradient-gold mb-4">
                            Hotel Sharda Palace
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Experience divine hospitality in the heart of Vrindavan.
                            A peaceful sanctuary for pilgrims and families seeking
                            spiritual comfort and modern amenities.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold mb-4 text-gold-400">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-gold-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-gold-400 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/rooms" className="text-gray-300 hover:text-gold-400 transition-colors">
                                    Rooms & Suites
                                </Link>
                            </li>
                            <li>
                                <Link to="/amenities" className="text-gray-300 hover:text-gold-400 transition-colors">
                                    Amenities
                                </Link>
                            </li>
                            <li>
                                <Link to="/gallery" className="text-gray-300 hover:text-gold-400 transition-colors">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-300 hover:text-gold-400 transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold mb-4 text-gold-400">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <a href="tel:+919876543210" className="text-gray-300 hover:text-gold-400 transition-colors">
                                        +91 98765 43210
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <a href="mailto:info@shardapalace.com" className="text-gray-300 hover:text-gold-400 transition-colors">
                                        info@shardapalace.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                                <div className="text-gray-300 text-sm">
                                    Vrindavan, Mathura<br />
                                    Uttar Pradesh, India
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold mb-4 text-gold-400">Check-in Details</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                                <div className="text-gray-300 text-sm">
                                    <div className="font-medium mb-1">Check-in:</div>
                                    <div>12:00 PM onwards</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                                <div className="text-gray-300 text-sm">
                                    <div className="font-medium mb-1">Check-out:</div>
                                    <div>11:00 AM</div>
                                </div>
                            </li>
                        </ul>
                        <div className="pt-4">
                            <p className="text-gray-400 text-xs">
                                24x7 Front Desk Available
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="section-container py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Hotel Sharda Palace. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <Link to="/policies" className="text-gray-400 hover:text-gold-400 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/policies" className="text-gray-400 hover:text-gold-400 transition-colors">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
