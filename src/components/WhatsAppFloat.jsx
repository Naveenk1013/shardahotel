import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppFloat = () => {
    const whatsappNumber = '919876543210'; // Replace with actual WhatsApp number
    const message = 'Hello! I would like to inquire about room bookings at Hotel Sharda Palace.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transform hover:scale-110 transition-all duration-300"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: "spring" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                }}
            >
                <MessageCircle className="w-6 h-6" />
            </motion.div>

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Chat on WhatsApp
            </div>
        </motion.a>
    );
};

export default WhatsAppFloat;
