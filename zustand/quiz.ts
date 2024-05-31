import { create } from 'zustand'

interface QuizData {
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    answer5: string;
}

interface QuizState {
    quizData: QuizData;
    setQuizAnswer: (newValues: Partial<QuizData>) => void;
}

export const useQuizStore = create<QuizState>()((set) =>({
    quizData: {
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
        answer5: '',
    },
    setQuizAnswer: (newValue: any) =>
        set((state) => ({
            quizData: { ...state.quizData, ...newValue }
        })),
}));