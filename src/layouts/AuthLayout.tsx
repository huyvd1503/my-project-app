// src/layouts/AuthLayout.tsx
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import ThemeToggle from '../components/molecules/ThemeToggle';
import LanguageToggle from '../components/molecules/LanguageToggle';

const AuthLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: 'background.default',
        position: 'relative',
      }}
    >
      <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
        <LanguageToggle />
        <ThemeToggle />
      </Box>
      <Outlet />
    </Box>
  );
};

export default AuthLayout;
