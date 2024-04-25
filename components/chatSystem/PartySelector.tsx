'use client'
import { usePartyStore } from "@/zustand/party";
import { useMessageStore} from '@/zustand/message'
import { useState } from "react";
import { timeStamp } from "console";
import { generatePrompt } from "@/utils/prompt";

export default function PartySelector() {
    const setParty = usePartyStore((state) => state.setParty);
    const addMessage = useMessageStore((state) => state.addMessage);
    const updateMessage = useMessageStore((state) => state.updateMessage);
    const [message, insertedMessage] = useState(false);

    const messageID = -99

    // TODO: When this gets changed to its own site smt like -> preStudyPage then this handle click needs to get moved to the button logic.

    const handleClick = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        setParty(e.target.value)
        let system_introduction_message = await generatePrompt(e.target.value);
        if (!message) {
            addMessage({id: messageID, role: "User", content: system_introduction_message, timestamp: new Date().toLocaleTimeString()})
        } else {
            updateMessage({id: messageID, role: "User", content: system_introduction_message, timestamp: new Date().toLocaleTimeString()})
        }
    }

    return (
        <select id="selected_party" className="h-6 border border-custom-text bg-transparent self-center"
            style={{ fontFamily: "'__Inter_aaf875', '__Inter_Fallback_aaf875', sans-serif" }}
            onChange={(e) => handleClick(e)}>
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