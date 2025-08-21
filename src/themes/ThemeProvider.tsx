// src/themes/ThemeProvider.tsx
import React from 'react';
import { ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import useUIStore from '../store/uiStore';

type Props = { children: React.ReactNode };

const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const themeMode = useUIStore(state => state.themeMode);

  // Xác định theme dựa trên chế độ đã chọn
  let theme;
  if (themeMode === 'system') {
    theme = prefersDarkMode ? darkTheme : lightTheme;
  } else {
    theme = themeMode === 'dark' ? darkTheme : lightTheme;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
