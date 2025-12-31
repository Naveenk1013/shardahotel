import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Rooms', href: '/rooms' },
        { name: 'Amenities', href: '/amenities' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Location', href: '/location' },
        { name: 'Policies', href: '/policies' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'glass-dark shadow-2xl'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            to="/"
                            className="flex items-center space-x-2"
                        >
                            <div className="text-2xl font-bold">
                                <span className="text-white">Sharda</span>
                                <span className="text-gradient-gold"> Palace</span>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <motion.div
                        className="hidden lg:flex items-center space-x-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-white hover:text-gold-400 transition-colors font-medium ${location.pathname === link.href ? 'text-gold-400' : ''
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="hidden md:flex items-center space-x-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <a
                            href="tel:+919876543210"
                            className="flex items-center gap-2 px-4 py-2 text-white hover:text-gold-400 transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            <span className="font-medium">Call Now</span>
                        </a>
                        <Link to="/contact" className="btn-primary">
                            Book Now
                        </Link>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-white p-2"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden glass-dark border-t border-white/10"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`block text-white hover:text-gold-400 transition-colors font-medium py-2 ${location.pathname === link.href ? 'text-gold-400' : ''
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-white/10 space-y-3">
                                <a
                                    href="tel:+919876543210"
                                    className="flex items-center gap-2 text-white hover:text-gold-400 transition-colors py-2"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span className="font-medium">+91 98765 43210</span>
                                </a>
                                <Link
                                    to="/contact"
                                    className="block btn-primary text-center"
                                >
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
