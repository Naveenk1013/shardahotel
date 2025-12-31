import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';

/**
 * Animated Counter Component with scroll-triggered animation
 * @param {Object} props - Component props
 * @param {number} props.end - End value for counter
 * @param {number} props.start - Start value (default: 0)
 * @param {number} props.duration - Animation duration in seconds (default: 2.5)
 * @param {string} props.suffix - Suffix to append (e.g., '+', '%')
 * @param {string} props.prefix - Prefix to prepend (e.g., '$')
 * @param {number} props.decimals - Number of decimal places
 * @param {string} props.separator - Thousands separator (default: ',')
 */
const AnimatedCounter = ({
    end,
    start = 0,
    duration = 2.5,
    suffix = '',
    prefix = '',
    decimals = 0,
    separator = ',',
    className = ''
}) => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    return (
        <div ref={ref} className={className}>
            {hasAnimated ? (
                <CountUp
                    start={start}
                    end={end}
                    duration={duration}
                    separator={separator}
                    decimals={decimals}
                    suffix={suffix}
                    prefix={prefix}
                    useEasing={true}
                    easingFn={(t, b, c, d) => {
                        // Custom easing function for smooth animation
                        return c * ((t = t / d - 1) * t * t + 1) + b;
                    }}
                />
            ) : (
                <span>{start}</span>
            )}
        </div>
    );
};

AnimatedCounter.propTypes = {
    end: PropTypes.number.isRequired,
    start: PropTypes.number,
    duration: PropTypes.number,
    suffix: PropTypes.string,
    prefix: PropTypes.string,
    decimals: PropTypes.number,
    separator: PropTypes.string,
    className: PropTypes.string
};

export default AnimatedCounter;
