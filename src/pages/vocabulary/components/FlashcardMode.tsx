// src/pages/vocabulary/components/FlashcardMode.tsx
import { useState } from 'react';
import { Box, Card, CardContent, Typography, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { type VocabularyItem } from '../../../types/vocabulary';
import { useTranslation } from 'react-i18next';

interface FlashcardModeProps {
  vocabulary: VocabularyItem[];
}

const FlashcardMode = ({ vocabulary }: FlashcardModeProps) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleNext = () => {
    setFlipped(false);
    setCurrentIndex(prev => (prev + 1) % vocabulary.length);
  };

  const handlePrevious = () => {
    setFlipped(false);
    setCurrentIndex(prev => (prev - 1 + vocabulary.length) % vocabulary.length);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        {t('vocabulary.cardCount', { current: currentIndex + 1, total: vocabulary.length })}
      </Typography>

      <Card
        sx={{
          width: '100%',
          maxWidth: 500,
          height: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'transform 0.6s',
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'none',
        }}
        onClick={() => setFlipped(!flipped)}
      >
        <CardContent
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backfaceVisibility: 'hidden',
          }}
        >
          {!flipped ? (
            <Typography variant="h4">{vocabulary[currentIndex].word}</Typography>
          ) : (
            <Box
              sx={{
                transform: 'rotateY(180deg)',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Typography variant="h5">{vocabulary[currentIndex].meaning}</Typography>
              <Typography variant="body1">{vocabulary[currentIndex].example}</Typography>
            </Box>
          )}
        </CardContent>
      </Card>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 2 }}>
        <IconButton onClick={handlePrevious}>
          <ArrowBackIcon />
        </IconButton>
        <Button variant="outlined" onClick={() => setFlipped(!flipped)}>
          {t('vocabulary.flip')}
        </Button>
        <IconButton onClick={handleNext}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FlashcardMode;
