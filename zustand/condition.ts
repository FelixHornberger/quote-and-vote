import { create } from 'zustand'

// This Stores the informatin if user accepts the condition

interface ConditionStore {
    activeCondition: boolean;
    setActiveCondition: (by: boolean) => void;
}

export const useConditionStore = create<ConditionStore>()((set) =>({
    activeCondition: false,
    setActiveCondition: (by) => set(({activeCondition: by}))
}));