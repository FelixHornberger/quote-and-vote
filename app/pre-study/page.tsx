import PreStudyButton from "@/components/buttons/PreStudyButton";
import QuesitonElementPreStudy from "@/components/preStudy/QuestiomElementPreStudy";

export default function Home() {


  const question1 = "How many members does the European Parliament have?";
  const labels1 = ["a) 600","b) 705","c) 751","d) 800"];

  const question2 = "How often are European Parliament elections held?";
  const labels2 = ["a) Every 3 years","b) Every 4 years","c) Every 5 years","d) Every 6 years"];

  const question3 = "Which of the following institutions shares legislative power with the European Parliament?";
  const labels3 = ["a) The European Council","b) The European Commission","c) The Council of the European Union","d) The European Court of Justice"];

  const question4 = "What is the main function of the European Parliament?";
  const labels4 = ["a) To propose new EU laws","b) To pass and amend legislation","c) To manage the EU budget directly","d) To adjudicate legal disputes between member states"];

  const question5 = "What is the process called when the European Parliament votes to approve or reject the European Commission as a whole?";
  const labels5 = ["a) Confirmation hearing","b) Legislative review","c) Motion of censure","d) Investiture vote"];

  return (
    <main className="flex flex-col items-center">
      <div className="text-center place-items-center mb-3">
        <h1>Please answer the following quiz:</h1>
      </div>
      <div className="w-[75%] sm:w-[50%]">
        <QuesitonElementPreStudy question={question1} labels={labels1} answerKey="answer1"  ></QuesitonElementPreStudy>
        <QuesitonElementPreStudy question={question2} labels={labels2} answerKey="answer2"  ></QuesitonElementPreStudy>
        <QuesitonElementPreStudy question={question3} labels={labels3} answerKey="answer3" ></QuesitonElementPreStudy>
        <QuesitonElementPreStudy question={question4} labels={labels4} answerKey="answer4" ></QuesitonElementPreStudy>
        <QuesitonElementPreStudy question={question5} labels={labels5} answerKey="answer5" ></QuesitonElementPreStudy>
      </div>
      <PreStudyButton></PreStudyButton>
    </main>
  );
}