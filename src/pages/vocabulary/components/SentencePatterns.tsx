// src/pages/vocabulary/components/SentencePatterns.tsx
import { Box, Typography, List, ListItem, Paper, IconButton, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import type { SentencePattern } from '../../../types/vocabulary';
import { useTranslation } from 'react-i18next';

interface SentencePatternsProps {
  patterns: SentencePattern[];
}

const SentencePatterns = ({ patterns }: SentencePatternsProps) => {
  const { t } = useTranslation();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const highlightWords = (text: string, words: string[]) => {
    let result = text;
    words.forEach(word => {
      result = result.replace(
        new RegExp(word, 'gi'),
        `<strong style="color: #223671">${word}</strong>`
      );
    });
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {t('vocabulary.memorableSentencePatterns')}
      </Typography>

      <List>
        {patterns.map((pattern, index) => (
          <ListItem
            key={index}
            component={Paper}
            sx={{ mb: 2, p: 2, display: 'flex', justifyContent: 'space-between' }}
          >
            <Typography variant="body1">
              {highlightWords(pattern.pattern, pattern.highlightedWords)}
            </Typography>
            <Tooltip title={t('vocabulary.copyToClipboard')}>
              <IconButton onClick={() => handleCopy(pattern.pattern)}>
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SentencePatterns;
