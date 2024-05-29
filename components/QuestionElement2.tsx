import PartySelector from "./PartySelector";

export default function QuestionElement({question}:{question:string}) {
    return (
        <div className="flex flex-col border border-neutral-900 p-5 mb-3">
            <div className="flex text-center sm:text-left justify-center sm:justify-normal mb-3">
                <h2>{question}</h2>
            </div>
            <PartySelector></PartySelector>
            <p className="text-base pt-2.5 sm:pt-1">The Identity and Democracy Party (ID) is not included, as the party was unable to agree on an election programme for this election.</p>
        </div>
    );
}