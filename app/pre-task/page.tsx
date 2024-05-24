import NavButton from "@/components/buttons/NavButton";
import PreTaskButton from "@/components/buttons/PreTaskButton";
import QuestionElement from "@/components/QuestionElement";
import QuestionElement2 from "@/components/QuestionElement2";

export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="text-center place-items-center mb-3">
        <h1>Please answer the following questions:</h1>
      </div>
      <div className="w-[75%] sm:w-[]">
        <QuestionElement2 question={"In what party are you interested?"}></QuestionElement2>
        <QuestionElement question={"Would you vote for this party"} topic={"eligibilityBefore"}  ></QuestionElement>
      </div>
      <PreTaskButton></PreTaskButton>
    </main>
  );
}
  