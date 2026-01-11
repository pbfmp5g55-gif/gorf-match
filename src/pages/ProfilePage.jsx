import { useAuth } from '../context/AuthContext';
import { Settings, Edit } from 'lucide-react';

const ProfilePage = () => {
    const { user, logout } = useAuth();

    if (!user) return null;

    return (
        <div className="page-container">
            <div style={{ height: '300px', position: 'relative' }}>
                <img src={user.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top, #050505, transparent)' }} />
            </div>

            <div className="content-scroll" style={{ marginTop: '-40px', position: 'relative', padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '20px' }}>
                    <div>
                        <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>{user.name}, {user.age}</h1>
                        <p style={{ color: '#ccc' }}>{user.golfExperience}</p>
                    </div>
                    <button style={{ background: '#333', border: 'none', color: '#fff', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Edit size={20} />
                    </button>
                </div>

                <div style={{ background: '#1a1a1a', borderRadius: '16px', padding: '20px', marginBottom: '20px' }}>
                    <h3 style={{ color: '#00ff88', fontSize: '14px', marginBottom: '8px', textTransform: 'uppercase' }}>About Me</h3>
                    <p style={{ lineHeight: '1.6' }}>{user.bio}</p>
                </div>

                <button onClick={logout} style={{
                    width: '100%',
                    padding: '16px',
                    background: 'transparent',
                    border: '1px solid #333',
                    color: '#ff0055',
                    borderRadius: '12px',
                    marginTop: '20px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}>
                    Log Out
                </button>

                <p style={{ textAlign: 'center', color: '#666', marginTop: '20px', fontSize: '12px' }}>
                    Version 0.1.0 MVP
                </p>
            </div>
        </div>
    );
};

export default ProfilePage;
