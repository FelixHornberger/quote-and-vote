import { create } from 'zustand'

interface InterestState {
    interest: string;
    setInterest: (by: string) => void;
}

export const useInterestStore = create<InterestState>()((set) =>({
    interest: "",
    setInterest: (by) => set(({interest: by}))
}));