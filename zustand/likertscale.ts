import { create } from 'zustand'

interface LikertScale {
    politicalSelfEstimation: string;
    eligibilityBefore: string;
    eligibilityAfter: string;
}
  
interface LikertScaleState {
    likertscaleGrading: LikertScale;
    setLikertscaleGrade: (newValues: Partial<LikertScale>) => void;
}
  
export const useLikertscaleGradingStore = create<LikertScaleState>()((set) => ({
    likertscaleGrading: {
        politicalSelfEstimation: '',
        eligibilityBefore: '',
        eligibilityAfter: '',
    },
    setLikertscaleGrade: (newValue) =>
      set((state) => ({
        likertscaleGrading: { ...state.likertscaleGrading, ...newValue }
      })),
}));