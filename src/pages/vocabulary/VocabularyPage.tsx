// src/pages/vocabulary/VocabularyPage.tsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import VocabularyList from './components/VocabularyList';
import SentencePatterns from './components/SentencePatterns';
import SampleEssay from './components/SampleEssay';
import SpeakingExercise from './components/SpeakingExercise';
import AppBreadcrumb from '../../components/molecules/Breadcrumb';
import { useTranslation } from 'react-i18next';

// Mock data
import {
  mockTopicData,
  mockTopicDataCity,
  mockTopicDataHealth,
  mockTopicDataCrime,
  mockTopicDataPublicTransport,
} from './mockData'; // Đã thêm mockTopicDataCity

const VocabularyPage = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState(mockTopicData);

  // Danh sách các chủ đề có sẵn
  const availableTopics = [
    { id: 'countryside', title: 'The Countryside', data: mockTopicData },
    { id: 'city', title: 'The City', data: mockTopicDataCity },
    { id: 'health', title: 'Health', data: mockTopicDataHealth },
    {
      id: 'crime',
      title: 'Crime',
      data: mockTopicDataCrime,
    },
    {
      id: 'public-transport',
      title: 'Public Transport',
      data: mockTopicDataPublicTransport,
    },
    // Thêm các chủ đề khác ở đây khi có
  ];

  const handleStepChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveStep(newValue);
  };

  const handleTopicChange = (event: SelectChangeEvent<string>) => {
    const selectedId = event.target.value;
    const newTopic = availableTopics.find(topic => topic.id === selectedId);
    if (newTopic) {
      setSelectedTopic(newTopic.data);
    }
  };

  return (
    <Container maxWidth="lg">
      <Paper sx={{ p: 3, mb: 3 }}>
        <AppBreadcrumb />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" component="h1">
            {t('vocabulary.title')}
          </Typography>

          <FormControl variant="outlined" sx={{ minWidth: 200 }}>
            <InputLabel id="topic-select-label">{t('vocabulary.selectTopic')}</InputLabel>
            <Select
              labelId="topic-select-label"
              id="topic-select"
              value={selectedTopic.id}
              onChange={handleTopicChange}
              label={t('vocabulary.selectTopic')}
            >
              {availableTopics.map(topic => (
                <MenuItem key={topic.id} value={topic.id}>
                  {topic.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Typography variant="h5" component="h2" gutterBottom>
          {selectedTopic.title}
        </Typography>

        <Tabs value={activeStep} onChange={handleStepChange} sx={{ mb: 3 }}>
          <Tab label={`1. ${t('vocabulary.basicVocabulary')}`} />
          <Tab label={`2. ${t('vocabulary.sentencePatterns')}`} />
          <Tab label={`3. ${t('vocabulary.sampleEssay')}`} />
          <Tab label={`4. ${t('vocabulary.speakingPractice')}`} />
        </Tabs>

        <Box sx={{ mt: 2 }}>
          {activeStep === 0 && <VocabularyList vocabulary={selectedTopic.vocabulary} />}
          {activeStep === 1 && <SentencePatterns patterns={selectedTopic.sentencePatterns} />}
          {activeStep === 2 && <SampleEssay essay={selectedTopic.sampleEssay} />}
          {activeStep === 3 && <SpeakingExercise questions={selectedTopic.speakingQuestions} />}
        </Box>
      </Paper>
    </Container>
  );
};

export default VocabularyPage;
