import { motion } from 'framer-motion';
import { FileText, Users, CreditCard, Ban, Baby, Accessibility, Dog, AlertCircle, Utensils } from 'lucide-react';

const Policies = () => {
    const policies = [
        {
            icon: FileText,
            title: 'Guest Eligibility',
            items: [
                'All Indian and foreign nationals are welcome',
                'Valid government-issued ID required at check-in',
                'Guests must be 18 years or above to book',
                'Local residents may require additional verification'
            ]
        },
        {
            icon: CreditCard,
            title: 'ID Requirements',
            items: [
                'Aadhaar Card, Passport, Driving License, or Voter ID',
                'Foreign nationals: Passport and Visa mandatory',
                'Correspondence address must be provided',
                'Original ID cards required (photocopies not accepted)'
            ]
        },
        {
            icon: Ban,
            title: 'Smoking & Alcohol',
            items: [
                'Smoking strictly prohibited in all rooms and indoor areas',
                'Designated smoking zones available outdoors',
                'Alcohol consumption not permitted on premises',
                'Violations may result in immediate cancellation without refund'
            ]
        },
        {
            icon: Utensils,
            title: 'Food Policy',
            items: [
                'Only pure vegetarian (sattvic) food served',
                'No outside food allowed in restaurant',
                'Room service available for in-room dining',
                'Special dietary requirements can be accommodated on request'
            ]
        },
        {
            icon: Baby,
            title: 'Child & Extra Bed Policy',
            items: [
                'Children below 5 years stay free (without extra bed)',
                'Children 5-12 years: 50% of adult rate with extra bed',
                'Extra bed charges: ₹500 per night (subject to availability)',
                'Maximum capacity per room must not be exceeded'
            ]
        },
        {
            icon: Users,
            title: 'Cancellation Policy',
            items: [
                'Free cancellation up to 24 hours before check-in',
                'Cancellation within 24 hours: 1 night charge applicable',
                'No-show: Full booking amount forfeited',
                'Refunds processed within 7-10 business days'
            ]
        },
        {
            icon: Accessibility,
            title: 'Accessibility',
            items: [
                'Elevator access to all floors',
                'Wheelchair-accessible ground floor rooms available',
                'Ramps at main entrance',
                'Assistance available for elderly and differently-abled guests'
            ]
        },
        {
            icon: Dog,
            title: 'Pet Policy',
            items: [
                'Pets not allowed in the hotel premises',
                'Service animals permitted with prior notification',
                'Valid documentation required for service animals',
                'Please contact us for any special arrangements'
            ]
        }
    ];

    const importantNotes = [
        {
            title: 'Check-in & Check-out',
            content: 'Standard check-in time is 12:00 PM and check-out is 11:00 AM. Early check-in and late check-out subject to availability and may incur additional charges.'
        },
        {
            title: 'Damage & Loss',
            content: 'Guests are responsible for any damage to hotel property. Charges for damages will be deducted from the security deposit or billed separately.'
        },
        {
            title: 'Valuables',
            content: 'Please use the in-room safe for valuables. The hotel is not responsible for loss of money, jewelry, or valuables left in the room.'
        },
        {
            title: 'Noise Policy',
            content: 'Out of respect for other guests, please maintain reasonable noise levels, especially between 10:00 PM and 7:00 AM.'
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
                        House Rules & <span className="text-gradient-gold">Policies</span>
                    </h1>
                    <div className="divider-gold mb-8"></div>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                        Please review our policies to ensure a smooth and comfortable stay for all our guests
                    </p>
                </motion.div>
            </section>

            {/* Policies Grid */}
            <section className="section-container bg-white">
                <div className="grid md:grid-cols-2 gap-8">
                    {policies.map((policy, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card-luxury p-8"
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-14 h-14 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <policy.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-spiritual-navy">
                                    {policy.title}
                                </h3>
                            </div>

                            <ul className="space-y-3">
                                {policy.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                        <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Important Notes */}
            <section className="section-container bg-gray-50">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-spiritual-navy mb-4">
                        Important Notes
                    </h2>
                    <div className="divider-gold"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {importantNotes.map((note, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl border-l-4 border-gold-500 shadow-md"
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <AlertCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                                <h3 className="font-bold text-spiritual-navy text-lg">
                                    {note.title}
                                </h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed pl-8">
                                {note.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Safety & Security */}
            <section className="section-container gradient-spiritual text-white">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Safety & Security Measures
                        </h2>
                        <div className="divider-gold"></div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-dark p-8 rounded-2xl text-center"
                    >
                        <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">🔒</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">24x7 CCTV</h3>
                        <p className="text-gray-300">
                            Continuous surveillance for your safety and peace of mind
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-dark p-8 rounded-2xl text-center"
                    >
                        <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">🔥</span>
                        </div>
                        <h3 className="text-xl font-bold mb- 3">Fire Safety</h3>
                        <p className="text-gray-300">
                            Fire extinguishers, smoke detectors, and emergency exits on all floors
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-dark p-8 rounded-2xl text-center"
                    >
                        <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">🚨</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Trained Staff</h3>
                        <p className="text-gray-300">
                            Security personnel trained in emergency response and first aid
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="section-container bg-white text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-spiritual-navy mb-6">
                        Have Questions About Our Policies?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Our team is happy to clarify any doubts or special requirements you may have.
                        Feel free to reach out!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="btn-primary">
                            Contact Us
                        </a>
                        <a href="tel:+919876543210" className="btn-outline">
                            Call: +91 98765 43210
                        </a>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Policies;
