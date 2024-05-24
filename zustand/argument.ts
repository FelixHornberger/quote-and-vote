import { create } from 'zustand'

// Does this make senese? Not really but then i would have to figure out how i set input to only numeric values :() 
interface ArgumentState {
    argument: string;
    setArgument: (by: string) => void;
}

export const useArgumentStore = create<ArgumentState>()((set) =>({
    argument: "",
    setArgument: (by) => set(({argument: by}))
}));