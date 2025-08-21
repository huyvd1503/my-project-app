// src/components/molecules/Breadcrumb.tsx
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import { useTranslation } from 'react-i18next';

const AppBreadcrumb = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Map các đường dẫn tương ứng với tên hiển thị
  const breadcrumbNameMap: { [key: string]: string } = {
    '/': t('common.home'),
    '/dashboard': t('common.dashboard'),
    '/dashboard/analytics': t('common.analytics'),
    '/dashboard/reports': t('common.reports'),
    '/dashboard/users': t('common.users'),
    '/settings': t('common.settings'),
    '/settings/general': t('common.general'),
    '/settings/system': t('common.system'),
    '/profile': t('common.profile'),
    '/vocabulary': t('common.vocabulary'),
  };
  return (
    <Box sx={{ mb: 3 }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link
          component={RouterLink}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'text.primary',
            textDecoration: 'none',
          }}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
          {breadcrumbNameMap['/']}
        </Link>

        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return last ? (
            <Typography color="text.primary" key={to} sx={{ fontWeight: 'medium' }}>
              {breadcrumbNameMap[to] || value}
            </Typography>
          ) : (
            <Link
              component={RouterLink}
              to={to}
              key={to}
              sx={{
                color: 'text.primary',
                textDecoration: 'none',
              }}
            >
              {breadcrumbNameMap[to] || value}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default React.memo(AppBreadcrumb);
