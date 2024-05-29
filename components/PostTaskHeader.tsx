'use client'

import { usePartyStore } from "@/zustand/party"
import { useVoteStore } from "@/zustand/vote"

export default function PostTaskHeader() {
    const {vote} = useVoteStore()
    const {party} = usePartyStore()

    let headline = ""
    if (vote) {
        headline = `You previously stated that you would vote for ${party}. How confident are you in this decision now?`
    } else {
        headline = `You previously stated that you would not vote for ${party}. How confident are you in this decision now?`
    }

    return(
        <h2 className="my-2.5">{headline}</h2>
    )
}