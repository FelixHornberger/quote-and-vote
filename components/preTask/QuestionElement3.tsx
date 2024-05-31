'use client'

import { usePartyStore } from "@/zustand/party";
import { useVoteStore } from "@/zustand/vote";
import { ChangeEvent, useState } from "react";

export default function QuestionElement({ question }: { question: string }) {

    const { setVote, setTriggered } = useVoteStore();
    const [checked, setChecked] = useState<boolean | null>(null);
    const {party} = usePartyStore()

    function handleRadioChange(event: ChangeEvent<HTMLInputElement>): void {
        const selectedValue = event.target.value;

        if (selectedValue === 'true') {
            setVote(true);
            setTriggered(true);
            setChecked(true);
        } else {
            setVote(false);
            setTriggered(true);
            setChecked(false);
        }
    }

    let partiesToDisplay = "You have to select a party to see the question"
    let additionalInformation= ""

    switch (party) {
        case 'Alliance of Liberals and Democrats for Europe Party (ALDE)':
            partiesToDisplay = `Would you vote for the FDP, which is a member of this EU-party?`;
            additionalInformation = `The ALDE and the European Democrats (EDP) form the Renew Europe (Renew) fraction.`;
            break;
        case 'The European Christian Political Movement (ECPM)':
            partiesToDisplay = "Would you vote for the Bündnis C or the Familien-Partei, which is a member of this EU-party?";
            additionalInformation = `The ECPM and the European Conservatives and Reformists Party (ECR Party) form the European Conservatives and Reformists (ECR)  fraction.`;
            break;
        case 'European Conservatives and Reformists (ECR-Party)':
            partiesToDisplay = "Would you vote for the Wir Bürger, which is a member of this EU-party?"
            additionalInformation = `ECR Party and the European Christian Political Movement (ECPM) form the European Conservatives and Reformists (ECR) fraction.`;
            break;
        case 'European Democrats (EDP)':
            partiesToDisplay = `Would you vote for the Freien Wähler, which is a member of this EU-party?`;
            additionalInformation = `The EDP and Alliance of Liberals and Democrats for Europe Party (ALDE) form the Renew Europe (Renew) fraction.`;
            break;
        case 'European Free Alliance (EFA)':
            partiesToDisplay = `Would you vote for the Bayern Partei or Südschleswigsche Wählerverband (SSW) the, which is a member of this EU-party?`;
            additionalInformation = `The EFA, European Green Party (EGP), European Pirate Party (PPEU) and Volt Europa (Volt) form the Greens–European Free Alliance (Greens–EFA) fraction.
                                    In contrast, individual EFA members, mostly from Spain, have joined the left-wing GUE/NGL, and the members of the Flemish N-VA have been part of the national conservative EKR since 2014.`;
            break;
        case 'European people\'s party (EPP)':
            partiesToDisplay = "Would you vote for the CDU or the CSU, which is a member of this EU-party / fraction?";
            additionalInformation = ""
            break;
        case 'European Greens (EGP)':
            partiesToDisplay = "Would you vote for the BÜNDIS 90 / Die Grünen, which is a member of this EU-party?";
            additionalInformation = `The EGP forms together with the European Free Alliance (EFA),
                                    European Pirate Party (PPEU) and Volt Europa (Volt) the Greens–European Free Alliance (Greens–EFA) group.`;
            break;
        case 'European-LEFT (EL)':
            partiesToDisplay = "Would you vote for the Die Linke, which is a member of this EU-party?";
            additionalInformation = `The EL forms together with the Nordic Green Left Alliance (NGLA), European Anti-Capitalist Left (EACL), Now the People! (NTP!) 
                                    the The Left in the European Parliament – GUE/NGL (GUE-NGL) `;
            break;
        case 'The Party of European Socialists (PES)':
            partiesToDisplay = "Would you vote for the SPD, which is a member of this EU-party?";
            additionalInformation = "The PES is the only party in the Progressive Alliance of Socialists and Democrats (S&D) group.";
            break;
        case 'European Pirate Party (PPEU)':
            partiesToDisplay = "Would you vote for the Piratenpartei Deutschland, which is a member of this EU-party?";
            additionalInformation = "The PPEU, European Green Party (EGP), Volt Europa (Volt) and European Free Alliance (EFA) form the Greens–European Free Alliance (Greens–EFA) fraction.";
            break;
        case 'Volt Europa (Volt)':
            partiesToDisplay = "Would you vote for the Volt Deutschland, which is a member of this EU-party?";
            additionalInformation = "The Volt, European Green Party (EGP), European Pirate Party (PPEU) and European Free Alliance (EFA) form the Greens–European Free Alliance (Greens–EFA) fraction.";
            break;
}

    return (
        <div className="flex-col border border-neutral-900 p-5 mb-3">
            <div className="flex-col text-center sm:text-left justify-center sm:justify-normal mb-3">
                <h2 className="whitespace-pre-line">{partiesToDisplay}</h2>
                <p>{additionalInformation}</p>
            </div>
            <div className="flex my-5 sm:my-0 justify-center sm:justify-start">
                <ul className="list-none justify-center inline-grid sm:flex">
                    <label
                        htmlFor="yes"
                        className={`inline-flex items-center px-4 py-2 border-2 rounded cursor-pointer text-lg transition-all m-2.5 ${
                            checked === true ? 'border-black' : ''
                        }`}
                    >
                        <input
                            id="yes"
                            type="radio"
                            name={"TEST"}
                            value={'true'}
                            onChange={handleRadioChange}
                            className="hidden"
                        />
                        Yes
                    </label>
                    <label
                        htmlFor="no"
                        className={`inline-flex items-center px-4 py-2 border-2 rounded cursor-pointer text-lg transition-all m-2.5 ${
                            checked === false ? 'border-black ' : ''
                        }`}
                    >
                        <input
                            id="no"
                            type="radio"
                            name={"TEST"}
                            value={'false'}
                            onChange={handleRadioChange}
                            className="hidden"
                        />
                        No
                    </label>
                </ul>
            </div>
        </div>
    );
}