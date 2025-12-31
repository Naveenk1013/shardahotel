import { motion } from 'framer-motion';
import { Phone, Mail, Star, Shield, Users, Heart, Wifi, Coffee, Waves, Utensils } from 'lucide-react';
import Button from '../components/Button';

const Home = () => {
    const features = [
        {
            icon: Shield,
            title: 'Safe & Secure',
            description: '24x7 security and safety measures for peace of mind'
        },
        {
            icon: Users,
            title: 'Family Friendly',
            description: 'Perfect for families and pilgrims seeking comfort'
        },
        {
            icon: Heart,
            title: 'Spiritual Haven',
            description: 'Peaceful atmosphere in the heart of Vrindavan'
        },
        {
            icon: Star,
            title: 'Premium Service',
            description: 'Dedicated staff ensuring exceptional hospitality'
        }
    ];

    const amenityHighlights = [
        {
            icon: Waves,
            name: 'Swimming Pool',
            description: 'Refreshing pool for relaxation'
        },
        {
            icon: Utensils,
            name: 'Pure Veg Restaurant',
            description: 'Delicious sattvic cuisine'
        },
        {
            icon: Wifi,
            name: 'Free WiFi',
            description: 'Stay connected throughout'
        },
        {
            icon: Coffee,
            name: 'Bonfire & Lounge',
            description: 'Evening relaxation spots'
        }
    ];

    const rooms = [
        {
            name: 'Deluxe Room',
            size: '250 sq ft',
            guests: '2 Adults',
            image: '/images/deluxe-room.jpg',
            features: ['AC', 'TV', 'Attached Bathroom']
        },
        {
            name: 'Super Deluxe Room',
            size: '300 sq ft',
            guests: '2-3 Adults',
            image: '/images/super-deluxe.jpg',
            features: ['Premium Bedding', 'Mini Fridge', 'Balcony']
        },
        {
            name: 'Family Suite',
            size: '450 sq ft',
            guests: '4-5 People',
            image: '/images/family-suite.jpg',
            features: ['2 Bedrooms', 'Living Area', 'Kitchenette']
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section with Parallax */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Parallax Background Image */}
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: 'url("/images/hero.jpg")',
                            backgroundAttachment: 'fixed',
                        }}
                    />
                    {/* Enhanced Multi-layer Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-spiritual-navy/70 via-spiritual-navy/50 to-spiritual-navy/80" />
                    {/* Mesh gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
                    {/* Vignette effect */}
                    <div className="absolute inset-0" style={{
                        background: 'radial-gradient(circle at center, transparent 0%, rgba(15, 23, 42, 0.4) 100%)'
                    }} />
                </motion.div>

                {/* Floating particles effect (subtle) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-gold-400/20 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {/* Decorative top element */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mb-6"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 glass-luxury rounded-full">
                                <Star className="w-4 h-4 text-gold-400" />
                                <span className="text-gold-400 text-sm font-medium">Premium Hospitality in Vrindavan</span>
                                <Star className="w-4 h-4 text-gold-400" />
                            </div>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                            Welcome to <br />
                            <span className="text-gradient-gold animate-glow">Hotel Sharda Palace</span>
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light"
                        >
                            Your peaceful sanctuary in the divine city of Vrindavan
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <Button href="/rooms" size="lg" className="shadow-gold">
                                Explore Rooms
                            </Button>
                            <Button href="tel:+919876543210" variant="secondary" size="lg">
                                <Phone className="w-5 h-5" />
                                Call Now
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Quick Stats with enhanced design */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
                    >
                        {[
                            { icon: Star, label: '4.5', value: 'Guest Rating' },
                            { icon: Users, label: '500+', value: 'Happy Guests' },
                            { icon: Shield, label: '24x7', value: 'Security' },
                            { icon: Heart, label: '100%', value: 'Satisfaction' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                                className="glass-luxury p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300 group"
                                whileHover={{ y: -5 }}
                            >
                                <stat.icon className="w-8 h-8 text-gold-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.label}</div>
                                <div className="text-xs md:text-sm text-gray-300">{stat.value}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Animated Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{
                        opacity: { delay: 1.5, duration: 0.5 },
                        y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-white/70 text-xs uppercase tracking-wider">Scroll</span>
                        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                            <motion.div
                                className="w-1 h-3 bg-gold-400 rounded-full"
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section-container bg-white">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-spiritual-navy mb-4">
                            Why Choose <span className="text-gradient-gold">Sharda Palace</span>
                        </h2>
                        <div className="divider-gold"></div>
                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                            Experience divine hospitality with modern amenities in the spiritual heart of Vrindavan
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card-luxury p-8 text-center group"
                        >
                            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-spiritual-navy mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Featured Rooms Section */}
            <section id="rooms" className="section-container gradient-spiritual">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Our <span className="text-gradient-gold">Rooms & Suites</span>
                        </h2>
                        <div className="divider-gold"></div>
                        <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
                            Comfortable accommodations designed for your spiritual journey and family comfort
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {rooms.map((room, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card-luxury overflow-hidden group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-primary-600/20"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-white text-6xl font-bold opacity-20">{index + 1}</div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-spiritual-navy mb-2">
                                    {room.name}
                                </h3>
                                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                                    <span>{room.size}</span>
                                    <span>•</span>
                                    <span>{room.guests}</span>
                                </div>
                                <ul className="space-y-2 mb-6">
                                    {room.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button href="#contact" className="w-full">
                                    Book Now
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Amenities Highlights */}
            <section id="amenities" className="section-container bg-white">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-spiritual-navy mb-4">
                            World-Class <span className="text-gradient-gold">Amenities</span>
                        </h2>
                        <div className="divider-gold"></div>
                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                            Everything you need for a comfortable and memorable stay
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {amenityHighlights.map((amenity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                        >
                            <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                                <amenity.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-spiritual-navy mb-2">
                                {amenity.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {amenity.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-container gradient-spiritual text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Experience Divine Hospitality?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Book your stay at Hotel Sharda Palace today and enjoy peaceful comfort in Vrindavan
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button href="#contact" size="lg">
                            Book Your Stay
                        </Button>
                        <Button href="tel:+919876543210" variant="secondary" size="lg">
                            <Phone className="w-5 h-5 mr-2" />
                            +91 98765 43210
                        </Button>
                        <Button href="mailto:info@shardapalace.com" variant="outline" size="lg">
                            <Mail className="w-5 h-5 mr-2" />
                            Email Us
                        </Button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
