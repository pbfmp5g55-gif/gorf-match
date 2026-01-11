import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ChevronRight } from 'lucide-react';

const LoginPage = () => {
    const { login } = useAuth();
    const [method, setMethod] = useState('phone'); // phone or email

    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            background: 'url("https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80") center/cover no-repeat',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'
        }}>
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, #050505 10%, rgba(5,5,5,0.6) 50%, rgba(5,5,5,0.2) 100%)'
            }} />

            <div style={{
                position: 'relative',
                zIndex: 10,
                padding: '32px',
                paddingBottom: '48px',
                width: '100%',
                maxWidth: '500px',
                margin: '0 auto'
            }}>
                <h1 style={{
                    fontFamily: 'Impact, sans-serif',
                    fontStyle: 'italic',
                    fontSize: '48px',
                    marginBottom: '8px',
                    lineHeight: '1',
                    letterSpacing: '2px'
                }}>
                    RANGE<br /><span style={{ color: '#00ff88' }}>MATCH</span>
                </h1>

                <p style={{ color: '#ccc', fontSize: '18px', marginBottom: '32px', maxWidth: '80%' }}>
                    Find your perfect golf buddy nearby. Swipe, match, and practice together.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <button onClick={login} className="btn-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                        <span>Start with Phone</span>
                        <ChevronRight size={20} />
                    </button>

                    <button onClick={login} style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: '#fff',
                        padding: '12px',
                        borderRadius: '99px',
                        fontWeight: '600',
                        backdropFilter: 'blur(10px)',
                        cursor: 'pointer'
                    }}>
                        Continue with Google
                    </button>
                </div>

                <p style={{ marginTop: '24px', textAlign: 'center', fontSize: '12px', color: '#666' }}>
                    By continuing, you agree to our Terms & Privacy Policy.
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
