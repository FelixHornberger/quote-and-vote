'use client';
import { useOccupationStore } from "@/zustand/occupation";

export default function Occupation() {
    const setOccupation = useOccupationStore((state) => state.setOccupation)
    return (
        <input
            id="occupation"
            className="h-6 w-full border border-custom-text focus:border-[2px] focus:outline-none"
            type="text"
            placeholder="e.g Student"
            onChange={(e) => setOccupation(e.target.value)}
        ></input>);
}
