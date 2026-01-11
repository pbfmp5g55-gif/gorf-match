import { createContext, useContext, useState, useEffect } from 'react';
import { CURRENT_USER } from '../data/mockData';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage for fake persistence
        const storedUser = localStorage.getItem('rangematch_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = () => {
        // Simulate API call
        setTimeout(() => {
            setUser(CURRENT_USER);
            localStorage.setItem('rangematch_user', JSON.stringify(CURRENT_USER));
        }, 500);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('rangematch_user');
    };

    const signup = (profileData) => {
        const newUser = { ...CURRENT_USER, ...profileData };
        setUser(newUser);
        localStorage.setItem('rangematch_user', JSON.stringify(newUser));
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, signup, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
