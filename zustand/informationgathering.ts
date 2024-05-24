import { create } from 'zustand'

// Does this make senese? Not really but then i would have to figure out how i set input to only numeric values :() 
interface InformationGatheringState {
    preferedWay: string;
    setPreferedWay: (by: string) => void;
}

export const useInformationGatheringStore = create<InformationGatheringState>()((set) =>({
    preferedWay: "",
    setPreferedWay: (by) => set(({preferedWay: by}))
}));