// src/pages/vocabulary/components/VocabularyList.tsx
import { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from '@mui/material';
import type { VocabularyItem } from '../../../types/vocabulary';
import FlashcardMode from './FlashcardMode';
import { useTranslation } from 'react-i18next';

interface VocabularyListProps {
  vocabulary: VocabularyItem[];
}

const VocabularyList = ({ vocabulary }: VocabularyListProps) => {
  const { t } = useTranslation();
  const [flashcardMode, setFlashcardMode] = useState(false);

  if (flashcardMode) {
    return (
      <>
        <Button variant="outlined" onClick={() => setFlashcardMode(false)} sx={{ mb: 2 }}>
          {t('vocabulary.backToList')}
        </Button>
        <FlashcardMode vocabulary={vocabulary} />
      </>
    );
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6">{t('vocabulary.vocabularyList')}</Typography>
        <Button variant="contained" color="primary" onClick={() => setFlashcardMode(true)}>
          {t('vocabulary.flashcardMode')}
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>{t('vocabulary.wordOrPhrase')}</TableCell>
              <TableCell>{t('vocabulary.meaning')}</TableCell>
              <TableCell>{t('vocabulary.example')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vocabulary.map((item, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                  {item.word}
                </TableCell>
                <TableCell>{item.meaning}</TableCell>
                <TableCell>{item.example}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default VocabularyList;
