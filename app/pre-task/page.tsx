import PreTaskButton from "@/components/buttons/PreTaskButton";
import InfoText from "@/components/preTask/InfoText";
import QuestionElement from "@/components/preTask/QuestionElement";
import QuestionElement2 from "@/components/preTask/QuestionElement2";
import QuestionElement3 from "@/components/preTask/QuestionElement3";

export default function Home() {

  return (
    <main className="flex flex-col items-center">
      <div className="text-center place-items-center mb-3">
        <h1>Please answer the following questions:</h1>
      </div>
      <div className="w-[75%] sm:w-[50%]">
        <InfoText></InfoText>
        <QuestionElement2 question={"In what EU-party are you interested?"}></QuestionElement2>
        <QuestionElement question={"Why are you interested in this party?"} topic={"eligibilityBefore"}  ></QuestionElement>
        <QuestionElement3 question="Would you vote for a party in this eu-party?"></QuestionElement3>
      </div>
      <PreTaskButton></PreTaskButton>
    </main>
  );
}
