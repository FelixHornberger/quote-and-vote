'use client'
import { useState } from "react";

import { useAgeStore } from '@/zustand/age'
import { useLevelOfEducationStore } from "@/zustand/education";
import { useGenderStore } from "@/zustand/gender";
import { useOccupationStore } from "@/zustand/occupation";
import { useVPStore } from "@/zustand/vp";
import UserFeedback from "../UserFeedback";
import { useLikertscaleGradingStore } from "@/zustand/likertscale";
import { useInformationGatheringStore } from "@/zustand/informationgathering";
import Link from "next/link";
import { useTimeDataStore } from "@/zustand/time";
import { useIDStore } from "@/zustand/surveyID";
import { useArgumentStore } from "@/zustand/argument";
import { useQuizStore } from "@/zustand/quiz";
import { usePartyStore } from "@/zustand/party";
import { useInterestStore } from "@/zustand/interest";
import { useVoteStore } from "@/zustand/vote";
import { useHrefStore } from "@/zustand/href";
import { useConditionStore } from "@/zustand/condition";
import { useMessageStore } from "@/zustand/message";

export default function DemographicsButton() {

    const [showUserFeedback, setVisbility] = useState(false);

    const { age } = useAgeStore();
    const { levelOfEducation } = useLevelOfEducationStore();
    const { gender } = useGenderStore();
    const { occupation } = useOccupationStore();
    const { preferedWay } = useInformationGatheringStore();
    const { likertscaleGrading } = useLikertscaleGradingStore();
    const { setVP } = useVPStore();

    const { setSurveyID } = useIDStore();

    const {argument} = useArgumentStore();
    const {quizData} = useQuizStore();

    const {party} = usePartyStore();
    const {interest} = useInterestStore();
    const {vote} = useVoteStore();

    const {href} = useHrefStore();
    const {activeCondition} = useConditionStore();

    const {timeData} = useTimeDataStore();

    const {messages} = useMessageStore();

    // TODO SUBMISSION LOGIC

    const handleClick = async (e: React.MouseEvent) => {

      let chat = false;
      if (href === `/chat`) {
        chat = true;
      }

      if (age !== '' && levelOfEducation !== '' && gender !== '' && occupation !== '' && likertscaleGrading['politicalSelfEstimation'] !== '' && preferedWay !== '') {
        if (occupation.toLocaleLowerCase().includes('student')) {
          setVP(true);
        }
        const response = await fetch('/api/submitUser', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              "age": age,
              "gender": gender,
              "levelOfEducation": levelOfEducation,
              "occupation": occupation,
              "preferedInformationGatheringWay": preferedWay, 
              "politicalSelfEstimation": likertscaleGrading['politicalSelfEstimation'],

              "eligibilityAfter": likertscaleGrading['eligibilityAfter'],
              "argumentsAfter": argument,

              "quizAnswers": quizData,

              "party": party, 
              "partyInterest": interest, 
              "partyVote": vote,

              "chat": chat, 
              "condition": activeCondition,

              "timestamps": timeData,  
              "timestamp_demographic": new Date().toLocaleTimeString(),
              "dateOfSubmission": new Date()
          }),
      });

      if (response.ok) {
          const data = await response.json();
          const { participant_id } = data;
          setSurveyID(participant_id);
          if (href === `/chat`){
            const responseMessages = await fetch('/api/submitMessages', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  participant_id,
                  messages
              }),
            });
          }
      }
      } else {
        setVisbility(true);
        e.preventDefault();
      }
    }


  return (
      <div className='flex felx-col justify-center items-center text-center mb-3'>
        <div>
          {showUserFeedback && <UserFeedback feedbackText='Before you can go to the next page, you must complete all the forms on this page!' />}
          <Link href="/end">
            <button onClick={handleClick} className="bg-custom-accent p-2 font-semibold mt-3">
              Next page
            </button>
          </Link>
        </div>
      </div>
  )
}