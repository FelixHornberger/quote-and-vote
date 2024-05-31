import { create } from 'zustand'

// Does this make senese? Not really but then i would have to figure out how i set input to only numeric values :() 
interface IDtate {
    surveyID: string;
    setSurveyID: (by: string) => void;
}

export const useIDStore = create<IDtate>()((set) =>({
    surveyID: "",
    setSurveyID: (by) => set(({surveyID: by}))
}));