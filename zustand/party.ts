import { create } from 'zustand'

interface PartyState {
    party: string;
    setParty: (by: string) => void;
}

export const usePartyStore = create<PartyState>()((set) =>({
    party: "",
    setParty: (by) => set(({party: by}))
}));