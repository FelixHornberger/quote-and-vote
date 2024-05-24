import { create } from 'zustand'

// Does this make senese? Not really but then i would have to figure out how i set input to only numeric values :() 
interface IDtate {
    surveyID: string;
    setsurveyID: (by: string) => void;
}

export const useIDtore = create<IDtate>()((set) =>({
    surveyID: "",
    setsurveyID: (by) => set(({surveyID: by}))
}));