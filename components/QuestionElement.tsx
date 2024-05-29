import Likertscale from "./Likertscale";

export default function QuestionElement({question, topic}:{question:string, topic:string}) {
    return (
        <div className="flex-col border border-neutral-900 p-5 mb-3">
            <div className="flex text-center sm:text-left justify-center sm:justify-normal mb-3">
                <h2>{question}</h2>
            </div>
            <Likertscale topic={topic} descriptionLeft="Never would I vote for this party" descriptionRight={"I will vote for this party"} />
        </div>
    );
}