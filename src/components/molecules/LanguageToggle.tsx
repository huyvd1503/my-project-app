// src/components/molecules/LanguageToggle.tsx
import React from 'react';
import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';
import useUIStore from '../../store/uiStore';

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();
  const language = useUIStore(state => state.language);
  const setLanguage = useUIStore(state => state.setLanguage);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  React.useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lng: 'vi' | 'en') => {
    setLanguage(lng);
    handleClose();
  };

  return (
    <>
      <Tooltip title={t('language.changeLanguage')}>
        <IconButton onClick={handleClick} color="inherit" size="small">
          <TranslateIcon />
        </IconButton>
      </Tooltip>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => changeLanguage('vi')}>{t('language.vietnamese')}</MenuItem>
        <MenuItem onClick={() => changeLanguage('en')}>{t('language.english')}</MenuItem>
      </Menu>
    </>
  );
};

export default React.memo(LanguageToggle);
