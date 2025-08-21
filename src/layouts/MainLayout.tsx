// src/layouts/MainLayout.tsx
import { Box, Paper } from '@mui/material';
import Sidebar from '../components/organisms/Sidebar';
import { Outlet } from 'react-router-dom';
import AppBreadcrumb from '../components/molecules/Breadcrumb';

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/*<Toolbar />*/}
        <Paper elevation={0} sx={{ p: 2, mb: 2, borderRadius: 2, bgcolor: 'background.default' }}>
          <AppBreadcrumb />
        </Paper>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
