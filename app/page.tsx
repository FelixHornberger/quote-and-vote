import NavButton from "@/components/buttons/NavButton";

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="text-center place-items-center mb-3">
        <h1 >Welcome to my Study</h1>
      </div>
        <div className="px-5 flex justify-center">
          <div className="task-box mb-3 max-w-prose place-items-center px-5 border border-neutral-900">
              <p className="">
                You are invited to participate in an online study conducted in the context of the upcoming European elections on 9 June 2024, where national parties will be elected to win seats in the European Parliament. 
                These national parties often form political groups, each with its own election program. 
                The purpose of this study is to provide participants with different means to learn about a party of their choice and analyse how this impacts their engagement with the material and the amount of political knowledge gained. 
                The study is conducted by Felix Hornberger and supervised by Dr. David Elsweiler from the University of Regensburg. The study will take approximately 15 minutes to complete. 
                University of Regensburg students will receive 0.25 credit hours for their participation. 
                Please note that the study can only be started once and must be completed in a single session.
              </p>
          </div>
        </div>
        <NavButton href={"/information-consent"}></NavButton>
    </main>
  );
}
