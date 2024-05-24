'use client';
import { useFirstNameStore } from "@/zustand/firstname";

export default function FirstName() {
    const setFirstName = useFirstNameStore((state) => state.setFirstName)
    return (
        <input
            id="firstName"
            className="h-6 w-full border border-custom-text"
            type="text"
            placeholder="e.g Max"
            onChange={(e) => setFirstName(e.target.value)}
        ></input>
    );
}