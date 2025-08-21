// src/types/vocabulary.ts
export type VocabularyItem = {
  word: string;
  meaning: string;
  example: string;
};

export type SentencePattern = {
  pattern: string;
  highlightedWords: string[];
};

export type SampleEssay = {
  english: string;
  vietnamese: string;
};

export type SpeakingQuestion = {
  question: string;
  suggestions: string[];
};

export type VocabularyTopic = {
  id: string;
  title: string;
  vocabulary: VocabularyItem[];
  sentencePatterns: SentencePattern[];
  sampleEssay: SampleEssay;
  speakingQuestions: SpeakingQuestion[];
};
