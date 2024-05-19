'use client'
import { useState } from "react";

import { useAgeStore } from '@/zustand/age'
import { useLevelOfEducationStore } from "@/zustand/education";
import { useGenderStore } from "@/zustand/gender";
import { useOccupationStore } from "@/zustand/occupation";
import { useVPStore } from "@/zustand/vp";
import UserFeedback from "../UserFeedback";

export default function DemographicsButton() {

    const [showUserFeedback, setVisbility] = useState(false);

    const { age } = useAgeStore();
    const { levelOfEducation } = useLevelOfEducationStore();
    const { gender } = useGenderStore();
    const { occupation } = useOccupationStore();
    const {setVP} = useVPStore();

    const handleClick = () => {
        if (age !== '' && levelOfEducation !== '' && gender !== '' && occupation !== '') {
            if (occupation.toLocaleLowerCase().includes('student')) {
                setVP(true);
            }
            // TODO: link to new page
            // nextPage(1);
        } else {
            setVisbility(true);
        }
    }


    return (
        <div className='flex felx-col justify-center items-center text-center mb-3'>
          <div>
            {showUserFeedback && <UserFeedback feedbackText='You cannot go to the next page without having stated all topics' />}
            <button onClick={() => handleClick()} className="bg-custom-accent p-2 font-semibold mt-3">
              Continue
            </button>
          </div>
        </div>
      )
}