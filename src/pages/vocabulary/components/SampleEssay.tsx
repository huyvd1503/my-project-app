import  { useState } from 'react';
import { Box, Typography, Paper, Button, Divider } from '@mui/material';
import type { SampleEssay as SampleEssayType } from '../../../types/vocabulary';
import { useTranslation } from 'react-i18next';

interface SampleEssayProps {
  essay: SampleEssayType;
}

const SampleEssay = ({ essay }: SampleEssayProps) => {
  const { t } = useTranslation();
  const [showTranslation, setShowTranslation] = useState(true);

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">{t('vocabulary.sampleEssay')}</Typography>
        <Button variant="outlined" onClick={toggleTranslation}>
          {showTranslation ? t('vocabulary.hideTranslation') : t('vocabulary.showTranslation')}
        </Button>
      </Box>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          {t('vocabulary.englishVersion')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
          {essay.english}
        </Typography>

        {showTranslation && (
          <>
            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              {t('vocabulary.vietnameseVersion')}
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
              {essay.vietnamese}
            </Typography>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default SampleEssay;
