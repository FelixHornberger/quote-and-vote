'use client'
import { usePartyStore } from "@/zustand/party";
import { useMessageStore} from '@/zustand/message'
import { useState } from "react";
import { generatePrompt } from "@/utils/prompt";
import { useHrefStore } from "@/zustand/href";
import { useConditionStore } from "@/zustand/condition";
import { useSystemPromptStore } from "@/zustand/systemPrompt";

export default function PartySelector() {

    const {setParty} = usePartyStore();
    const addMessage = useMessageStore((state) => state.addMessage);
    const updateMessage = useMessageStore((state) => state.updateMessage);
    const {setSystemPrompt} = useSystemPromptStore();
    const {activeCondition} = useConditionStore();
    const [message, insertedMessage] = useState(false);
    const {href} = useHrefStore()

    const messageID = -99

    // TODO: When this gets changed to its own site smt like -> preStudyPage then this handle click needs to get moved to the button logic.
    // This function should defintly be moved to the button so the calls to the api get reduced to the bare minimum
    const handleClick = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        setParty(e.target.value)
        if (href !== '/pdf') {
            let system_introduction_message = await generatePrompt(e.target.value, activeCondition);
            if (!message) {
                setSystemPrompt (system_introduction_message);
                // addMessage({id: messageID, role: "User", content: system_introduction_message, timestamp: new Date().toLocaleTimeString()})
            } else {
                // updateMessage({id: messageID, role: "User", content: system_introduction_message, timestamp: new Date().toLocaleTimeString()})
                setSystemPrompt (system_introduction_message);
            }
            // addMessage({id: messageID, role: "Assistant", content: "Acknowledged.", timestamp: new Date().toLocaleTimeString()})
        }
    }
            
    return (
        <select id="selected_party" className="h-6 w-full border border-custom-text bg-transparent self-center"
            style={{ fontFamily: "'__Inter_aaf875', '__Inter_Fallback_aaf875', sans-serif" }}
            onChange={(e) => handleClick(e)}>
            <option value="" disabled selected>
                Select an option
            </option>
            <option id="eu_alde">Alliance of Liberals and Democrats for Europe Party (ALDE)</option>
            <option id="eu_ecpm">The European Christian Political Movement (ECPM)</option>
            <option id="eu_ecr">European Conservatives and Reformists (ECR)</option>
            <option id="eu_edp">European Democrats (EDP)</option>
            <option id="eu_efa">European Free Alliance (EFA)</option>
            <option id="eu_epp">European people&apos;s party (EPP)</option>
            <option id="eu_greens">European Greens (EGP)</option>
            <option id="eu_left">European-LEFT (EL)</option>
            <option id="eu_pes">The Party of European Socialists (PES)</option>
        </select>
    );
}