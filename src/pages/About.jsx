import { motion } from 'framer-motion';
import { Award, Users, Heart, Target, Quote } from 'lucide-react';
import Button from '../components/Button';

const About = () => {
    const values = [
        {
            icon: Heart,
            title: 'Spiritual Hospitality',
            description: 'Welcoming pilgrims with warmth and devotion since inception'
        },
        {
            icon: Users,
            title: 'Family First',
            description: 'Creating safe, comfortable spaces for families to bond'
        },
        {
            icon: Award,
            title: 'Premium Quality',
            description: 'Maintaining highest standards in cleanliness and service'
        },
        {
            icon: Target,
            title: 'Guest Satisfaction',
            description: 'Dedicated to exceeding expectations in every stay'
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
                        About <span className="text-gradient-gold">Sharda Palace</span>
                    </h1>
                    <div className="divider-gold mb-8"></div>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                        Your trusted sanctuary in the divine city of Vrindavan, where spiritual peace meets modern comfort
                    </p>
                </motion.div>
            </section>

            {/* Our Story Section */}
            <section className="section-container bg-white">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold text-spiritual-navy mb-6">
                            Our Story
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Hotel Sharda Palace stands as a beacon of hospitality in the sacred land of Vrindavan,
                                Mathura. Nestled in the heart of this spiritual town, we have been serving pilgrims,
                                devotees, and families seeking the divine blessings of Lord Krishna.
                            </p>
                            <p>
                                Our hotel combines the tranquility of Vrindavan's spiritual atmosphere with modern
                                amenities and world-class service. We understand that your pilgrimage or family vacation
                                is a sacred journey, and we're honored to be part of your experience.
                            </p>
                            <p>
                                From comfortable accommodations to pure vegetarian cuisine, every detail at Sharda Palace
                                is designed to enhance your spiritual journey while ensuring maximum comfort and peace of mind.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] bg-gradient-to-br from-gold-400/20 to-primary-600/20 rounded-2xl flex items-center justify-center">
                            <div className="text-center text-spiritual-navy/10 text-8xl font-bold">
                                Since 2020
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-container gradient-spiritual">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Why Choose Us
                        </h2>
                        <div className="divider-gold"></div>
                        <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
                            Perfect for pilgrims, tourists, and families seeking divine comfort
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-dark p-8 rounded-2xl"
                    >
                        <Quote className="w-12 h-12 text-gold-400 mb-4" />
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Ideal for Pilgrims
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Located in close proximity to major temples including ISKCON, Banke Bihari,
                            and Prem Mandir. We provide a peaceful environment for spiritual seekers with
                            pure vegetarian food and serene ambiance.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-dark p-8 rounded-2xl"
                    >
                        <Users className="w-12 h-12 text-gold-400 mb-4" />
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Perfect for Families
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Spacious family suites, child-friendly facilities, and recreational amenities
                            like swimming pool and lawn. 24x7 security ensures peace of mind for parents
                            while children enjoy safely.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-dark p-8 rounded-2xl"
                    >
                        <Award className="w-12 h-12 text-gold-400 mb-4" />
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Modern Amenities
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Enjoy contemporary comforts including air-conditioned rooms, free WiFi,
                            elevators, room service, and laundry. Traditional hospitality meets modern convenience.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="glass-dark p-8 rounded-2xl"
                    >
                        <Heart className="w-12 h-12 text-gold-400 mb-4" />
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Exceptional Service
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Our dedicated staff is trained in hospitality and devotion. We treat every
                            guest as family, ensuring your stay is memorable, comfortable, and spiritually enriching.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section-container bg-white">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-spiritual-navy mb-4">
                            Our Core Values
                        </h2>
                        <div className="divider-gold"></div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card-luxury p-8 text-center"
                        >
                            <div className="w-16 h-16 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <value.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-spiritual-navy mb-3">
                                {value.title}
                            </h3>
                            <p className="text-gray-600">
                                {value.description}
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
                        Ready to Experience Our Hospitality?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join hundreds of satisfied guests who have made Sharda Palace their home in Vrindavan
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/rooms" size="lg">
                            View Our Rooms
                        </Button>
                        <Button href="/contact" variant="secondary" size="lg">
                            Contact Us
                        </Button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default About;
