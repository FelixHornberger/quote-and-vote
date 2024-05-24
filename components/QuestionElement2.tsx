import PartySelector from "./PartySelector";

export default function QuestionElement({question}:{question:string}) {
    return (
        <div className="flex flex-col border border-neutral-900 p-5 mb-3">
            <div className="flex text-center justify-center mb-3">
                <h2>{question}</h2>
            </div>
            <PartySelector></PartySelector>
        </div>
    );
}