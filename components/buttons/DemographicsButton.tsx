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

export default function DemographicsButton() {

    const [showUserFeedback, setVisbility] = useState(false);

    const { age } = useAgeStore();
    const { levelOfEducation } = useLevelOfEducationStore();
    const { gender } = useGenderStore();
    const { occupation } = useOccupationStore();
    const { preferedWay } = useInformationGatheringStore();
    const {likertscaleGrading} = useLikertscaleGradingStore();
    const {setVP} = useVPStore();

    // TODO SUBMISSION LOGIC

    const handleClick = async (e: React.MouseEvent) => {
      if (age !== '' && levelOfEducation !== '' && gender !== '' && occupation !== '' && likertscaleGrading['politicalSelfEstimation'] !== '' && preferedWay !== '') {
          if (occupation.toLocaleLowerCase().includes('student')) {
              setVP(true);
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