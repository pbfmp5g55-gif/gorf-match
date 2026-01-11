import { NavLink } from 'react-router-dom';
import { Layers, MessageCircle, Map, User } from 'lucide-react';

const BottomNav = () => {
    const navItems = [
        { path: '/swipe', icon: Layers, label: 'Swipe' },
        { path: '/places', icon: Map, label: 'Places' },
        { path: '/matches', icon: MessageCircle, label: 'Matches' },
        { path: '/profile', icon: User, label: 'Profile' }
    ];

    return (
        <nav style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: '80px',
            background: 'rgba(5, 5, 5, 0.9)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingBottom: '20px', // Safe area
            zIndex: 100
        }}>
            {navItems.map(({ path, icon: Icon, label }) => (
                <NavLink
                    key={path}
                    to={path}
                    style={({ isActive }) => ({
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        color: isActive ? '#00ff88' : '#666',
                        background: 'none',
                        border: 'none',
                        flex: 1,
                        transition: 'color 0.3s ease'
                    })}
                >
                    {({ isActive }) => (
                        <>
                            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} style={{ filter: isActive ? 'drop-shadow(0 0 8px rgba(0,255,136,0.5))' : 'none' }} />
                            <span style={{ fontSize: '10px', marginTop: '4px', fontWeight: isActive ? '600' : '400' }}>{label}</span>
                        </>
                    )}
                </NavLink>
            ))}
        </nav>
    );
};

export default BottomNav;
