import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-based reveal animations
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection observer
 * @param {boolean} options.triggerOnce - Whether to trigger animation only once
 * @returns {[React.RefObject, boolean]} - Returns ref and isVisible state
 */
export const useScrollReveal = (options = {}) => {
    const {
        threshold = 0.1,
        rootMargin = '0px',
        triggerOnce = true
    } = options;

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin, triggerOnce]);

    return [ref, isVisible];
};

/**
 * Hook for parallax scroll effect
 * @param {number} speed - Parallax speed multiplier
 * @returns {[React.RefObject, Object]} - Returns ref and style object
 */
export const useParallax = (speed = 0.5) => {
    const ref = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            const rate = scrolled * speed;
            setOffset(rate);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return [ref, { transform: `translateY(${offset}px)` }];
};

export default useScrollReveal;
