import { motion } from 'framer-motion';
import { useState } from 'react';
import { Users, Maximize, Bed, Check } from 'lucide-react';
import Button from '../components/Button';

const Rooms = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const rooms = [
        {
            id: 1,
            name: 'Deluxe Room',
            category: 'deluxe',
            size: '250 sq ft',
            capacity: '2 Adults',
            bedType: 'King Bed',
            description: 'Comfortable and well-appointed room with modern amenities, perfect for couples or solo travelers.',
            features: [
                'Air Conditioning',
                'LED TV with Cable',
                'Attached Bathroom',
                'Hot & Cold Water',
                'Complimentary WiFi',
                'Daily Housekeeping',
                'Room Service',
                'Writing Desk'
            ],
            idealFor: 'Couples, Solo Travelers, Business Guests'
        },
        {
            id: 2,
            name: 'Super Deluxe Room',
            category: 'super-deluxe',
            size: '300 sq ft',
            capacity: '2-3 Adults',
            bedType: 'King Bed + Sofa',
            description: 'Spacious room with premium furnishings, private balcony, and enhanced amenities for a luxurious stay.',
            features: [
                'All Deluxe Room Features',
                'Private Balcony',
                'Mini Refrigerator',
                'Premium Bedding',
                'Tea/Coffee Maker',
                'Seating Area',
                'Wardrobe',
                'Safe Locker'
            ],
            idealFor: 'Families, Extended Stays, Premium Travelers'
        },
        {
            id: 3,
            name: 'Family Room',
            category: 'family',
            size: '400 sq ft',
            capacity: '4 Adults + 1 Child',
            bedType: '2 Double Beds',
            description: 'Generously sized room designed for families, with separate sleeping areas and ample space for children to play.',
            features: [
                'All Super Deluxe Features',
                'Two Double Beds',
                'Extra Seating Space',
                'Child-Friendly Setup',
                'Additional TV',
                'Large Bathroom',
                'Extra Storage',
                'Interconnecting Option'
            ],
            idealFor: 'Families with Children, Group Travelers'
        },
        {
            id: 4,
            name: 'Family Suite',
            category: 'suite',
            size: '500 sq ft',
            capacity: '5-6 People',
            bedType: '2 Bedrooms',
            description: 'Our most spacious accommodation with separate living area, two bedrooms, and premium amenities for ultimate family comfort.',
            features: [
                'Two Separate Bedrooms',
                'Living Room',
                'Kitchenette',
                'Dining Area',
                'Two Bathrooms',
                'Balcony/Terrace',
                'Premium Furnishings',
                'Butler Service (on request)'
            ],
            idealFor: 'Large Families, Extended Stays, Special Occasions'
        }
    ];

    const categories = [
        { id: 'all', label: 'All Rooms' },
        { id: 'deluxe', label: 'Deluxe' },
        { id: 'super-deluxe', label: 'Super Deluxe' },
        { id: 'family', label: 'Family' },
        { id: 'suite', label: 'Suite' }
    ];

    const filteredRooms = selectedCategory === 'all'
        ? rooms
        : rooms.filter(room => room.category === selectedCategory);

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
                        Our <span className="text-gradient-gold">Rooms & Suites</span>
                    </h1>
                    <div className="divider-gold mb-8"></div>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                        Choose from our range of comfortable accommodations designed for your perfect stay in Vrindavan
                    </p>
                </motion.div>
            </section>

            {/* Filter Section */}
            <section className="bg-white border-b">
                <div className="section-container py-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category.id
                                        ? 'bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rooms Grid */}
            <section className="section-container bg-gray-50">
                <div className="space-y-12">
                    {filteredRooms.map((room, index) => (
                        <motion.div
                            key={room.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`card-luxury overflow-hidden ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } flex flex-col md:flex-row`}
                        >
                            {/* Room Image Placeholder */}
                            <div className="md:w-1/2 h-80 md:h-auto relative overflow-hidden bg-gradient-to-br from-gold-400/20 to-primary-600/20 flex items-center justify-center">
                                <div className="text-spiritual-navy/10 text-9xl font-bold">
                                    {room.id}
                                </div>
                            </div>

                            {/* Room Details */}
                            <div className="md:w-1/2 p-8 lg:p-12">
                                <h2 className="text-3xl font-bold text-spiritual-navy mb-4">
                                    {room.name}
                                </h2>

                                {/* Room Specs */}
                                <div className="flex flex-wrap gap-6 mb-6 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Maximize className="w-5 h-5 text-gold-600" />
                                        <span>{room.size}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-5 h-5 text-gold-600" />
                                        <span>{room.capacity}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bed className="w-5 h-5 text-gold-600" />
                                        <span>{room.bedType}</span>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    {room.description}
                                </p>

                                {/* Features */}
                                <div className="mb-6">
                                    <h3 className="font-semibold text-spiritual-navy mb-3">
                                        Room Features:
                                    </h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        {room.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <Check className="w-4 h-4 text-gold-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-sm text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Ideal For */}
                                <div className="mb-6 p-4 bg-gold-50 rounded-lg">
                                    <p className="text-sm text-gray-700">
                                        <span className="font-semibold text-spiritual-navy">Ideal for:</span> {room.idealFor}
                                    </p>
                                </div>

                                {/* CTA */}
                                <div className="flex gap-4">
                                    <Button href="/contact">
                                        Book This Room
                                    </Button>
                                    <Button href="/contact" variant="outline">
                                        Enquire Now
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Booking Info Section */}
            <section className="section-container gradient-spiritual text-white text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-6">
                        Need Help Choosing the Right Room?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Our team is here to help you find the perfect accommodation for your stay.
                        Contact us for personalized recommendations and special offers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/contact" size="lg">
                            Contact Our Team
                        </Button>
                        <Button href="tel:+919876543210" variant="secondary" size="lg">
                            Call: +91 98765 43210
                        </Button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Rooms;
