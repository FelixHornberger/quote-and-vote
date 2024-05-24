'use client';
import { useDegreeProgrammStore } from "@/zustand/degreeprogramm";

export default function DegreeProgramm() {
    const setDegreeProgramm = useDegreeProgrammStore((state) => state.setDegreeProgramm)
    return (
        <input
            id="degreeProgramm"
            className="h-6 w-full border border-custom-text"
            type="text"
            placeholder="e.g Information Sience"
            onChange={(e) => setDegreeProgramm(e.target.value)}
        ></input>
    );
}