import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
const Settings = () => {
  return (
    <Box>
      <h1>Settings Page</h1>
      <Outlet />
      {/* Add your settings components here, such as General and System settings */}
    </Box>
  );
};
export default Settings;
