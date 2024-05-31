'use client'

import { useIDStore } from "@/zustand/surveyID";

export default function SurveyID() {

    const { surveyID } = useIDStore();

    return(
        <p>Your SurveyID is: { surveyID }</p>
    )
}