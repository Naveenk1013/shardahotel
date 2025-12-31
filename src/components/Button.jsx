import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    className = '',
    icon,
    disabled = false,
    ...props
}) => {
    const baseStyles = 'font-semibold rounded-full inline-flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'btn-primary shadow-gold hover:shadow-gold animate-glow',
        secondary: 'btn-secondary',
        outline: 'btn-outline'
    };

    const sizes = {
        sm: 'px-5 py-2 text-sm',
        md: 'px-8 py-3 text-base',
        lg: 'px-10 py-4 text-lg'
    };

    const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size]} ${className}`;

    // Animation variants for enhanced interaction
    const buttonVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 10
            }
        },
        tap: { scale: 0.95 }
    };

    const iconVariants = {
        initial: { x: 0 },
        hover: {
            x: 3,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 10
            }
        }
    };

    const rippleVariants = {
        initial: { scale: 0, opacity: 0.5 },
        animate: {
            scale: 2,
            opacity: 0,
            transition: { duration: 0.6 }
        }
    };

    const content = (
        <>
            {/* Ripple effect background */}
            <motion.span
                className="absolute inset-0 bg-white rounded-full"
                initial="initial"
                whileHover="animate"
                variants={rippleVariants}
                style={{ pointerEvents: 'none' }}
            />

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-2">
                {children}
                {icon && (
                    <motion.span
                        variants={iconVariants}
                        initial="initial"
                        whileHover="hover"
                    >
                        {icon}
                    </motion.span>
                )}
            </span>

            {/* Shimmer effect on hover */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </>
    );

    if (href) {
        // External link
        if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
            return (
                <motion.a
                    href={href}
                    className={`${combinedClasses} group`}
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    {...props}
                >
                    {content}
                </motion.a>
            );
        }

        // Internal link
        return (
            <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="inline-block"
            >
                <Link to={href} className={`${combinedClasses} group`} {...props}>
                    {content}
                </Link>
            </motion.div>
        );
    }

    // Regular button
    return (
        <motion.button
            onClick={onClick}
            className={`${combinedClasses} group`}
            variants={buttonVariants}
            initial="initial"
            whileHover={!disabled ? "hover" : "initial"}
            whileTap={!disabled ? "tap" : "initial"}
            disabled={disabled}
            {...props}
        >
            {content}
        </motion.button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    href: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    icon: PropTypes.node,
    disabled: PropTypes.bool
};

export default Button;
