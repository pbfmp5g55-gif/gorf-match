import { USERS } from '../data/mockData';
import { MessageCircle } from 'lucide-react';

const MatchesPage = () => {
    // Mock some matches
    const matches = USERS.slice(0, 3);

    return (
        <div className="page-container">
            <h2 style={{ padding: '20px', fontSize: '24px' }}>Messages</h2>

            {/* New Matches Row */}
            <div style={{ padding: '0 20px 20px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                <span style={{ display: 'block', fontSize: '12px', color: '#00ff88', marginBottom: '8px', fontWeight: 'bold' }}>NEW MATCHES</span>
                <div style={{ display: 'flex', gap: '16px' }}>
                    {matches.map(user => (
                        <div key={user.id} style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '2px solid #00ff88', overflow: 'hidden' }}>
                                <img src={user.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <span style={{ fontSize: '12px' }}>{user.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="content-scroll" style={{ borderTop: '1px solid #333' }}>
                {matches.map(user => (
                    <div key={user.id} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '16px 0',
                        borderBottom: '1px solid #222'
                    }}>
                        <div style={{ position: 'relative' }}>
                            <div style={{ width: '56px', height: '56px', borderRadius: '50%', overflow: 'hidden', background: '#333' }}>
                                <img src={user.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ width: '12px', height: '12px', background: '#00ff88', borderRadius: '50%', position: 'absolute', bottom: '0', right: '0', border: '2px solid #000' }} />
                        </div>

                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                <h3 style={{ fontWeight: '600' }}>{user.name}</h3>
                                <span style={{ fontSize: '12px', color: '#666' }}>2m ago</span>
                            </div>
                            <p style={{ color: '#aaa', fontSize: '14px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                Hey! Are you free this weekend for a round? ⛳️
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MatchesPage;
