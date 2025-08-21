// src/App.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './layouts/MainLayout';
import ErrorLayout from './layouts/ErrorLayout';
import AuthLayout from './layouts/AuthLayout';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/auth/ProtectedRoute';
import useAuthStore from './store/authStore';
import { CircularProgress, Box } from '@mui/material';

// Lazy loading components
const Home = lazy(() => import('./pages/Home'));
const Settings = lazy(() => import('./pages/Settings'));
const Profile = lazy(() => import('./pages/Profile'));
const Vocabulary = lazy(() => import('./pages/vocabulary/VocabularyPage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Analytics = lazy(() => import('./pages/dashboard/Analytics'));
const Reports = lazy(() => import('./pages/dashboard/Reports'));
const Users = lazy(() => import('./pages/dashboard/Users'));
const General = lazy(() => import('./pages/settings/General'));
const System = lazy(() => import('./pages/settings/System'));
const Login = lazy(() => import('./pages/Login'));

// Loading component
const LoadingFallback = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <CircularProgress />
  </Box>
);

function App() {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Auth routes */}
        <Route element={<AuthLayout />}>
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" replace /> : <Login />}
          />
        </Route>

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />

          <Route path="settings" element={<Settings />}>
            <Route index element={<General />} />
            <Route path="general" element={<General />} />
            <Route path="system" element={<System />} />
          </Route>

          <Route path="profile" element={<Profile />} />
          <Route path="vocabulary" element={<Vocabulary />} />

          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Analytics />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="reports" element={<Reports />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Route>

        {/* Error routes */}
        <Route element={<ErrorLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
