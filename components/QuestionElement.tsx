import Likertscale from "./Likertscale";

export default function QuestionElement({question, topic}:{question:string, topic:string}) {
    return (
        <div className="flex-col border border-neutral-900 p-5 mb-3">
            <div className="flex text-center justify-center mb-3">
                <h2>{question}</h2>
            </div>
            <Likertscale topic={topic} descriptionLeft="I would never vote for this party" descriptionRight={"I would vote for this party"} />
        </div>
    );
}