import NavButton from "@/components/buttons/NavButton";
import SurveyID from "@/components/endpage/SurveyID";
import VPInformation from "@/components/endpage/VPInformation";

export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-between">
       <div className="text-center place-items-center mb-3">
                <h1>Thank you for participating!</h1>
            </div>
            <div className="px-5 flex justify-center">
                <div className="task-box mb-3 max-w-prose place-items-center px-5 border border-neutral-900">
                    <p className="text-padding text-center">
                        <SurveyID/>
                        <br />
                        If you have any questions or comments about the study, please do not hesitate to contact me.
                        <br />
                        Felix Hornberger: Felix.Hornberger@stud.uni-regensburg.de
                    </p>
                </div>
            </div>
        <VPInformation/>
    </main>
  );
}
