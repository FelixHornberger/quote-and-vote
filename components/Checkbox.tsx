'use client'
import { useCheckboxStore } from "@/zustand/checkbox";
import NavButton from "./buttons/NavButton";
import { useEffect, useRef } from "react";

export default function Checkbox({checkboxText}: {checkboxText:string}) {
    // I accept the conditions
    const checkboxStore = useCheckboxStore();
    const { accepted } = useCheckboxStore();
    const setIC = useCheckboxStore((state) => state.setAccpted);

    const navButtonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (accepted && navButtonRef.current) {
            navButtonRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [accepted]);

    return (
        <>
        <div className="px-5 sm:justify-center sm:flex mb-2" >
            <input type="checkbox" name="InformedConsent" id="InformedConsentCheckBox" onChange={() => setIC(!checkboxStore['accepted'])} />
            <label htmlFor="InformedConsentCheckBox" className="px-1">{checkboxText}</label>
            
        </div>
        {accepted && 
            <div ref={navButtonRef}>
                <NavButton href={"/pre-study"}/>
            </div>
        }
        </>
    );
}