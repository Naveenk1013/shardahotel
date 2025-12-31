import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Button from '../components/Button';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log('Form data:', data);
        // Here you would typically send data to your backend
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const contactInfo = [
        {
            icon: Phone,
            title: 'Phone',
            details: ['+91 98765 43210', '+91 98765 43211'],
            action: 'tel:+919876543210'
        },
        {
            icon: MessageCircle,
            title: 'WhatsApp',
            details: ['+91 98765 43210'],
            action: 'https://wa.me/919876543210'
        },
        {
            icon: Mail,
            title: 'Email',
            details: ['info@shardapalace.com', 'bookings@shardapalace.com'],
            action: 'mailto:info@shardapalace.com'
        },
        {
            icon: MapPin,
            title: 'Address',
            details: ['HM5Q+377, Kailash Nagar Rd', 'Kailash Nagar, Vrindavan, UP - 281121'],
            action: null
        }
    ];

    const timings = [
        { label: 'Check-in Time', value: '12:00 PM onwards' },
        { label: 'Check-out Time', value: '11:00 AM' },
        { label: 'Front Desk', value: '24 Hours' },
        { label: 'Restaurant', value: '7:00 AM - 10:00 PM' }
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
                        Contact <span className="text-gradient-gold">Us</span>
                    </h1>
                    <div className="divider-gold mb-8"></div>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                        We're here to help! Reach out for bookings, inquiries, or any assistance you need
                    </p>
                </motion.div>
            </section>

            {/* Contact Info Cards */}
            <section className="section-container bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card-luxury p-6 text-center"
                        >
                            <div className="w-14 h-14 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <info.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-spiritual-navy mb-3">
                                {info.title}
                            </h3>
                            <div className="space-y-1">
                                {info.details.map((detail, idx) => (
                                    <p key={idx} className="text-gray-600 text-sm">
                                        {info.action ? (
                                            <a href={info.action} className="hover:text-gold-600 transition-colors">
                                                {detail}
                                            </a>
                                        ) : (
                                            detail
                                        )}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Main Contact Section */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Booking Enquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-spiritual-navy mb-6">
                            Send Us a Message
                        </h2>

                        {isSubmitted && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                <p className="text-green-800 font-medium">
                                    Thank you! We'll get back to you within 24 hours.
                                </p>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    {...register('name', { required: 'Name is required' })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                                    placeholder="Your full name"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Email & Phone */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Invalid email address'
                                            }
                                        })}
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none"
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone *
                                    </label>
                                    <input
                                        {...register('phone', {
                                            required: 'Phone is required',
                                            pattern: {
                                                value: /^[0-9]{10}$/,
                                                message: 'Please enter 10 digits'
                                            }
                                        })}
                                        type="tel"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none"
                                        placeholder="9876543210"
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Check-in & Check-out */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Check-in Date
                                    </label>
                                    <input
                                        {...register('checkin')}
                                        type="date"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Check-out Date
                                    </label>
                                    <input
                                        {...register('checkout')}
                                        type="date"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none"
                                    />
                                </div>
                            </div>

                            {/* Room Type & Guests */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Room Type
                                    </label>
                                    <select
                                        {...register('roomType')}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none"
                                    >
                                        <option value="">Select room type</option>
                                        <option value="deluxe">Deluxe Room</option>
                                        <option value="super-deluxe">Super Deluxe Room</option>
                                        <option value="family">Family Room</option>
                                        <option value="suite">Family Suite</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Number of Guests
                                    </label>
                                    <input
                                        {...register('guests')}
                                        type="number"
                                        min="1"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none"
                                        placeholder="2"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    {...register('message')}
                                    rows="4"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none resize-none"
                                    placeholder="Any specific requirements or questions..."
                                ></textarea>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full btn-primary flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send Enquiry
                            </button>
                        </form>
                    </motion.div>

                    {/* Timings & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Timings */}
                        <div className="card-luxury p-8">
                            <h3 className="text-2xl font-bold text-spiritual-navy mb-6 flex items-center gap-3">
                                <Clock className="w-6 h-6 text-gold-600" />
                                Hotel Timings
                            </h3>
                            <div className="space-y-4">
                                {timings.map((timing, index) => (
                                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                                        <span className="font-medium text-gray-700">{timing.label}</span>
                                        <span className="text-spiritual-navy font-semibold">{timing.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="card-luxury p-8">
                            <h3 className="text-2xl font-bold text-spiritual-navy mb-6">
                                Find Us Here
                            </h3>
                            <div className="aspect-video rounded-xl overflow-hidden">
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
                            <Button
                                href="https://www.google.com/maps/dir/?api=1&destination=27.5576501,77.6881865"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full mt-4"
                                variant="outline"
                            >
                                Get Directions
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-container gradient-spiritual text-white">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="divider-gold"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {[
                        { q: 'What are your check-in and check-out times?', a: 'Check-in is from 12:00 PM and check-out is until 11:00 AM.' },
                        { q: 'Do you provide parking facilities?', a: 'Yes, we have complimentary parking for all our guests.' },
                        { q: 'Is the restaurant pure vegetarian?', a: 'Yes, we serve only pure vegetarian (sattvic) food in our restaurant.' },
                        { q: 'How far is the hotel from major temples?', a: 'We are within 2-5 km of all major temples including ISKCON, Banke Bihari, and Prem Mandir.' }
                    ].map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-dark p-6 rounded-xl"
                        >
                            <h4 className="font-semibold text-lg mb-2">{faq.q}</h4>
                            <p className="text-gray-300">{faq.a}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Contact;
