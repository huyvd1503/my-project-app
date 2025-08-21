import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { SpeakingQuestion } from '../../../types/vocabulary';
import { useTranslation } from 'react-i18next';

interface SpeakingExerciseProps {
  questions: SpeakingQuestion[];
}

const SpeakingExercise = ({ questions }: SpeakingExerciseProps) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {t('vocabulary.speakingPractice')}
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Typography variant="body1" paragraph>
          {t('vocabulary.speakingInstructions')}
        </Typography>

        <List>
          {questions.map((item, index) => (
            <ListItem
              key={index}
              component={Paper}
              elevation={2}
              sx={{ mb: 2, p: 0, display: 'block' }}
            >
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`question-${index}-content`}
                  id={`question-${index}-header`}
                >
                  <Typography fontWeight="bold">
                    {t('vocabulary.question')} {index + 1}: {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {t('vocabulary.suggestedAnswers')}:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {item.suggestions.map((suggestion, suggIndex) => (
                      <Chip key={suggIndex} label={suggestion} variant="outlined" color="primary" />
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default SpeakingExercise;
