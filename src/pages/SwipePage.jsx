import { useState, useMemo } from 'react';
import SwipeCard from '../components/SwipeCard';
import { USERS } from '../data/mockData';
import { X, Heart, RotateCcw } from 'lucide-react';

const SwipePage = () => {
    const [users, setUsers] = useState(USERS);
    const [lastDirection, setLastDirection] = useState();

    // We only show the top 2 cards for performance, but in this simple version we can render all or filter
    // It's better to pop from the array or track index.
    // Let's pop.

    const handleSwipe = (direction, userIdToDelete) => {
        console.log(`Swiped ${direction} on ${userIdToDelete}`);
        setLastDirection(direction);
        setUsers((prev) => prev.filter((user) => user.id !== userIdToDelete));
    };

    // Undo? MVP maybe not.

    return (
        <div className="page-container" style={{ padding: '0', height: '100%', overflow: 'hidden' }}>

            {/* Header */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 50
                // background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)'
            }}>
                <h1 style={{ fontFamily: 'Impact, sans-serif', fontStyle: 'italic', color: '#fff', letterSpacing: '2px', fontSize: '24px' }}>
                    RANGE<span style={{ color: '#00ff88' }}>MATCH</span>
                </h1>
            </div>

            {/* Card Wrapper */}
            <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '400px', // Card max width
                height: '65%', // Card height aspect
                margin: '80px auto 0',
                perspective: '1000px'
            }}>
                {users.length > 0 ? (
                    users.map((user, index) => (
                        // Only render top 2 for performance, but need to be careful with zIndex
                        (index >= users.length - 2) && (
                            <SwipeCard
                                key={user.id}
                                user={user}
                                onSwipe={handleSwipe}
                                style={{ zIndex: index }}
                            />
                        )
                    ))
                ) : (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        color: '#666'
                    }}>
                        <div style={{ fontSize: '48px', marginBottom: '16px' }}>⛳️</div>
                        <h3>No more golfers nearby</h3>
                        <p>Expand your search radius or try again later.</p>
                        <button onClick={() => setUsers(USERS)} style={{ marginTop: '20px', padding: '10px 20px', background: '#333', border: 'none', color: '#fff', borderRadius: '100px' }}>
                            Reset for demo
                        </button>
                    </div>
                )}
            </div>

            {/* Controls */}
            {users.length > 0 && (
                <div style={{
                    position: 'absolute',
                    bottom: '100px',
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '32px',
                    alignItems: 'center',
                    zIndex: 60
                }}>
                    <button
                        className="btn-icon"
                        style={{ width: '60px', height: '60px', border: '2px solid #ff0055', color: '#ff0055' }}
                        onClick={() => document.querySelector('.swipe-card:last-child').dispatchEvent(new Event('touchstart'))} // Hacky, better to use Ref to trigger swipe
                    // Real implementation would expose a ref from SwipeCard or pass a control prop
                    >
                        <X size={32} />
                    </button>

                    <button
                        className="btn-icon"
                        style={{ width: '30px', height: '30px', border: 'none', color: '#999' }}
                        onClick={() => alert('Rewind premium feature')}
                    >
                        <RotateCcw size={16} />
                    </button>

                    <button
                        className="btn-icon"
                        style={{ width: '60px', height: '60px', background: '#00ff88', color: '#000', boxShadow: '0 0 20px rgba(0,255,136,0.4)' }}
                    >
                        <Heart size={32} fill="#000" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default SwipePage;
