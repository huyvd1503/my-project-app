// src/pages/NotFound.tsx
import { Box, Button, Typography, Container } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate, useLocation } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: 8,
          textAlign: 'center',
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 100, color: 'text.secondary', mb: 2 }} />

        <Typography variant="h1" component="h1" gutterBottom>
          404
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom>
          Không tìm thấy trang
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
          Đường dẫn{' '}
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            {location.pathname}
          </Box>{' '}
          không tồn tại hoặc đã bị di chuyển.
        </Typography>

        <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
          <Button variant="contained" color="primary" onClick={() => navigate('/')}>
            Quay về trang chủ
          </Button>
          <Button variant="outlined" onClick={() => navigate(-1)}>
            Quay lại trang trước
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFound;
