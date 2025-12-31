import { motion } from 'framer-motion';
import { MapPin, Navigation, Train, Plane, Car, Clock, Map as MapIcon } from 'lucide-react';
import Button from '../components/Button';

const Location = () => {
    const temples = [
        { name: 'ISKCON Temple', distance: '2.5 km', time: '8 mins' },
        { name: 'Banke Bihari Temple', distance: '3 km', time: '10 mins' },
        { name: 'Prem Mandir', distance: '4 km', time: '12 mins' },
        { name: 'Radha Vallabh Temple', distance: '2.8 km', time: '9 mins' },
        { name: 'Rangji Temple', distance: '3.5 km', time: '11 mins' },
        { name: 'Shahji Temple', distance: '2km', time: '7 mins' }
    ];

    const transport = [
        {
            icon: Train,
            title: 'Mathura Junction Railway Station',
            distance: '12 km',
            time: '25 minutes',
            description: 'Major railway station connecting to all Indian cities'
        },
        {
            icon: Plane,
            title: 'Agra Airport (Kheria)',
            distance: '65 km',
            time: '1.5 hours',
            description: 'Nearest airport with domestic flight connections'
        },
        {
            icon: Plane,
            title: 'Delhi IGI Airport',
            distance: '160 km',
            time: '3-4 hours',
            description: 'International airport with best connectivity'
        },
        {
            icon: Car,
            title: 'Road Access',
            distance: 'NH-19',
            time: 'Direct access',
            description: 'Well-connected by road to Delhi, Agra, and other cities'
        }
    ];

    const directions = [
        {
            from: 'Delhi',
            route: 'NH-19 (Yamuna Expressway recommended)',
            distance: '160 km',
            time: '3-3.5 hours'
        },
        {
            from: 'Agra',
            route: 'NH-19 via Fatehabad Road',
            distance: '60 km',
            time: '1.5 hours'
        },
        {
            from: 'Jaipur',
            route: 'NH-21 to Mathura',
            distance: '245 km',
            time: '4-5 hours'
        },
        {
            from: 'Gurgaon',
            route: 'NH-19 (Yamuna Expressway)',
            distance: '140 km',
            time: '2.5-3 hours'
        }
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
                        Location & <span className="text-gradient-gold">How to Reach</span>
                    </h1>
                    <div className="divider-gold mb-8"></div>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                        Perfectly located in Vrindavan for easy access to all major temples and spiritual destinations
                    </p>
                </motion.div>
            </section>

            {/* Google Map Section */}
            <section className="section-container bg-white">
                <div className="card-luxury p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-6">
                        <MapIcon className="w-8 h-8 text-gold-600" />
                        <h2 className="text-3xl font-bold text-spiritual-navy">
                            Find Us on Map
                        </h2>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="aspect-video rounded-xl overflow-hidden mb-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.9876543210123!2d77.6860365!3d27.5576501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39737100049d9081%3A0x861c1aeb46293830!2sHotel%20sharda%20palace!5e0!3m2!1sen!2sin!4v1735644000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Hotel Sharda Palace Location"
                        ></iframe>
                    </div>

                    {/* Address Card */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                            <MapPin className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-spiritual-navy mb-2">Address</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Hotel Sharda Palace<br />
                                    HM5Q+377, Kailash Nagar Rd<br />
                                    Kailash Nagar, Vrindavan<br />
                                    Uttar Pradesh - 281121<br />
                                    India
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                            <Navigation className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-spiritual-navy mb-2">GPS Coordinates</h3>
                                <p className="text-gray-700 font-mono text-sm">
                                    Latitude: 27.5576501° N<br />
                                    Longitude: 77.6881865° E
                                </p>
                                <Button
                                    href="https://www.google.com/maps/dir/?api=1&destination=27.5576501,77.6881865"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3"
                                    size="sm"
                                    variant="outline"
                                >
                                    Get Directions
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Temples */}
            <section className="section-container bg-gray-50">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-spiritual-navy mb-4">
                        Nearby Temples & Attractions
                    </h2>
                    <div className="divider-gold"></div>
                    <p className="text-gray-600 mt-6">
                        Walk or take a short drive to Vrindavan's most sacred places
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {temples.map((temple, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="card-luxury p-6"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="font-bold text-lg text-spiritual-navy">
                                    {temple.name}
                                </h3>
                                <span className="text-2xl">🕉️</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4 text-gold-600" />
                                    <span>{temple.distance}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4 text-gold-600" />
                                    <span>{temple.time}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* How to Reach */}
            <section className="section-container bg-white">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-spiritual-navy mb-4">
                        How to Reach
                    </h2>
                    <div className="divider-gold"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {transport.map((mode, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card-luxury p-8"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <mode.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-spiritual-navy mb-2">
                                        {mode.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                                        <span className="font-semibold">{mode.distance}</span>
                                        <span>•</span>
                                        <span>{mode.time}</span>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        {mode.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Driving Directions */}
            <section className="section-container gradient-spiritual text-white">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Driving Directions
                        </h2>
                        <div className="divider-gold"></div>
                        <p className="text-gray-300 mt-6">
                            Approximate distance and travel time from major cities
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {directions.map((direction, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-dark p-6 rounded-xl"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Car className="w-6 h-6 text-gold-400" />
                                <h3 className="text-xl font-bold">From {direction.from}</h3>
                            </div>
                            <p className="text-gray-300 text-sm mb-3">{direction.route}</p>
                            <div className="flex items-center gap-6 text-sm">
                                <div>
                                    <span className="text-gray-400">Distance: </span>
                                    <span className="font-semibold">{direction.distance}</span>
                                </div>
                                <div>
                                    <span className="text-gray-400">Time: </span>
                                    <span className="font-semibold">{direction.time}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section-container bg-white text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-spiritual-navy mb-6">
                        Need Help Finding Us?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Our team is happy to provide detailed directions and arrange local transportation assistance
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/contact">
                            Contact Us
                        </Button>
                        <Button href="tel:+919876543210" variant="outline">
                            Call for Assistance
                        </Button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Location;
