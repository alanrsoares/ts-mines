export interface IQuestion {
  question: string;
  correctAnswer: string;
  image: {
    uri: string;
  };
  answers: Record<string, string>;
  roadCodePage: string;
}

export interface IQuestionItem {
  key: string;
  value: IQuestion;
}

export interface HistoryEntry {
  correct: number;
  incorrect: number;
  total: number;
}

export type History = HistoryEntry[];
