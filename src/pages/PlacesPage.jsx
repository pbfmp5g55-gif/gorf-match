import { PLACES } from '../data/mockData';
import { MapPin, Navigation } from 'lucide-react';

const PlacesPage = () => {
    return (
        <div className="page-container">
            <h2 style={{ padding: '20px', fontSize: '24px' }}>Nearby Ranges</h2>
            <div className="content-scroll">
                {PLACES.map(place => (
                    <div key={place.id} style={{
                        background: '#222',
                        marginBottom: '16px',
                        borderRadius: '12px',
                        overflow: 'hidden'
                    }}>
                        <div style={{ height: '120px', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <MapPin size={40} color="#666" />
                        </div>
                        <div style={{ padding: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>{place.name}</h3>
                                <span style={{ color: '#00ff88', fontWeight: 'bold' }}>★ {place.rating}</span>
                            </div>
                            <p style={{ color: '#aaa', fontSize: '14px', margin: '4px 0 12px' }}>{place.address}</p>
                            <button style={{
                                width: '100%',
                                padding: '10px',
                                background: '#333',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                cursor: 'pointer'
                            }}>
                                <Navigation size={16} />
                                Navigate
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlacesPage;
