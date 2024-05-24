import { create } from 'zustand'

// Does this make senese? Not really but then i would have to figure out how i set input to only numeric values :() 
interface HrefState {
    href: string;
    setHref: (by: string) => void;
}

export const useHrefStore = create<HrefState>()((set) =>({
    href: "",
    setHref: (by) => set(({href: by}))
}));