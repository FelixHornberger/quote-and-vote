import NavButton from "@/components/buttons/NavButton";

export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="text-center place-items-center mb-3">
        <h1 >Welcome to my Study</h1>
      </div>
        <div className="px-5 flex justify-center">
          <div className="task-box mb-3 max-w-prose place-items-center px-5 border border-neutral-900">
              <p className="text-center">
                You have been invited to take part in my online study to gather information for the EU elections on 9 June 2024.
                The study will be conducted by Felix Hornberger and supervised by Dr. David Elsweiler from the University of Regensburg. 
                The duration of the study is 15 minutes. Students at the University of Regensburg will receive 0.25 credit hours. 
                The study can only be started once and should be completed in one go.
              </p>
          </div>
        </div>
        <NavButton href={"/information-consent"}></NavButton>
    </main>
  );
}
