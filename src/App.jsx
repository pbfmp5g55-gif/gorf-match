import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import SwipePage from './pages/SwipePage';
import PlacesPage from './pages/PlacesPage';
import MatchesPage from './pages/MatchesPage';
import ProfilePage from './pages/ProfilePage';
import BottomNav from './components/BottomNav';

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Outlet />
      <BottomNav />
    </>
  );
};

const AppRoutes = () => {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/swipe" /> : <LoginPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/swipe" element={<SwipePage />} />
        <Route path="/places" element={<PlacesPage />} />
        <Route path="/matches" element={<MatchesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/" element={<Navigate to="/swipe" replace />} />
      </Route>
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter basename="/gorf-match">
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
