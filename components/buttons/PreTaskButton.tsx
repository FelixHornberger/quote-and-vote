'use client'

import { usePartyStore } from "@/zustand/party";
import UserFeedback from "../UserFeedback";
import { useState } from "react";
import Link from "next/link";
import { useVoteStore } from "@/zustand/vote";

export default function PreTaskButton() {

    const [showUserFeedback, setVisbility] = useState(false);
    
    const {party} = usePartyStore();
    const {triggered} = useVoteStore();
    const handleClick = async (e: React.MouseEvent) => {
        if (party !== '' && triggered !== false ) {
        } else {
          setVisbility(true);
          e.preventDefault();
        }
    }

    // TODO: Better feedbacktext

    return (
        <div className='flex felx-col justify-center items-center text-center mb-3'>
          <div>
            {showUserFeedback && <UserFeedback feedbackText='You cannot go to the next page without having stated all questions' />}
            <Link href='/task-des'>
              <button onClick={handleClick} className="bg-custom-accent p-2 font-semibold mt-3">
                Next page
              </button>
            </Link>
          </div>
        </div>
    )
}
