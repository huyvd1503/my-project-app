// src/components/organisms/Sidebar.tsx
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  useMediaQuery,
  useTheme,
  Collapse,
  Box,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import useUIStore from '../../store/uiStore';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import DatasetIcon from '@mui/icons-material/Dataset';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandMore';
import ExpandMore from '@mui/icons-material/ExpandLess';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GroupIcon from '@mui/icons-material/Group';
import BuildIcon from '@mui/icons-material/Build';
import Language from '@mui/icons-material/Language';
import StorageIcon from '@mui/icons-material/Storage';
import ThemeToggle from '../molecules/ThemeToggle';
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import useAuthStore from '../../store/authStore';
import LanguageToggle from '../molecules/LanguageToggle';
import { useTranslation } from 'react-i18next';

const drawerWidth = 240;

// Interface cho cấu trúc menu item với hỗ trợ đệ quy
interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
  children?: MenuItem[]; // Các mục con của menu
}

const Sidebar = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  // Dùng object để theo dõi trạng thái đóng/mở của mỗi menu
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

  const isSidebarOpen = useUIStore(state => state.isSidebarOpen);
  const toggleSidebar = useUIStore(state => state.toggleSidebar);
  const navigate = useNavigate();
  const location = useLocation();
  const logout = useAuthStore(state => state.logout);
  const user = useAuthStore(state => state.user);

  // Hàm để mở/đóng một menu cụ thể
  const toggleMenu = (menuId: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Danh sách menu với cấu trúc phân cấp
  const menuItems: MenuItem[] = [
    { id: 'home', label: 'Home', icon: <HomeIcon />, path: '/' },
    {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />,
      path: '/settings',
      children: [
        { id: 'general', label: 'General', icon: <BuildIcon />, path: '/settings/general' },
        { id: 'system', label: 'System', icon: <StorageIcon />, path: '/settings/system' },
      ],
    },
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <DatasetIcon />,
      path: '/dashboard',
      children: [
        {
          id: 'analytics',
          label: 'Analytics',
          icon: <BarChartIcon />,
          path: '/dashboard/analytics',
        },
        { id: 'reports', label: 'Reports', icon: <AssessmentIcon />, path: '/dashboard/reports' },
        { id: 'users', label: 'Users', icon: <GroupIcon />, path: '/dashboard/users' },
      ],
    },
    { id: 'profile', label: 'Profile', icon: <PersonIcon />, path: '/profile' },
    { id: 'vocabulary', label: 'Vocabulary', icon: <Language />, path: '/vocabulary' },
  ];

  // Component đệ quy để render menu items với các level con
  const renderMenuItem = (item: MenuItem, depth: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedMenus[item.id] || false;
    const isActive =
      location.pathname === item.path ||
      (item.path !== '/' && location.pathname.startsWith(item.path));

    return (
      <div key={item.id}>
        <ListItemButton
          selected={isActive}
          onClick={() => {
            if (hasChildren) {
              toggleMenu(item.id);
            } else {
              navigate(item.path);
              if (isMobile) toggleSidebar();
            }
          }}
          sx={{ pl: 2 + depth * 2 }}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
          {hasChildren && (isExpanded ? <ExpandMore /> : <ExpandLess />)}
        </ListItemButton>

        {hasChildren && (
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children!.map(child => renderMenuItem(child, depth + 1))}
            </List>
          </Collapse>
        )}
      </div>
    );
  };

  return (
    <>
      {!isSidebarOpen && (
        <IconButton
          onClick={toggleSidebar}
          sx={{ position: 'fixed', top: 16, left: 16, zIndex: 1300 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        open={isSidebarOpen}
        onClose={toggleSidebar}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            transition: 'all 0.3s ease-in-out',
          },
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 2,
          }}
        >
          <Typography variant="h6">My App</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LanguageToggle />
            <ThemeToggle />
            <IconButton onClick={toggleSidebar}>
              <ChevronLeftIcon />
            </IconButton>
          </Box>
        </Toolbar>
        <Divider />
        <List>{menuItems.map(item => renderMenuItem(item))}</List>
        <Box sx={{ p: 2, mt: 'auto' }}>
          <Typography variant="subtitle2" noWrap>
            {user?.name || 'Người dùng'}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {user?.email || 'user@example.com'}
          </Typography>
        </Box>
        <Box sx={{ mt: 'auto' }}>
          <Divider />
          <List>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={t('common.logout')} />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
