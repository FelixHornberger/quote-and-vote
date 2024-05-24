import { create } from 'zustand'

// This Stores the informatin if user accepts the condition

interface CheckboxStore {
    accepted: boolean;
    setAccpted: (by: boolean) => void;
}

export const useCheckboxStore = create<CheckboxStore>()((set) =>({
    accepted: false,
    setAccpted: (by) => set(({accepted: by}))
}));