import { motion } from 'framer-motion';
import { Waves, Utensils, Wifi, Coffee, Car, Shield, Droplets, Wind, Dumbbell, Sparkles } from 'lucide-react';
import Button from '../components/Button';

const Amenities = () => {
    const amenities = [
        {
            icon: Waves,
            title: 'Swimming Pool',
            description: 'Outdoor swimming pool with clean, filtered water',
            features: ['Separate areas for adults and children', 'Poolside loungers', 'Changing rooms', 'Pool towels provided']
        },
        {
            icon: Utensils,
            title: 'Pure Vegetarian Restaurant',
            description: 'Authentic sattvic cuisine with traditional recipes',
            features: ['North & South Indian dishes', 'À la carte and buffet options', 'Special Prasad meals', 'Room service available']
        },
        {
            icon: Coffee,
            title: 'Bonfire & Lounge',
            description: 'Evening bonfire setup for relaxation and gatherings',
            features: ['Open-air seating', 'Evening snacks', 'Music ambiance', 'Perfect for families']
        },
        {
            icon: Sparkles,
            title: 'Lawn & Sit-out Area',
            description: 'Beautifully maintained gardens for peaceful moments',
            features: ['Lush green lawns', 'Garden seating', 'Walking paths', 'Photo-worthy spots']
        },
        {
            icon: Wifi,
            title: 'Free High-Speed WiFi',
            description: 'Stay connected throughout your stay',
            features: ['Available in all rooms', 'Common area coverage', 'High-speed connectivity', 'No additional charges']
        },
        {
            icon: Car,
            title: 'Free Parking',
            description: 'Ample parking space for guests',
            features: ['24x7 security', 'CCTV surveillance', 'Well-lit parking', 'Car wash on request']
        },
        {
            icon: Shield,
            title: '24x7 Security',
            description: 'Round-the-clock security for your peace of mind',
            features: ['Trained security personnel', 'CCTV monitoring', 'Secure entry points', 'Fire safety equipment']
        },
        {
            icon: Droplets,
            title: 'Laundry Service',
            description: 'Professional laundry and dry cleaning',
            features: ['Same-day service', 'Ironing included', 'Dry cleaning available', 'Pickup from room']
        },
        {
            icon: Wind,
            title: 'Air Conditioning',
            description: 'Climate control in all rooms',
            features: ['Individual AC controls', 'Well-maintained systems', 'Energy efficient', 'Regular servicing']
        },
        {
            icon: Dumbbell,
            title: 'Elevator Access',
            description: 'Convenient elevator for all floors',
            features: ['Accessible for elderly', 'Luggage-friendly', 'Well-maintained', 'Emergency backup']
        }
    ];

    const additionalServices = [
        'Room Service (7 AM - 10 PM)',
        'Daily Housekeeping',
        'Travel Desk',
        'Taxi/Car Rental Assistance',
        'Doctor on Call',
        'Wake-up Call Service',
        'Luggage Storage',
        'Express Check-in/out'
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="gradient-spiritual text-white section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Our <span className="text-gradient-gold">Amenities</span>
                    </h1>
                    <div className="divider-gold mb-8"></div>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                        Enjoy world-class facilities designed to make your stay comfortable and memorable
                    </p>
                </motion.div>
            </section>

            {/* Main Amenities Grid */}
            <section className="section-container bg-white">
                <div className="grid md:grid-cols-2 gap-8">
                    {amenities.map((amenity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card-luxury p-8"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <amenity.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-spiritual-navy mb-2">
                                        {amenity.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {amenity.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {amenity.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                                <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Additional Services */}
            <section className="section-container gradient-spiritual text-white">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Additional Services
                        </h2>
                        <div className="divider-gold"></div>
                        <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
                            We go the extra mile to ensure your comfort with these complimentary and on-request services
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {additionalServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-dark p-4 rounded-xl text-center"
                        >
                            <p className="text-sm font-medium">{service}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Special Features */}
            <section className="section-container bg-white">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-spiritual-navy mb-4">
                        What Makes Us Special
                    </h2>
                    <div className="divider-gold"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">🕉️</span>
                        </div>
                        <h3 className="text-xl font-bold text-spiritual-navy mb-2">
                            Spiritual Ambiance
                        </h3>
                        <p className="text-gray-600">
                            Peaceful environment perfect for meditation and spiritual practices
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-center"
                    >
                        <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">👨‍👩‍👧‍👦</span>
                        </div>
                        <h3 className="text-xl font-bold text-spiritual-navy mb-2">
                            Family Friendly
                        </h3>
                        <p className="text-gray-600">
                            Safe, comfortable spaces designed with families and children in mind
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-center"
                    >
                        <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">✨</span>
                        </div>
                        <h3 className="text-xl font-bold text-spiritual-navy mb-2">
                            Hygiene First
                        </h3>
                        <p className="text-gray-600">
                            Maintained to the highest standards of cleanliness and sanitation
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-container gradient-spiritual text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Experience Our Premium Amenities
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Book your stay today and enjoy all these facilities during your visit to Vrindavan
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/rooms" size="lg">
                            View Rooms
                        </Button>
                        <Button href="/contact" variant="secondary" size="lg">
                            Make a Reservation
                        </Button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Amenities;
