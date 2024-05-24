'use client'

import { useLikertscaleGradingStore } from "@/zustand/likertscale";
import { usePartyStore } from "@/zustand/party";
import UserFeedback from "../UserFeedback";
import { useState } from "react";
import { useHrefStore } from "@/zustand/href";
import Link from "next/link";

export default function PreTaskButton() {

    const [showUserFeedback, setVisbility] = useState(false);
    
    const {party} = usePartyStore();
    const {likertscaleGrading} = useLikertscaleGradingStore();
    const {href} = useHrefStore();

    const handleClick = (e: React.MouseEvent) => {
      console.log(`TEST: ${likertscaleGrading['eligibilityBefore']}, partySlected: ${party}`)
      console.log(`href: ${href}`)
        if (likertscaleGrading['eligibilityBefore'] !== '' && party !== '') { 
        } else {
          setVisbility(true);
          e.preventDefault();
        }
      }

    // TODO: Better feedbacktext

    return (
        <div className='flex felx-col justify-center items-center text-center mb-3'>
          <div>
            {showUserFeedback && <UserFeedback feedbackText='You cannot go to the next page without having stated all topics' />}
            <Link href={href}>
              <button onClick={handleClick} className="bg-custom-accent p-2 font-semibold mt-3">
                Next page
              </button>
            </Link>
          </div>
        </div>
    )
}
