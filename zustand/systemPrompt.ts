import { create } from 'zustand'

// Does this make senese? Not really but then i would have to figure out how i set input to only numeric values :() 
interface SystemPromptState {
    systemPrompt: string;
    setSystemPrompt: (by: string) => void;
}

export const useSystemPromptStore = create<SystemPromptState>()((set) =>({
    systemPrompt: "",
    setSystemPrompt: (by) => set(({systemPrompt: by}))
}));