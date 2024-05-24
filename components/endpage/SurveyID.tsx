'use client'

import { useIDtore } from "@/zustand/surveyID";

export default function SurveyID() {
    const { surveyID } = useIDtore();

    return(
        <p>Your SurveyID is: { surveyID }</p>
    )
}