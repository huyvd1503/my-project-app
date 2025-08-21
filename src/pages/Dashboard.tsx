import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

// Dashboard.tsx - Sửa lại cách kiểm tra active
const Dashboard = () => {
  return (
    <Box>
      <h2>📁 Dashboard Layout</h2>
      <Outlet />
    </Box>
  );
};

export default Dashboard;
