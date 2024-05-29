'use client'

import { useVoteStore } from "@/zustand/vote";
import { ChangeEvent, useState } from "react";

export default function QuestionElement({ question }: { question: string }) {
    const { setVote, setTriggered } = useVoteStore();
    const [checked, setChecked] = useState<boolean | null>(null);

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

    return (
        <div className="flex-col border border-neutral-900 p-5 mb-3">
            <div className="flex text-center sm:text-left justify-center sm:justify-normal mb-3">
                <h2>{question}</h2>
            </div>
            <div className="flex mx-5 my-5 sm:my-0 justify-center sm:justify-normal">
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