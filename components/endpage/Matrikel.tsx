'use client';
import { useMatrikelStore } from "@/zustand/matrikel";

export default function Martikel() {
    const setMatrikel = useMatrikelStore((state) => state.setMatrikel)
    return (
        <input type="number" className="h-6 w-full border border-custom-text" onChange={(e) => setMatrikel(e.target.value)} placeholder="e.g. 345890" id="matrikel"/>
    );
}