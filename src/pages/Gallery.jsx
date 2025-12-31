import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All Photos' },
        { id: 'rooms', label: 'Rooms' },
        { id: 'restaurant', label: 'Restaurant' },
        { id: 'pool', label: 'Swimming Pool' },
        { id: 'lawn', label: 'Lawn & Gardens' },
        { id: 'events', label: 'Events & Bonfire' }
    ];

    // Gallery images organized by category
    const images = [
        // Rooms
        { id: 1, category: 'rooms', title: 'Deluxe Room', color: 'from-blue-400 to-blue-600' },
        { id: 2, category: 'rooms', title: 'Super Deluxe Room', color: 'from-purple-400 to-purple-600' },
        { id: 3, category: 'rooms', title: 'Family Suite', color: 'from-pink-400 to-pink-600' },
        { id: 4, category: 'rooms', title: 'Room Interior', color: 'from-indigo-400 to-indigo-600' },

        // Restaurant
        { id: 5, category: 'restaurant', title: 'Restaurant Dining Area', color: 'from-orange-400 to-orange-600' },
        { id: 6, category: 'restaurant', title: 'Pure Veg Cuisine', color: 'from-green-400 to-green-600' },
        { id: 7, category: 'restaurant', title: 'Buffet Setup', color: 'from-yellow-400 to-yellow-600' },

        // Pool
        { id: 8, category: 'pool', title: 'Swimming Pool', color: 'from-cyan-400 to-cyan-600' },
        { id: 9, category: 'pool', title: 'Pool Lounge Area', color: 'from-teal-400 to-teal-600' },

        // Lawn
        { id: 10, category: 'lawn', title: 'Garden View', color: 'from-lime-400 to-lime-600' },
        { id: 11, category: 'lawn', title: 'Sit-out Area', color: 'from-emerald-400 to-emerald-600' },
        { id: 12, category: 'lawn', title: 'Lawn Seating', color: 'from-green-500 to-green-700' },

        // Events
        { id: 13, category: 'events', title: 'Bonfire Evening', color: 'from-red-400 to-red-600' },
        { id: 14, category: 'events', title: 'Event Setup', color: 'from-amber-400 to-amber-600' },
        { id: 15, category: 'events', title: 'Lounge Area', color: 'from-rose-400 to-rose-600' }
    ];

    const filteredImages = selectedCategory === 'all'
        ? images
        : images.filter(img => img.category === selectedCategory);

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
                        Photo <span className="text-gradient-gold">Gallery</span>
                    </h1>
                    <div className="divider-gold mb-8"></div>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                        Explore our beautiful hotel spaces, from luxurious rooms to serene common areas
                    </p>
                </motion.div>
            </section>

            {/* Category Filter */}
            <section className="bg-white border-b sticky top-20 z-40">
                <div className="section-container py-6">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.id
                                        ? 'bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-white shadow-lg scale-105'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="section-container bg-gray-50">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            onClick={() => setSelectedImage(image)}
                            className="cursor-pointer group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Placeholder Image with Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${image.color} flex items-center justify-center`}>
                                <div className="text-white text-center p-6">
                                    <div className="text-6xl font-bold opacity-20 mb-2">{image.id}</div>
                                    <div className="text-xl font-semibold">{image.title}</div>
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-spiritual-navy/0 group-hover:bg-spiritual-navy/60 transition-all duration-300 flex items-center justify-center">
                                <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Click to View
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredImages.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-xl">No images in this category yet.</p>
                    </div>
                )}
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-10 h-10" />
                    </button>

                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        className="max-w-5xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${selectedImage.color} flex items-center justify-center mb-4`}>
                            <div className="text-white text-center p-8">
                                <div className="text-9xl font-bold opacity-20 mb-4">{selectedImage.id}</div>
                                <div className="text-3xl font-semibold">{selectedImage.title}</div>
                            </div>
                        </div>
                        <p className="text-white text-center text-lg">
                            {selectedImage.title}
                        </p>
                    </motion.div>
                </motion.div>
            )}

            {/* CTA Section */}
            <section className="section-container gradient-spiritual text-white text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Experience This in Person?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Book your stay at Hotel Sharda Palace and create your own beautiful memories in Vrindavan
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/rooms" className="btn-primary">
                            View Our Rooms
                        </a>
                        <a href="/contact" className="btn-secondary">
                            Contact Us
                        </a>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Gallery;
