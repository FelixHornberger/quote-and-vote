import { create } from 'zustand'

// This Stores the informatin if user accepts the condition

interface VoteStore {
    vote: boolean;
    triggered: boolean;
    setVote: (by: boolean) => void;
    setTriggered: (by: boolean) => void;
}

export const useVoteStore = create<VoteStore>()((set) =>({
    vote: false,
    triggered: false,
    setVote: (by) => set(({vote: by})),
    setTriggered: (by) => set(({triggered: by})),
}));