'use client'
import { usePartyStore } from "@/zustand/party";

// When you optimize this you could probalby use one Selct Input for both gender and occupation but what do i know :()
export default function PartySelector() {
    const setGender = usePartyStore((state) => state.setParty)
    return (
        <select id="selected_party" className="h-6 border border-custom-text bg-transparent self-center"
            style={{ fontFamily: "'__Inter_aaf875', '__Inter_Fallback_aaf875', sans-serif" }}
            onChange={(e) => setGender(e.target.value)}>
            <option value="" disabled selected>
                Select an option
            </option>
            <option id="de_afd">AfD</option>
            <option id="de_bsw">BSW</option>
            <option id="de_union">Union</option>
            <option id="de_linke">Die Linke</option>
            <option id="de_fdp">FDP</option>
            <option id="de_fw">Freie Waehler</option>
            <option id="de_gruene">Buendnis90 / Die Gruenen</option>
            <option id="de_spd">SPD</option>
            <option id="de_tierschutzpartei">Tierschutzpartei</option>
            <option id="eu_alde">Alliance of Liberals and Democrats for Europe Party (ALDE)</option>
            <option id="eu_ecpm">The European Christian Political Movement (ECPM)</option>
            <option id="eu_edp">European Democrats (EDP)</option>
            <option id="eu_efa">European Free Alliance (EFA)</option>
            <option id="eu_epp">European people&apos;s party (EPP)</option>
            <option id="eu_greens">European Greens (EGP)</option>
            <option id="eu_left">European-LEFT (EL)</option>
            <option id="eu_pes">The Party of European Socialists (PES)</option>
        </select>
    );
}