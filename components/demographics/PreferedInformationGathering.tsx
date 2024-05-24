'use client';
import { useAgeStore } from "@/zustand/age";
import { useInformationGatheringStore } from "@/zustand/informationgathering";

export default function PreferedInformationGatheringWay() {
    
    const {setPreferedWay} = useInformationGatheringStore();

    // Solution for checking if InputIsNumber is from stackoverflow:
    // https://stackoverflow.com/a/65138192 -> Replaced the Depracted Method with the new one -> OnKeyDown
    // This solution didnt allow the usage of the deletekey thats why i modified it.

    return (
        <select id="prefered-information-gathering-way" className="h-6 w-full border border-custom-text bg-transparent focus:border-[2px] focus:outline-none"
            style={{ fontFamily: "'__Inter_aaf875', '__Inter_Fallback_aaf875', sans-serif" }}
            onChange={(e) => setPreferedWay(e.target.value)}>
            <option disabled selected>
                Select an option
            </option>
            <option id="placeholder">Read about it</option>
            <option id="placeholder">Chat about it</option>
            <option id="none">Don&apos;t want to specify</option>
        </select>);
}