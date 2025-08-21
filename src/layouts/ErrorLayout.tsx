// src/layouts/ErrorLayout.tsx
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const ErrorLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Outlet />
    </Box>
  );
};

export default ErrorLayout;
