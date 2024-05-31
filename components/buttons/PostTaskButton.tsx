'use client'
import { useLikertscaleGradingStore } from '@/zustand/likertscale';
import Link from 'next/link';
import { useState } from 'react';
import UserFeedback from '../UserFeedback';
import { useTimeDataStore } from '@/zustand/time';

export default function PostTaskButton(){

    const [showUserFeedback, setVisbility] = useState(false);
    const {likertscaleGrading} = useLikertscaleGradingStore();
    const {setTimeData} = useTimeDataStore()

    const handleClick = (e: React.MouseEvent) => {
        if (likertscaleGrading['eligibilityAfter'] !== '' ) { 
            setTimeData({postTask: new Date().toLocaleTimeString()});
        } else {
          setVisbility(true);
          e.preventDefault();
        }
    }

    return (
        <div className='flex flex-col text-center justify-center'>
            {showUserFeedback && <UserFeedback feedbackText='You cannot go to the next page without having stated all topics' />}
            <Link href="/demographic" passHref>
                <button className='bg-custom-accent p-2 font-semibold my-3' onClick={handleClick}>
                    Next Page
                </button>
            </Link>
        </div>
    );
};