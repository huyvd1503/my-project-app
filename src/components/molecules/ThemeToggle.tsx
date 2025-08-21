// src/components/molecules/ThemeToggle.tsx
import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Icon chế độ tối
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Icon chế độ sáng
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'; // Icon chế độ hệ thống
import useUIStore from '../../store/uiStore';
import React from 'react';

const ThemeToggle = () => {
  const themeMode = useUIStore(state => state.themeMode);
  const setThemeMode = useUIStore(state => state.setThemeMode);

  // Chuyển đổi giữa các chế độ theo thứ tự: sáng -> tối -> hệ thống -> sáng
  const handleToggleTheme = () => {
    if (themeMode === 'light') {
      setThemeMode('dark');
    } else if (themeMode === 'dark') {
      setThemeMode('system');
    } else {
      setThemeMode('light');
    }
  };

  // Lấy icon tương ứng với chế độ hiện tại
  const getIcon = () => {
    switch (themeMode) {
      case 'light':
        return <Brightness7Icon />;
      case 'dark':
        return <Brightness4Icon />;
      default:
        return <SettingsBrightnessIcon />;
    }
  };

  // Lấy văn bản gợi ý cho Tooltip
  const getModeText = () => {
    switch (themeMode) {
      case 'light':
        return 'Chuyển sang chế độ tối';
      case 'dark':
        return 'Chuyển sang chế độ hệ thống';
      default:
        return 'Chuyển sang chế độ sáng';
    }
  };

  return (
    <Tooltip title={getModeText()}>
      <IconButton onClick={handleToggleTheme} color="inherit" size="small">
        {getIcon()}
      </IconButton>
    </Tooltip>
  );
};

export default React.memo(ThemeToggle);
