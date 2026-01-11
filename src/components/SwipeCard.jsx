import { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { MapPin, Info } from 'lucide-react';

const SwipeCard = ({ user, onSwipe, style }) => {
    const cardRef = useRef(null);
    const controls = useAnimation();
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 0, 200], [-30, 0, 30]);
    const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);
    const overlayLike = useTransform(x, [0, 100], [0, 0.8]);
    const overlayNope = useTransform(x, [-100, 0], [0.8, 0]);

    const handleDragEnd = async (event, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        if (offset > 100 || velocity > 500) {
            await controls.start({ x: 500, opacity: 0 });
            onSwipe('right', user.id);
        } else if (offset < -100 || velocity < -500) {
            await controls.start({ x: -500, opacity: 0 });
            onSwipe('left', user.id);
        } else {
            controls.start({ x: 0 });
        }
    };

    return (
        <motion.div
            ref={cardRef}
            style={{
                x,
                rotate,
                opacity,
                position: 'absolute',
                top: 0,
                width: '100%',
                height: '100%',
                cursor: 'grab',
                ...style
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={controls}
            whileTap={{ scale: 1.05 }}
            initial={{ scale: 0.95, opacity: 0.5, y: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="swipe-card"
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    position: 'relative',
                    background: '#222',
                    boxShadow: 'var(--shadow-md)'
                }}
            >
                <img
                    src={user.image}
                    alt={user.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    draggable={false}
                />

                {/* Gradients */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)'
                }} />

                {/* Swipe Indicators */}
                <motion.div style={{
                    position: 'absolute',
                    top: 40,
                    left: 40,
                    opacity: overlayLike,
                    border: '4px solid #00ff88',
                    borderRadius: '8px',
                    padding: '4px 12px',
                    color: '#00ff88',
                    fontSize: '32px',
                    fontWeight: 'bold',
                    transform: 'rotate(-20deg)'
                }}>
                    LIKE
                </motion.div>

                <motion.div style={{
                    position: 'absolute',
                    top: 40,
                    right: 40,
                    opacity: overlayNope,
                    border: '4px solid #ff0055',
                    borderRadius: '8px',
                    padding: '4px 12px',
                    color: '#ff0055',
                    fontSize: '32px',
                    fontWeight: 'bold',
                    transform: 'rotate(20deg)'
                }}>
                    NOPE
                </motion.div>

                {/* Content */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '24px',
                    color: '#fff'
                }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '800' }}>{user.name}</h2>
                        <span style={{ fontSize: '24px', fontWeight: '400' }}>{user.age}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px', color: '#ccc' }}>
                        <MapPin size={16} />
                        <span style={{ fontSize: '14px' }}>{user.distance} away</span>
                    </div>

                    <div style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                        {user.tags && user.tags.map(tag => (
                            <span key={tag} style={{
                                background: 'rgba(255,255,255,0.15)',
                                backdropFilter: 'blur(4px)',
                                padding: '4px 12px',
                                borderRadius: '100px',
                                fontSize: '12px',
                                fontWeight: '500'
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Detail Button */}
                <button style={{
                    position: 'absolute',
                    bottom: '24px',
                    right: '24px',
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    cursor: 'pointer'
                }}>
                    <Info size={28} />
                </button>
            </div>
        </motion.div>
    );
};

export default SwipeCard;
